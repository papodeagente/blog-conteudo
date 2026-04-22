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
  category: {
    name: string;
    slug: string;
  };
  author: {
    name: string;
  };
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
      setResults([]);
      setSearched(false);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/posts?search=${encodeURIComponent(query)}&published=true`);
        const data = await res.json();
        setResults(data.posts || []);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
        setSearched(true);
      }
    };

    fetchResults();
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      router.push(`/busca?q=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-10">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite sua busca..."
            className="w-full px-5 py-4 pr-14 rounded-xl border border-gray-300 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-lg"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gold transition-colors"
            aria-label="Buscar"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>

      {loading && (
        <div className="text-center py-12">
          <div className="inline-block w-8 h-8 border-4 border-gray-200 border-t-gold rounded-full animate-spin" />
          <p className="mt-3 text-gray-600">Buscando...</p>
        </div>
      )}

      {!loading && searched && results.length === 0 && (
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <p className="text-lg font-semibold text-navy mb-1">Nenhum resultado encontrado</p>
          <p className="text-gray-600">
            Tente buscar com termos diferentes ou mais gerais.
          </p>
        </div>
      )}

      {!loading && results.length > 0 && (
        <div className="space-y-6">
          <p className="text-sm text-gray-600">
            {results.length} resultado{results.length !== 1 ? "s" : ""} encontrado{results.length !== 1 ? "s" : ""}
          </p>
          {results.map((post) => (
            <article
              key={post.id}
              className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <Link
                  href={`/categorias/${post.category.slug}`}
                  className="text-xs font-semibold text-emerald bg-emerald/10 px-2.5 py-0.5 rounded-full"
                >
                  {post.category.name}
                </Link>
                {post.publishedAt && (
                  <time
                    dateTime={post.publishedAt}
                    className="text-xs text-gray-400"
                  >
                    {new Intl.DateTimeFormat("pt-BR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }).format(new Date(post.publishedAt))}
                  </time>
                )}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-lg font-bold text-navy hover:text-gold transition-colors"
              >
                {post.title}
              </Link>
              {post.excerpt && (
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {post.excerpt}
                </p>
              )}
              <p className="mt-2 text-xs text-gray-400">
                Por {post.author.name}
              </p>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

export default function BuscaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-8">
        Buscar Artigos
      </h1>
      <Suspense fallback={<div className="text-center py-12 text-gray-400">Carregando...</div>}>
        <BuscaContent />
      </Suspense>
    </div>
  );
}
