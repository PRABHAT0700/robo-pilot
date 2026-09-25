import { NextResponse } from "next/server";
import { site } from "@/lib/content";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const service = String(body.service || "Not specified").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // Production: forward to CRM / email provider.
    // For now we validate and acknowledge — optionally open mailto on the client.
    console.info("[contact]", { name, email, service, message, to: site.email });

    return NextResponse.json({
      ok: true,
      message: `Thanks ${name}! Your inquiry was received. We'll reply at ${email} soon.`,
    });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
