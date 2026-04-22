import Link from "next/link";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard";
import ScrollReveal from "@/components/ScrollReveal";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-dynamic";

const stats = [
  { value: "150+", label: "Artigos publicados" },
  { value: "5", label: "Categorias especializadas" },
  { value: "10k+", label: "Leitores mensais" },
  { value: "100%", label: "Conteudo gratuito" },
];

const programas = [
  {
    id: "crm-na-pratica",
    title: "CRM na Pratica",
    format: "ONLINE",
    description:
      "Aprenda a configurar e usar um CRM para organizar seu pipeline de vendas, automatizar follow-ups e nunca mais perder uma oportunidade.",
  },
  {
    id: "vendas-whatsapp",
    title: "Vendas pelo WhatsApp",
    format: "ONLINE",
    description:
      "Domine tecnicas de vendas pelo WhatsApp Business com automacao, catalogos e scripts que convertem conversas em vendas.",
  },
  {
    id: "gestao-comercial",
    title: "Gestao Comercial para PMEs",
    format: "PRESENCIAL",
    description:
      "Estruture seu processo comercial do zero com metricas, metas, comissoes e uma rotina que gera resultados previsiveis.",
  },
  {
    id: "prospeccao",
    title: "Prospeccao Ativa",
    format: "ONLINE",
    description:
      "Construa uma maquina de prospeccao outbound para atrair clientes ideais e manter seu pipeline sempre cheio.",
  },
];

const mentores = [
  {
    name: "Bruno Barbosa",
    role: "Fundador da Escola de CRM",
    bio: "Especialista em CRM e vendas para PMEs com mais de 10 anos de experiencia no mercado brasileiro.",
  },
  {
    name: "A definir",
    role: "Especialista em Vendas",
    bio: "Profissional com experiencia pratica em vendas consultivas para pequenos e medios negocios.",
  },
  {
    name: "A definir",
    role: "Consultor de Gestao Comercial",
    bio: "Gestor comercial com track record em estruturacao de equipes de vendas de alta performance.",
  },
];

const depoimentos = [
  {
    text: "A Escola de CRM mudou a forma como gerencio meu time comercial. Saimos da planilha e hoje temos um processo de vendas previsivel.",
    author: "Maria Silva",
    role: "Dona de agencia de marketing",
  },
  {
    text: "Os conteudos sobre WhatsApp Business foram um divisor de aguas. Triplicamos nossas vendas pelo canal em 3 meses.",
    author: "Carlos Santos",
    role: "Gestor comercial, loja de moveis",
  },
  {
    text: "Finalmente entendi como usar um CRM de verdade. O programa CRM na Pratica vale cada minuto investido.",
    author: "Ana Oliveira",
    role: "Empreendedora, e-commerce de moda",
  },
];

const materiais = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Guia Completo de CRM para PMEs",
    description: "Tudo que voce precisa saber para escolher, implantar e usar um CRM no seu negocio.",
    type: "Ebook",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Planilha de Pipeline de Vendas",
    description: "Controle suas oportunidades de vendas com nossa planilha pronta para uso.",
    type: "Template",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Checklist: Setup do WhatsApp Business",
    description: "Passo a passo para configurar seu WhatsApp Business de forma profissional.",
    type: "Checklist",
  },
];

const faqItems = [
  {
    question: "O que e a Escola de CRM?",
    answer:
      "A Escola de CRM e uma plataforma de conteudo e capacitacao focada em CRM, vendas e gestao comercial para pequenos e medios negocios no Brasil. Oferecemos artigos gratuitos, materiais para download e programas praticos.",
  },
  {
    question: "Os conteudos sao gratuitos?",
    answer:
      "Sim! Todos os artigos do blog, guias e materiais para download sao 100% gratuitos. Nossos programas de capacitacao sao pagos, com precos acessiveis para PMEs.",
  },
  {
    question: "Quais programas voces oferecem?",
    answer:
      "Oferecemos programas como CRM na Pratica, Vendas pelo WhatsApp, Gestao Comercial para PMEs e Prospeccao Ativa. Cada programa e focado em resultados praticos e aplicaveis.",
  },
  {
    question: "Preciso de experiencia previa com CRM?",
    answer:
      "Nao! Nossos conteudos e programas sao pensados para todos os niveis, desde quem nunca usou um CRM ate gestores que querem otimizar seus processos.",
  },
  {
    question: "Como funciona a consultoria?",
    answer:
      "Oferecemos consultorias personalizadas para empresas que querem implementar um CRM ou reestruturar seu processo comercial. Entre em contato para saber mais.",
  },
  {
    question: "Voces atendem empresas de que porte?",
    answer:
      "Nosso foco sao pequenos e medios negocios — de microempreendedores individuais a empresas com ate 100 funcionarios. Nosso conteudo e adaptado para a realidade dessas empresas.",
  },
];

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    take: 4,
    include: {
      author: true,
      category: true,
    },
  });

  return (
    <div>
      {/* ========== HERO ========== */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Domine CRM
              <br />
              e Vendas{" "}
              <span className="font-serif italic font-normal text-gold">
                na pratica
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
              Conteudo gratuito e programas praticos sobre CRM, vendas e gestao
              comercial para pequenos e medios negocios.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald text-white font-semibold text-base hover:bg-emerald-dark transition-colors shadow-lg shadow-emerald/20"
              >
                Explorar Conteudos
              </Link>
              <Link
                href="/programas"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-gold text-gold font-semibold text-base hover:bg-gold/10 transition-colors"
              >
                Conhecer Programas
              </Link>
            </div>
          </div>

          {/* Abstract visual element */}
          <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border border-gold/20" />
              <div className="absolute inset-8 rounded-full border border-emerald/20" />
              <div className="absolute inset-16 rounded-full border border-gold/30" />
              <div className="absolute inset-24 rounded-full bg-emerald/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gold/20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS / PROVA SOCIAL ========== */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal stagger>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="fade-in-up text-center p-6 rounded-xl border border-gray-100"
                >
                  <div className="text-4xl sm:text-5xl font-extrabold text-navy">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== PROGRAMAS EM DESTAQUE ========== */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <ScrollReveal>
            <div className="fade-in-up text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Programas de{" "}
                <span className="font-serif italic font-normal text-gold">
                  maiores destaques
                </span>
              </h2>
              <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                Capacitacoes praticas para quem quer vender mais e melhor
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {programas.map((prog) => (
                <Link
                  key={prog.id}
                  href={`/programas#${prog.id}`}
                  className="fade-in-up group block bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
                >
                  <span
                    className={`inline-block px-2.5 py-1 rounded text-xs font-bold tracking-wider ${
                      prog.format === "ONLINE"
                        ? "bg-emerald/20 text-emerald"
                        : "bg-gold/20 text-gold"
                    }`}
                  >
                    {prog.format}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-gold transition-colors">
                    {prog.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {prog.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Saiba mais
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <div className="text-center mt-12">
            <Link
              href="/programas"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors"
            >
              Ver todos os programas
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== MENTORES ========== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <ScrollReveal>
            <div className="fade-in-up text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
                Na Escola de CRM, so ensina{" "}
                <span className="font-serif italic font-normal text-gold-gradient">
                  quem faz
                </span>
              </h2>
              <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                Profissionais que vivem a realidade das vendas no Brasil
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
              {mentores.map((mentor) => (
                <div
                  key={mentor.name}
                  className="fade-in-up text-center p-8 rounded-xl border border-gray-100 card-lift"
                >
                  <div className="w-20 h-20 rounded-full bg-navy/5 mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-navy">
                      {mentor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy">
                    {mentor.name}
                  </h3>
                  <p className="text-sm font-medium text-gold">{mentor.role}</p>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {mentor.bio}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== DEPOIMENTOS ========== */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <ScrollReveal>
            <div className="fade-in-up text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Depoimentos de quem{" "}
                <span className="font-serif italic font-normal text-gold">
                  viveu a experiencia
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid gap-8 sm:grid-cols-3">
              {depoimentos.map((dep) => (
                <div
                  key={dep.author}
                  className="fade-in-up bg-white/5 border border-white/10 rounded-xl p-8 relative"
                >
                  <svg
                    className="w-10 h-10 text-gold/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
                  </svg>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    &ldquo;{dep.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-white">{dep.author}</p>
                    <p className="text-sm text-gray-500">{dep.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== ULTIMOS ARTIGOS DO BLOG ========== */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <ScrollReveal>
            <div className="fade-in-up flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
                  Ultimos Artigos
                </h2>
                <p className="mt-2 text-gray-500">
                  Conteudo novo toda semana sobre vendas, CRM e gestao comercial
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald-dark transition-colors"
              >
                Ver todos os artigos
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          {posts.length > 0 && (
            <ScrollReveal stagger>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {posts.map((post) => (
                  <div key={post.id} className="fade-in-up">
                    <PostCard
                      title={post.title}
                      slug={post.slug}
                      excerpt={post.excerpt || ""}
                      coverImage={post.coverImage || undefined}
                      publishedAt={
                        post.publishedAt?.toISOString() ||
                        post.createdAt.toISOString()
                      }
                      authorName={post.author.name}
                      categoryName={post.category.name}
                      categorySlug={post.category.slug}
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          <div className="text-center mt-10 sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald"
            >
              Ver todos os artigos →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== MATERIAIS GRATUITOS ========== */}
      <section className="bg-gradient-to-b from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <ScrollReveal>
            <div className="fade-in-up text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Baixe materiais{" "}
                <span className="font-serif italic font-normal text-gold">
                  exclusivos e gratuitos
                </span>
              </h2>
              <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                Ebooks, templates e checklists para aplicar no seu negocio hoje
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
              {materiais.map((mat) => (
                <div
                  key={mat.title}
                  className="fade-in-up bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/30 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-4">
                    {mat.icon}
                  </div>
                  <span className="text-xs font-bold tracking-wider text-gold/70 uppercase">
                    {mat.type}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-white">
                    {mat.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {mat.description}
                  </p>
                  <button className="mt-4 w-full px-4 py-2.5 rounded-lg border border-gold/30 text-gold text-sm font-semibold hover:bg-gold/10 transition-colors">
                    Baixar gratis
                  </button>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <ScrollReveal>
            <div className="fade-in-up text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
                Perguntas Frequentes
              </h2>
              <p className="mt-4 text-gray-500">
                Tire suas duvidas sobre a Escola de CRM
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="fade-in-up">
              <FAQAccordion items={faqItems} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Pronto para transformar
            <br />
            <span className="font-serif italic font-normal text-gold">
              suas vendas?
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
            Comece agora com nosso conteudo gratuito ou fale com um consultor
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald text-white font-semibold text-base hover:bg-emerald-dark transition-colors shadow-lg shadow-emerald/20"
            >
              Explorar Blog
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-gold text-gold font-semibold text-base hover:bg-gold/10 transition-colors"
            >
              Fale com Consultor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
