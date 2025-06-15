import { NextRequest, NextResponse } from "next/server";
import { getDocument } from "pdfjs-dist";

export const config = {
  runtime: "edge",
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Fayl topilmadi" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = new Uint8Array(bytes);

    let extractedText = "";

    if (file.name.endsWith(".pdf")) {
      const pdf = await getDocument({ data: buffer }).promise;

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items.map((item: any) => item.str).join(" ");
        extractedText += pageText + "\n";
      }
    } else if (file.name.endsWith(".txt")) {
      extractedText = new TextDecoder("utf-8").decode(buffer);
    } else {
      return NextResponse.json(
        { error: "Unsupported file type" },
        { status: 400 }
      );
    }

    return NextResponse.json({ text: extractedText });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Faylni o‘qishda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}
