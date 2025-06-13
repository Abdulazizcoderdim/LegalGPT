import { LegalGPTResponseSchema } from "@/lib/validation";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { input } = await req.json();

  const messages = [
    {
      role: "user",
      content: `
  You are a legal AI assistant. Only respond in the following strict JSON format:
  
  {
    "summary": "Brief summary of the input text",
    "highlights": [
      {
        "title": "Name of the risk",
        "description": "Explanation of the risk",
        "severity": "low" | "medium" | "high" | "warning"
      }
    ],
    "originalText": "<The original user input text>"
  }
  
  Only return valid JSON. Do not include any additional text or explanations.
  
  The input text is: ${input}
      `.trim(),
    },
  ];

  try {
    const res = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct",
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

    const raw = res.data.choices[0].message.content;

    const parsed = JSON.parse(raw);
    // const validated = LegalGPTResponseSchema.parse(parsed);

    return NextResponse.json(parsed);
  } catch (error) {
    return NextResponse.json({
      error: "Model noto‘g‘ri formatda javob berdi",
      details: (error as any)?.message,
      status: 500,
    });
  }
}
