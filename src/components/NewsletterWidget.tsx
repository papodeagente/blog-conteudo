'use client';

import { useState, type FormEvent } from 'react';

export default function NewsletterWidget() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 rounded-xl p-6 text-center">
        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald/10 flex items-center justify-center">
          <svg className="w-6 h-6 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-sm font-semibold text-navy">Inscrito com sucesso!</p>
        <p className="text-xs text-gray-600 mt-1">Confira seu e-mail em breve.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-base font-bold text-navy">
        Receba conteudos exclusivos
      </h3>
      <p className="text-sm text-gray-600 mt-1">
        Toda semana no seu e-mail
      </p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
        />
        <button
          type="submit"
          className="w-full px-4 py-2.5 text-sm font-semibold rounded-lg bg-navy text-white hover:bg-navy-light transition-colors"
        >
          Quero receber
        </button>
      </form>

      <p className="text-xs text-gray-400 mt-3">
        Sem spam. Cancele quando quiser.
      </p>
    </div>
  );
}
