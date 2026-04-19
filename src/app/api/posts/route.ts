import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const published = searchParams.get("published");
  const category = searchParams.get("category");
  const limit = parseInt(searchParams.get("limit") || "20");
  const page = parseInt(searchParams.get("page") || "1");

  const where: Record<string, unknown> = {};
  if (published !== null) where.published = published === "true";
  if (category) where.category = { slug: category };

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where,
      orderBy: { publishedAt: "desc" },
      take: limit,
      skip: (page - 1) * limit,
      include: {
        author: true,
        category: true,
        tags: { include: { tag: true } },
      },
    }),
    prisma.post.count({ where }),
  ]);

  return NextResponse.json({ posts, total, page, limit });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const post = await prisma.post.create({
    data: {
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      coverImage: body.coverImage,
      published: body.published || false,
      publishedAt: body.published ? new Date() : null,
      metaTitle: body.metaTitle,
      metaDescription: body.metaDescription,
      canonicalUrl: body.canonicalUrl,
      ogImage: body.ogImage,
      locale: body.locale || "pt-BR",
      region: body.region,
      city: body.city,
      faqSchema: body.faqSchema,
      howToSchema: body.howToSchema,
      keyQuestions: body.keyQuestions || [],
      authorId: body.authorId,
      categoryId: body.categoryId,
    },
    include: {
      author: true,
      category: true,
    },
  });

  return NextResponse.json(post, { status: 201 });
}
