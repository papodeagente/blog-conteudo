"use client";

import { useState } from "react";

const ArrowUR = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
    <path d="M7 17 L17 7" /><path d="M9 7 H17 V15" />
  </svg>
);

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
      assunto: (form.elements.namedItem("assunto") as HTMLSelectElement).value,
      mensagem: (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Erro ao enviar mensagem.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar mensagem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="brutal-hero">
        <div className="container-x">
          <span className="eyebrow"><span className="dot" />Conversa direta</span>
          <h1>Vamos <em>conversar?</em></h1>
          <p>Quer saber mais sobre os programas ou precisa de consultoria personalizada? Envie sua mensagem.</p>
        </div>
      </section>

      <section className="brutal-section">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              {submitted ? (
                <div
                  style={{
                    background: 'var(--lime)',
                    border: 'var(--border-thick)',
                    boxShadow: 'var(--shadow)',
                    padding: 40,
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, textTransform: 'uppercase', lineHeight: 1, marginBottom: 12 }}>
                    Mensagem enviada.
                  </div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, textTransform: 'uppercase', opacity: 0.7 }}>
                    Em 24h util respondo pessoalmente.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div
                      style={{
                        background: 'var(--pink)',
                        color: '#fff',
                        border: 'var(--border)',
                        padding: '12px 16px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 13,
                        textTransform: 'uppercase',
                      }}
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6, fontWeight: 700 }}>
                        Nome
                      </label>
                      <input type="text" name="nome" required className="b-field" placeholder="Seu nome" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6, fontWeight: 700 }}>
                        Email
                      </label>
                      <input type="email" name="email" required className="b-field" placeholder="seu@email.com" />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6, fontWeight: 700 }}>
                      Empresa
                    </label>
                    <input type="text" name="empresa" className="b-field" placeholder="Nome da empresa (opcional)" />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6, fontWeight: 700 }}>
                      Assunto
                    </label>
                    <select name="assunto" className="b-field">
                      <option>Quero saber mais sobre os programas</option>
                      <option>Consultoria personalizada</option>
                      <option>Parcerias</option>
                      <option>Outro assunto</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6, fontWeight: 700 }}>
                      Mensagem
                    </label>
                    <textarea name="mensagem" rows={5} required className="b-field resize-none" placeholder="Como posso ajudar?" />
                  </div>

                  <button type="submit" disabled={loading} className="btn btn-pink w-full sm:w-auto justify-center">
                    {loading ? "Enviando..." : "Enviar mensagem"} <ArrowUR />
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="b-card-thick" style={{ padding: 28 }}>
                <span className="section-num">CONTATO DIRETO</span>
                <ul className="space-y-3 mt-4" style={{ fontFamily: 'var(--font-mono)', fontSize: 14 }}>
                  <li>
                    <span style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', opacity: 0.6 }}>Email</span>
                    <a href="mailto:bruno@escoladecrm.com.br" className="hover:underline">bruno@escoladecrm.com.br</a>
                  </li>
                  <li>
                    <span style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', opacity: 0.6 }}>WhatsApp</span>
                    (11) 99999-9999
                  </li>
                  <li>
                    <span style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', opacity: 0.6 }}>Atendimento</span>
                    Seg–Sex, 9h–18h
                  </li>
                </ul>
              </div>

              <div style={{ background: 'var(--yellow)', border: 'var(--border-thick)', boxShadow: 'var(--shadow)', padding: 28 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, textTransform: 'uppercase', lineHeight: 1, marginBottom: 10 }}>
                  Consultoria Express
                </div>
                <p style={{ fontSize: 14, marginBottom: 16 }}>
                  Precisa de ajuda urgente? Sessao de 30 minutos com diagnostico ao vivo.
                </p>
                <a href="#" className="btn">Agendar sessao <ArrowUR /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
