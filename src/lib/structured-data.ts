const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

interface ArticleData {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  authorName: string;
  coverImage?: string;
  category: string;
}

export function generateArticleSchema(data: ArticleData) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    image: data.coverImage ? `${siteUrl}${data.coverImage}` : undefined,
    datePublished: data.publishedAt,
    dateModified: data.updatedAt,
    author: {
      "@type": "Person",
      name: data.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Blog de Conteudo",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${data.slug}`,
    },
    articleSection: data.category,
    inLanguage: "pt-BR",
  };
}

export function generateFAQSchema(
  questions: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Blog de Conteudo",
    url: siteUrl,
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/busca?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
