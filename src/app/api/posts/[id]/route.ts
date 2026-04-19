import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(_request: NextRequest, { params }: Props) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: { id },
    include: {
      author: true,
      category: true,
      tags: { include: { tag: true } },
    },
  });

  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const body = await request.json();

  const post = await prisma.post.update({
    where: { id },
    data: {
      ...body,
      publishedAt:
        body.published && !body.publishedAt ? new Date() : body.publishedAt,
    },
  });

  return NextResponse.json(post);
}

export async function DELETE(_request: NextRequest, { params }: Props) {
  const { id } = await params;
  await prisma.post.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
