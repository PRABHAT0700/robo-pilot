import OpenAI from "openai";

export function openaiConfig() {
  return {
    apiKey: process.env.OPENAI_API_KEY || "",
    chatModel: process.env.OPENAI_MODEL || "gpt-4.1-mini",
    embeddingModel: process.env.OPENAI_EMBEDDING_MODEL || "text-embedding-3-small",
  };
}

export function getOpenAI() {
  const { apiKey } = openaiConfig();
  if (!apiKey) return null;
  return new OpenAI({ apiKey });
}

export function cosineSimilarity(a: number[], b: number[]) {
  let dot = 0;
  let na = 0;
  let nb = 0;
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i += 1) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  if (!na || !nb) return 0;
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

export async function embedTexts(openai: OpenAI, texts: string[]) {
  const { embeddingModel } = openaiConfig();
  const response = await openai.embeddings.create({
    model: embeddingModel,
    input: texts,
  });
  return response.data
    .sort((a, b) => a.index - b.index)
    .map((item) => item.embedding);
}
