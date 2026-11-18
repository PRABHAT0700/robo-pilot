import type OpenAI from "openai";
import { chunkPylotKnowledge } from "@/lib/pylot-knowledge";
import { cosineSimilarity, embedTexts } from "@/lib/pylot-ai";
import { getSupabaseAdmin, matchPylotDocuments } from "@/lib/pylot-supabase";

type CachedEmbedding = { content: string; embedding: number[] };

declare global {
  var __pylotLocalEmbeddings: CachedEmbedding[] | undefined;
}

async function localVectorSearch(openai: OpenAI, queryEmbedding: number[], k: number) {
  if (!globalThis.__pylotLocalEmbeddings) {
    const chunks = chunkPylotKnowledge();
    const embeddings = await embedTexts(
      openai,
      chunks.map((chunk) => chunk.content),
    );
    globalThis.__pylotLocalEmbeddings = chunks.map((chunk, i) => ({
      content: chunk.content,
      embedding: embeddings[i],
    }));
  }

  return globalThis.__pylotLocalEmbeddings
    .map((item) => ({
      content: item.content,
      similarity: cosineSimilarity(queryEmbedding, item.embedding),
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, k);
}

export async function retrievePylotContext(openai: OpenAI, query: string, k = 6) {
  const [queryEmbedding] = await embedTexts(openai, [query]);
  const supabase = getSupabaseAdmin();

  if (supabase) {
    try {
      const matched = await matchPylotDocuments(supabase, queryEmbedding, k);
      if (matched.length) {
        return {
          source: "supabase" as const,
          chunks: matched,
        };
      }
    } catch (error) {
      console.warn("[pylot] supabase match failed, using local embeddings", error);
    }
  }

  const local = await localVectorSearch(openai, queryEmbedding, k);
  return {
    source: "local" as const,
    chunks: local,
  };
}
