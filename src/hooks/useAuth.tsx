import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
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
const SESSION_KEY = 'dmotos-demo-session-v1';
const DEMO_EMAIL = 'demo@dmmotos.com';
const DEMO_PASSWORD = 'demo123';
const defaultProfile: Profile = {
  id: 'demo-admin',
  nome: 'Administrador Demo',
  email: DEMO_EMAIL,
  role: 'admin',
  ativo: true,
};

function makeDemoUser(profile: Profile): User {
  return {
    id: profile.id,
    app_metadata: { provider: 'demo', providers: ['demo'] },
    user_metadata: { nome: profile.nome },
    aud: 'authenticated',
    created_at: new Date(0).toISOString(),
    email: profile.email,
  } as unknown as User;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(SESSION_KEY) === 'active') {
        setProfile(defaultProfile);
        setUser(makeDemoUser(defaultProfile));
      }
    } catch (storageError) {
      console.warn('[demo] Não foi possível restaurar a sessão local.', storageError);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async (email: string, senha: string) => {
    setError(null);
    setIsLoading(true);
    try {
      if (email.trim().toLowerCase() !== DEMO_EMAIL || senha !== DEMO_PASSWORD) {
        throw new Error('Use as credenciais de demonstração exibidas nesta tela.');
      }
      localStorage.setItem(SESSION_KEY, 'active');
      setProfile(defaultProfile);
      setUser(makeDemoUser(defaultProfile));
    } catch (e: any) {
      setError(e.message || 'Não foi possível entrar na demonstração.');
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
    setProfile(null);
  }, []);

  const updateProfile = useCallback(async (data: Partial<Profile>) => {
    setProfile(current => {
      if (!current) return current;
      const updated = { ...current, nome: data.nome ?? current.nome, avatar_url: data.avatar_url ?? current.avatar_url };
      setUser(makeDemoUser(updated));
      return updated;
    });
  }, []);

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
