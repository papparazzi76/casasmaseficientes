create table if not exists help_docs(
  id bigserial primary key,
  slug text not null unique,
  title text not null,
  content_md text not null,
  updated_at timestamptz default now()
);
insert into help_docs(slug,title,content_md) values
('inicio','Bienvenida','# Bienvenido a Casas Más Eficientes'),
('leads','Gestión de leads','## Leads'),
('integraciones','Integraciones','## Integraciones'),
('experimentos','A/B Testing','## Experimentos'),
('reportes','Reportes','## Reportes')
on conflict do nothing;
