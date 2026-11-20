-- Funções de estoque do DM Motos.
-- Execute após supabase/schema.sql. Chamadas ficam limitadas ao usuário autenticado
-- e às peças que pertencem a ele; RLS continua ativa.

create or replace function public.incrementar_estoque(p_peca_id uuid, p_quantidade integer)
returns void
language plpgsql
set search_path = public, pg_temp
as $$
begin
  if auth.uid() is null or p_quantidade <= 0 then
    raise exception 'Parâmetros inválidos ou usuário não autenticado';
  end if;

  update public.pecas
  set quantidade = quantidade + p_quantidade,
      updated_at = now()
  where id = p_peca_id
    and user_id = auth.uid();

  if not found then
    raise exception 'Peça não encontrada ou sem permissão';
  end if;
end;
$$;

create or replace function public.decrementar_estoque(p_peca_id uuid, p_quantidade integer)
returns void
language plpgsql
set search_path = public, pg_temp
as $$
begin
  if auth.uid() is null or p_quantidade <= 0 then
    raise exception 'Parâmetros inválidos ou usuário não autenticado';
  end if;

  update public.pecas
  set quantidade = quantidade - p_quantidade,
      updated_at = now()
  where id = p_peca_id
    and user_id = auth.uid()
    and quantidade >= p_quantidade;

  if not found then
    raise exception 'Estoque insuficiente, peça não encontrada ou sem permissão';
  end if;
end;
$$;

revoke all on function public.incrementar_estoque(uuid, integer) from public, anon;
revoke all on function public.decrementar_estoque(uuid, integer) from public, anon;
grant execute on function public.incrementar_estoque(uuid, integer) to authenticated;
grant execute on function public.decrementar_estoque(uuid, integer) to authenticated;

-- O cliente do sistema permite excluir ordens de serviço.
drop policy if exists "ordens_delete_own" on public.ordens_servico;
create policy "ordens_delete_own"
  on public.ordens_servico for delete
  using (auth.uid() = user_id);
