# DM Motos — Demonstração

Sistema de gestão para oficinas de motocicletas, desenvolvido com React, TypeScript e Vite.

> Este é um ambiente público de demonstração. O repositório principal de desenvolvimento permanece privado: [DMotos](https://github.com/petrykpm/DMotos).

**Demonstração online:** https://dmotos-demo-p4qyy99s6-petryk.vercel.app

## Acesso de demonstração

- **E-mail:** `demo@dmmotos.com`
- **Senha:** `demo123`

As credenciais são públicas e servem apenas para entrar na experiência demonstrativa. Não use dados reais.

## Funcionalidades

- Cadastro e consulta de clientes.
- Cadastro de motocicletas e histórico por cliente.
- Ordens de serviço e acompanhamento de status.
- Controle de estoque, entrada de peças e categorias.
- Relatórios operacionais e geração de PDF.
- Preferências básicas da oficina.
- Interface responsiva e suporte PWA.

## Como os dados funcionam

A demonstração não utiliza Supabase, API externa ou banco de dados remoto.

- Os registros iniciais são fictícios e definidos no código.
- As alterações são armazenadas no `localStorage` do navegador.
- Os dados ficam isolados no navegador e dispositivo utilizados.
- Limpar os dados do site ou usar outro navegador restaura uma base independente.
- Limpar os dados do site no navegador restaura os registros iniciais.
- Login é simulado no frontend e não representa autenticação segura para produção.

## Executar localmente

Requisitos: Node.js LTS e npm.

```bash
git clone https://github.com/petrykpm/DMotos-Demo.git
cd DMotos-Demo
npm ci
npm run dev
```

Para validar a aplicação:

```bash
npm run lint
npm test
npm run build
```

## Stack

- React 18, TypeScript e Vite.
- Tailwind CSS, shadcn/ui, Radix UI e Lucide.
- React Router, React Query e React Hook Form.
- localStorage para persistência local da demonstração.
- Vitest e Playwright para testes.

## Segurança e limitações

- Não há conexão com o Supabase original nem com dados reais.
- Não insira informações pessoais, credenciais ou dados de clientes.
- O login demonstrativo é facilmente inspecionável e não deve ser reutilizado em produção.
- O armazenamento local não sincroniza informações entre usuários ou dispositivos.

## Autor

Petryk — https://github.com/petrykpm
