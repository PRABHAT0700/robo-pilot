import { NextResponse } from "next/server";
import { chunkPylotKnowledge } from "@/lib/pylot-knowledge";
import { embedTexts, getOpenAI, openaiConfig } from "@/lib/pylot-ai";
import { getSupabaseAdmin } from "@/lib/pylot-supabase";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(request: Request) {
  const expected = process.env.PYLOT_INGEST_SECRET;
  const provided = request.headers.get("x-pylot-ingest-secret");
  if (!expected || provided !== expected) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const openai = getOpenAI();
  const supabase = getSupabaseAdmin();
  if (!openai) {
    return NextResponse.json({ error: "OPENAI_API_KEY is missing." }, { status: 503 });
  }
  if (!supabase) {
    return NextResponse.json(
      { error: "SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required for ingest." },
      { status: 503 },
    );
  }

  const chunks = chunkPylotKnowledge();
  const embeddings = await embedTexts(
    openai,
    chunks.map((chunk) => chunk.content),
  );

  const rows = chunks.map((chunk, i) => ({
    id: chunk.id,
    title: chunk.title,
    content: chunk.content,
    metadata: { source: "robopylot-knowledge.md" },
    embedding: embeddings[i],
    updated_at: new Date().toISOString(),
  }));

  const { error } = await supabase.from("pylot_documents").upsert(rows, { onConflict: "id" });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  globalThis.__pylotLocalEmbeddings = undefined;

  const { embeddingModel } = openaiConfig();
  return NextResponse.json({
    ok: true,
    count: rows.length,
    embeddingModel,
  });
}
