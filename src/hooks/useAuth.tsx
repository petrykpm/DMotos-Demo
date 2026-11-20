import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

export interface Profile {
  id: string;
  nome: string;
  email: string;
  role: 'admin' | 'mecanico' | 'atendente';
  ativo: boolean;
  avatar_url?: string;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<Profile>) => Promise<void>;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrCreateProfile = useCallback(async (authUser: User): Promise<Profile | null> => {
    // O frontend nunca deve conceder privilégios administrativos.
    // Perfis devem ser provisionados por fluxo confiável no backend/banco.
    const { data, error: fetchErr } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', authUser.id)
      .maybeSingle();

    if (fetchErr) {
      console.error('[auth] Erro ao buscar perfil:', fetchErr.message);
      return null;
    }

    if (!data) {
      console.warn('[auth] Perfil não provisionado para o usuário autenticado.');
      return null;
    }

    return data as Profile;
  }, []);

  useEffect(() => {
    let mounted = true;

    const initSession = async () => {
      try {
        // Timeout de 8s para evitar tela preta infinita caso o Supabase não responda
        const sessionPromise = supabase.auth.getSession();
        let timeoutId: ReturnType<typeof setTimeout>;
        const timeoutPromise = new Promise<never>((_, reject) => {
          timeoutId = setTimeout(() => reject(new Error('Timeout ao restaurar sessão')), 15000);
        });
        const { data: { session } } = await Promise.race([sessionPromise, timeoutPromise]);
        clearTimeout(timeoutId!);
        if (session?.user && mounted) {
          setUser(session.user);
          const p = await fetchOrCreateProfile(session.user);
          if (mounted) {
            if (!p) console.warn('[auth] Perfil não pôde ser carregado/criado');
            setProfile(p ?? null);
          }
        }
      } catch (err) {
        console.error('Erro ao restaurar sessão:', err);
        // Garante que isLoading resolva mesmo em caso de timeout ou erro de rede
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    initSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;
        if (event === 'SIGNED_IN' && session?.user) {
          setUser(session.user);
          const p = await fetchOrCreateProfile(session.user);
          if (mounted) setProfile(p ?? null);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          setProfile(null);
        }
      }
    );

    return () => { mounted = false; subscription.unsubscribe(); };
  }, [fetchOrCreateProfile]);

  const login = useCallback(async (email: string, senha: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password: senha,
      });
      if (authError) {
        throw new Error(
          authError.message === 'Invalid login credentials'
            ? 'E-mail ou senha inválidos'
            : authError.message
        );
      }
      if (data.user) {
        setUser(data.user);
        const p = await fetchOrCreateProfile(data.user);
        if (!p) throw new Error('Não foi possível carregar o perfil. Tente novamente.');
        setProfile(p);
      }
    } catch (e: any) {
      setError(e.message || 'Erro ao fazer login');
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, [fetchOrCreateProfile]);

  const logout = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  }, []);

  const updateProfile = useCallback(async (data: Partial<Profile>) => {
    if (!user) return;
    // Campos privilegiados (role, ativo, id e email) não são editáveis pelo cliente.
    const updates: { nome?: string; avatar_url?: string; updated_at: string } = {
      updated_at: new Date().toISOString(),
    };
    if (typeof data.nome === 'string') updates.nome = data.nome;
    if (typeof data.avatar_url === 'string') updates.avatar_url = data.avatar_url;

    const { data: updated, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id)
      .select()
      .single();
    if (error) throw new Error(error.message);
    setProfile(updated as Profile);
  }, [user]);

  return (
    <AuthContext.Provider value={{
      user, profile, isAuthenticated: !!user, isLoading, login, logout, updateProfile, error,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
