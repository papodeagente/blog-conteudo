import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const author = await prisma.author.upsert({
    where: { email: "bruno@entur.com.br" },
    update: {},
    create: {
      name: "Bruno Barbosa",
      slug: "bruno-barbosa",
      bio: "Fundador e criador de conteudo.",
      email: "bruno@entur.com.br",
    },
  });

  const category = await prisma.category.upsert({
    where: { slug: "geral" },
    update: {},
    create: {
      name: "Geral",
      slug: "geral",
      description: "Artigos gerais sobre diversos temas.",
    },
  });

  console.log("Seed completed:");
  console.log("  Author:", author.name, `(${author.id})`);
  console.log("  Category:", category.name, `(${category.id})`);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
