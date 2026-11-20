-- Bucket privado para fotos de ordens de serviço.
insert into storage.buckets (id, name, public)
values ('os-fotos', 'os-fotos', false)
on conflict (id) do update set public = false;

drop policy if exists "os_fotos_select_own" on storage.objects;
create policy "os_fotos_select_own" on storage.objects
  for select to authenticated
  using (
    bucket_id = 'os-fotos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "os_fotos_insert_own" on storage.objects;
create policy "os_fotos_insert_own" on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'os-fotos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "os_fotos_update_own" on storage.objects;
create policy "os_fotos_update_own" on storage.objects
  for update to authenticated
  using (
    bucket_id = 'os-fotos'
    and (storage.foldername(name))[1] = auth.uid()::text
  )
  with check (
    bucket_id = 'os-fotos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "os_fotos_delete_own" on storage.objects;
create policy "os_fotos_delete_own" on storage.objects
  for delete to authenticated
  using (
    bucket_id = 'os-fotos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
