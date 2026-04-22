import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, empresa, assunto, mensagem } = body;

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Nome, email e mensagem sao obrigatorios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email invalido." },
        { status: 400 }
      );
    }

    // Log the contact for now (replace with email service later)
    console.log("[CONTATO]", {
      nome,
      email,
      empresa: empresa || "-",
      assunto: assunto || "-",
      mensagem,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro ao processar a mensagem." },
      { status: 500 }
    );
  }
}
