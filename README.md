# DM Motos — Demonstração

Sistema de gestão para oficinas de motocicletas, desenvolvido como aplicação web responsiva com React, TypeScript, Vite e Supabase.

> Repositório público de demonstração. O repositório principal de desenvolvimento permanece privado: [DMotos](https://github.com/petrykpm/DMotos).

**Demonstração online:** https://dm-moto-pros.vercel.app/

## Funcionalidades

- Cadastro e consulta de clientes.
- Cadastro de motocicletas e histórico por cliente.
- Ordens de serviço e acompanhamento de status.
- Controle de estoque, entrada de peças e categorias personalizadas.
- Relatórios operacionais e geração de PDF.
- Autenticação e perfis de acesso.
- Upload de fotos de ordens de serviço em bucket privado.
- Interface responsiva e suporte PWA.

## Stack

- React 18, TypeScript e Vite.
- Tailwind CSS, shadcn/ui, Radix UI e Lucide.
- React Router, React Query e React Hook Form.
- Supabase Auth, PostgreSQL, RLS e Storage.
- Capacitor para empacotamento Android.
- Vitest e Playwright para testes.

## Executar localmente

Requisitos: Node.js LTS e npm.

```bash
git clone https://github.com/petrykpm/DMotos-Demo.git
cd DMotos-Demo
npm ci
```

Copie `.env.example` para `.env.local` e configure as variáveis com um projeto Supabase próprio:

```env
VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
VITE_SUPABASE_ANON_KEY=SUA_CHAVE_PUBLICA_ANON
```

Depois execute:

```bash
npm run dev
```

Para validar a aplicação:

```bash
npm run lint
npm test
npm run build
```

## Configurar o Supabase

No SQL Editor do seu projeto Supabase, execute os arquivos nesta ordem:

1. `supabase/schema.sql` — tabelas principais, RLS e trigger de criação de perfil.
2. `supabase/functions_estoque.sql` — funções RPC para ajuste atômico de estoque.
3. `supabase/categorias.sql` — categorias personalizadas de peças.
4. `supabase/storage.sql` — bucket privado e políticas para fotos de OS.

O trigger cria novos perfis com a função `mecanico`. Para promover o primeiro administrador, faça isso manualmente no SQL Editor do projeto, após confirmar o UUID correto do usuário:

```sql
update public.profiles
set role = 'admin'
where id = 'UUID_DO_USUARIO';
```

Não permita que o frontend escolha ou altere a própria função. As políticas RLS e as permissões no banco são a camada efetiva de autorização.

## Segurança

- Nunca coloque uma chave `service_role` no frontend ou em variáveis `VITE_*`.
- A chave pública `anon` pode estar no frontend; a segurança depende de RLS corretamente configurada.
- Use um projeto Supabase separado para desenvolvimento e demonstração.
- Não utilize dados pessoais reais de clientes.
- Não versione arquivos `.env`, tokens, senhas ou credenciais.
- O repositório não inclui a pasta gerada `android/` nem o arquivo local `.env.production`.

## Estrutura

```text
src/
  components/   # Componentes compartilhados e UI
  hooks/        # Hooks React e autenticação
  lib/          # Supabase, utilitários e geração de PDF
  pages/        # Telas e rotas da aplicação
  services/     # Acesso aos dados e regras de integração
  types/        # Tipos TypeScript
supabase/       # SQL revisado para configuração do banco
public/         # Ícones, PWA e recursos estáticos
```

## Observações

Este repositório é uma cópia pública preparada para demonstração e avaliação técnica. Para executar todas as funcionalidades, é necessário configurar um projeto Supabase próprio e aplicar os scripts SQL acima. A demonstração hospedada pode utilizar configurações e dados independentes deste repositório.

## Autor

Petryk — https://github.com/petrykpm
