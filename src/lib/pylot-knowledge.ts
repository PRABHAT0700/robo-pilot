import { readFileSync } from "node:fs";
import { join } from "node:path";

export type PylotChunk = {
  id: string;
  title: string;
  content: string;
};

function loadKnowledgeFile() {
  const filePath = join(process.cwd(), "src/content/robopylot-knowledge.md");
  return readFileSync(filePath, "utf8");
}

export function getPylotKnowledge() {
  return loadKnowledgeFile();
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

export function chunkPylotKnowledge(maxChars = 900): PylotChunk[] {
  const text = getPylotKnowledge().trim();
  const sections = text.split(/\n(?=## )/);
  const chunks: PylotChunk[] = [];

  sections.forEach((section, index) => {
    const trimmed = section.trim();
    if (!trimmed) return;
    const title = trimmed.match(/^##?\s+(.+)/)?.[1]?.trim() || `Section ${index + 1}`;
    const baseId = slugify(title) || `section-${index + 1}`;

    if (trimmed.length <= maxChars) {
      chunks.push({ id: baseId, title, content: trimmed });
      return;
    }

    const paragraphs = trimmed.split(/\n{2,}/);
    let buffer = "";
    let part = 0;
    const flush = () => {
      const content = buffer.trim();
      if (!content) return;
      part += 1;
      chunks.push({
        id: `${baseId}-${part}`,
        title,
        content,
      });
      buffer = "";
    };

    for (const para of paragraphs) {
      if ((buffer + "\n\n" + para).length > maxChars && buffer) {
        flush();
      }
      buffer = buffer ? `${buffer}\n\n${para}` : para;
    }
    flush();
  });

  return chunks;
}
