"use client";

import { useState } from "react";

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Fale{" "}
              <span className="font-serif italic font-normal text-gold">
                conosco
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Quer saber mais sobre nossos programas ou precisa de uma
              consultoria personalizada? Envie sua mensagem.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-xl bg-emerald/5 border border-emerald/20 p-10 text-center">
                  <svg
                    className="w-16 h-16 text-emerald mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold text-navy">
                    Mensagem enviada!
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Entraremos em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent"
                      placeholder="Nome da sua empresa (opcional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Assunto
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 text-navy focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent">
                      <option>Quero saber mais sobre os programas</option>
                      <option>Consultoria personalizada</option>
                      <option>Parcerias</option>
                      <option>Outro assunto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Mensagem
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-emerald text-white font-semibold hover:bg-emerald-dark transition-colors"
                  >
                    Enviar mensagem
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold tracking-wider text-gold uppercase mb-4">
                  Informacoes de contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-navy mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-navy">Email</p>
                      <p className="text-sm text-gray-500">
                        contato@escoladecrm.com.br
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-navy mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-navy">WhatsApp</p>
                      <p className="text-sm text-gray-500">
                        (11) 99999-9999
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-navy/[0.03] border border-navy/10 p-6">
                <h4 className="font-bold text-navy mb-2">
                  Horario de atendimento
                </h4>
                <p className="text-sm text-gray-500">
                  Segunda a sexta, das 9h as 18h
                </p>
                <p className="text-sm text-gray-500">
                  Respondemos em ate 24 horas uteis
                </p>
              </div>

              <div className="rounded-xl bg-gold/5 border border-gold/20 p-6">
                <h4 className="font-bold text-navy mb-2">
                  Consultoria express
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  Precisa de ajuda urgente? Agende uma sessao de 30 minutos com
                  nosso consultor.
                </p>
                <a
                  href="#"
                  className="text-sm font-semibold text-gold hover:text-gold-light transition-colors"
                >
                  Agendar sessao →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
