-- Run this in the Supabase SQL editor once.

create extension if not exists vector;

create table if not exists public.pylot_documents (
  id text primary key,
  title text,
  content text not null,
  metadata jsonb default '{}'::jsonb,
  embedding vector(1536) not null,
  updated_at timestamptz default now()
);

create index if not exists pylot_documents_embedding_idx
  on public.pylot_documents
  using hnsw (embedding vector_cosine_ops);

create or replace function public.match_pylot_documents (
  query_embedding vector(1536),
  match_count int default 6,
  match_threshold float default 0.18
)
returns table (
  id text,
  title text,
  content text,
  metadata jsonb,
  similarity float
)
language sql
stable
as $$
  select
    pylot_documents.id,
    pylot_documents.title,
    pylot_documents.content,
    pylot_documents.metadata,
    1 - (pylot_documents.embedding <=> query_embedding) as similarity
  from pylot_documents
  where 1 - (pylot_documents.embedding <=> query_embedding) > match_threshold
  order by pylot_documents.embedding <=> query_embedding
  limit match_count;
$$;

alter table public.pylot_documents enable row level security;
