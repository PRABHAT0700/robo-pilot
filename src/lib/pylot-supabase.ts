import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export type MatchedChunk = {
  content: string;
  similarity: number;
};

export async function matchPylotDocuments(
  supabase: SupabaseClient,
  embedding: number[],
  matchCount = 6,
): Promise<MatchedChunk[]> {
  const { data, error } = await supabase.rpc("match_pylot_documents", {
    query_embedding: embedding,
    match_count: matchCount,
    match_threshold: 0.18,
  });

  if (error) {
    throw new Error(error.message);
  }

  return (data || []).map((row: { content: string; similarity: number }) => ({
    content: row.content,
    similarity: row.similarity,
  }));
}
