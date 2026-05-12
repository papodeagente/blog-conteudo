'use client';

import { useState, type FormEvent } from 'react';

export default function NewsletterWidget() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          background: 'var(--lime)',
          border: 'var(--border-thick)',
          boxShadow: 'var(--shadow)',
          padding: '24px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            textTransform: 'uppercase',
            lineHeight: 1,
            marginBottom: 8,
          }}
        >
          Inscrito.
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', opacity: 0.7 }}>
          Confira seu e-mail em breve.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        background: 'var(--paper)',
        border: 'var(--border-thick)',
        boxShadow: 'var(--shadow)',
        padding: '24px',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 22,
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: 6,
        }}
      >
        Newsletter
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', opacity: 0.7, marginBottom: 14 }}>
        1 carta por semana
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className="b-field"
        />
        <button type="submit" className="btn btn-pink w-full justify-center">
          Quero receber →
        </button>
      </form>
    </div>
  );
}
