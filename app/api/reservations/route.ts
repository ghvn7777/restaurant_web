import { NextResponse } from "next/server";

const WEBHOOK_URL =
  "https://kakama.app.n8n.cloud/webhook/make-reservation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, partySize, dateTime } = body;

    if (!name || !partySize || !dateTime) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, partySize, dateTime }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to create reservation" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
