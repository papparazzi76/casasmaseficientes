create table if not exists sync_audit(
  id bigserial primary key,
  outbox_id bigint,
  destination text not null,
  type text not null,
  started_at timestamptz default now(),
  finished_at timestamptz,
  duration_ms int,
  status text check (status in ('success','failure','skipped')) not null,
  http_status int,
  error text
);
create table if not exists integration_states(
  destination text primary key,
  is_paused boolean default false,
  paused_at timestamptz,
  reason text
);
