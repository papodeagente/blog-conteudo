"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

interface SearchPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  publishedAt: string | null;
  category: { name: string; slug: string };
  author: { name: string };
}

function BuscaContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";

  const [inputValue, setInputValue] = useState(query);
  const [results, setResults] = useState<SearchPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]); setSearched(false); return;
    }
    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/posts?search=${encodeURIComponent(query)}&published=true`);
        const data = await res.json();
        setResults(data.posts || []);
      } catch { setResults([]); }
      finally { setLoading(false); setSearched(true); }
    };
    fetchResults();
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) router.push(`/busca?q=${encodeURIComponent(inputValue.trim())}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-10">
        <div className="flex" style={{ border: 'var(--border-thick)', boxShadow: 'var(--shadow)' }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite sua busca..."
            className="flex-1"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 16,
              padding: '18px 20px',
              border: 'none', outline: 'none',
              background: 'var(--paper)',
            }}
          />
          <button type="submit" className="btn btn-pink" style={{ borderLeft: 'var(--border)', boxShadow: 'none' }}>
            Buscar
          </button>
        </div>
      </form>

      {loading && (
        <div className="text-center py-12" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
          Buscando...
        </div>
      )}

      {!loading && searched && results.length === 0 && (
        <div className="text-center py-12">
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, textTransform: 'uppercase', marginBottom: 8 }}>
            Nada encontrado.
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, textTransform: 'uppercase', opacity: 0.6 }}>
            Tente outros termos.
          </p>
        </div>
      )}

      {!loading && results.length > 0 && (
        <div className="space-y-5">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {results.length} resultado{results.length !== 1 ? "s" : ""}
          </p>
          {results.map((post) => (
            <article
              key={post.id}
              className="block transition-transform hover:-translate-x-1 hover:-translate-y-1"
              style={{
                background: 'var(--paper)',
                border: 'var(--border)',
                boxShadow: 'var(--shadow-sm)',
                padding: 22,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Link
                  href={`/categorias/${post.category.slug}`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    background: 'var(--ink)',
                    color: 'var(--bg)',
                    padding: '4px 8px',
                  }}
                >
                  {post.category.name}
                </Link>
                {post.publishedAt && (
                  <time style={{ fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.6, textTransform: 'uppercase' }}>
                    {new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "short", year: "numeric" }).format(new Date(post.publishedAt))}
                  </time>
                )}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="hover:underline"
                style={{ fontFamily: 'var(--font-display)', fontSize: 22, textTransform: 'uppercase', lineHeight: 1.1, display: 'block' }}
              >
                {post.title}
              </Link>
              {post.excerpt && (
                <p style={{ marginTop: 8, fontSize: 14, lineHeight: 1.55 }}>{post.excerpt}</p>
              )}
            </article>
          ))}
        </div>
      )}
    </>
  );
}

export default function BuscaPage() {
  return (
    <>
      <section className="brutal-hero">
        <div className="container-x">
          <span className="eyebrow"><span className="dot" />Busca</span>
          <h1>Encontre o <em>conteudo.</em></h1>
        </div>
      </section>

      <section className="brutal-section">
        <div className="container-x max-w-3xl">
          <Suspense fallback={<div className="text-center py-12" style={{ fontFamily: 'var(--font-mono)' }}>Carregando...</div>}>
            <BuscaContent />
          </Suspense>
        </div>
      </section>
    </>
  );
}
