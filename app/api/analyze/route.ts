import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const res = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: `${process.env.NEXT_PUBLIC_AI_MODEL}`,
      messages,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://legalgptpro.vercel.app",
        "X-Title": "LegalGPT",
      },
    }
  );
  const parsed = JSON.parse(res.data.choices[0].message.content);

  return NextResponse.json(parsed);
}
