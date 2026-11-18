import { NextResponse } from "next/server";
import { getOpenAI, openaiConfig } from "@/lib/pylot-ai";
import { retrievePylotContext } from "@/lib/pylot-retrieve";
import { PYLOT_SYSTEM, buildUserPrompt } from "@/lib/pylot-prompt";

type ChatTurn = { role: "user" | "assistant"; content: string };

export const runtime = "nodejs";
export const maxDuration = 60;

function sse(data: unknown) {
  return `data: ${JSON.stringify(data)}\n\n`;
}

export async function POST(request: Request) {
  const openai = getOpenAI();
  if (!openai) {
    return NextResponse.json(
      {
        error:
          "Ask Pylot is not connected yet. Add OPENAI_API_KEY to .env.local and restart the server.",
      },
      { status: 503 },
    );
  }

  let body: { messages?: ChatTurn[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const question = lastUser?.content?.trim() || "";

  if (question.length < 2) {
    return NextResponse.json({ error: "Type a question first." }, { status: 400 });
  }
  if (question.length > 2000) {
    return NextResponse.json({ error: "Keep questions under 2000 characters." }, { status: 400 });
  }

  try {
    const retrieved = await retrievePylotContext(openai, question, 6);
    const context = retrieved.chunks
      .map((chunk, i) => `[${i + 1}] ${chunk.content}`)
      .join("\n\n---\n\n");

    const history = messages
      .filter((m) => m.content.trim())
      .slice(0, -1)
      .map((m) => ({
        role: m.role,
        content: m.content.slice(0, 2000),
      }));

    const { chatModel } = openaiConfig();
    const completion = await openai.chat.completions.create({
      model: chatModel,
      temperature: 0.3,
      stream: true,
      messages: [
        { role: "system", content: PYLOT_SYSTEM },
        ...history,
        { role: "user", content: buildUserPrompt(question, context) },
      ],
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder.encode(sse({ source: retrieved.source })));
        try {
          for await (const part of completion) {
            const delta = part.choices[0]?.delta?.content;
            if (delta) {
              controller.enqueue(encoder.encode(sse({ delta })));
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        } catch (error) {
          const message = error instanceof Error ? error.message : "Pylot could not reply.";
          controller.enqueue(encoder.encode(sse({ error: message })));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Pylot could not reply.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
