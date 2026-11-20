# DM Motos — Demonstração

Sistema de gestão para oficinas de motocicletas, desenvolvido com React, TypeScript, Vite e Supabase.

> Este repositório é uma versão pública de demonstração do projeto. O repositório de desenvolvimento permanece privado: [DMotos](https://github.com/petrykpm/DMotos).

## Demonstração online

https://dm-moto-pros.vercel.app/

## Módulos do sistema

- Cadastro e consulta de clientes.
- Cadastro de motocicletas.
- Ordens de serviço e acompanhamento de serviços.
- Controle de estoque e entrada de peças.
- Relatórios operacionais.
- Autenticação de usuários.
- Interface responsiva e suporte PWA.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui · React Router · Supabase · Capacitor.

## Configuração local

1. Instale Node.js LTS.
2. Instale as dependências com `npm install`.
3. Copie `.env.example` para `.env.local`.
4. Configure `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` com valores do seu próprio projeto Supabase.
5. Execute `npm run dev`.

Não use uma chave `service_role` no frontend. Ela concede privilégios administrativos e deve permanecer exclusivamente em ambientes de servidor.

## Segurança e dados

- Não versione arquivos `.env` nem credenciais reais.
- Use um projeto Supabase separado para testes e demonstrações.
- Ative Row Level Security (RLS) nas tabelas expostas.
- As permissões devem ser validadas no banco/backend; o frontend não deve conceder funções administrativas.
- Não utilize dados pessoais reais de clientes na demonstração.

## Observação sobre a cópia pública

O código e os arquivos de execução desta demonstração estão sendo preparados para publicação. A versão pública deve ser validada antes de ser considerada reproduzível localmente.

## Autor

Petryk — https://github.com/petrykpm
