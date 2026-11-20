-- Categorias personalizadas de peças do DM Motos.
create table if not exists public.categorias_peca (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  nome text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.categorias_peca enable row level security;

drop policy if exists "categorias_select_own" on public.categorias_peca;
create policy "categorias_select_own" on public.categorias_peca
  for select using (auth.uid() = user_id);

drop policy if exists "categorias_insert_own" on public.categorias_peca;
create policy "categorias_insert_own" on public.categorias_peca
  for insert with check (auth.uid() = user_id);

drop policy if exists "categorias_update_own" on public.categorias_peca;
create policy "categorias_update_own" on public.categorias_peca
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "categorias_delete_own" on public.categorias_peca;
create policy "categorias_delete_own" on public.categorias_peca
  for delete using (auth.uid() = user_id);
