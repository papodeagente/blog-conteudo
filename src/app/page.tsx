import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const ArrowUR = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
    <path d="M7 17 L17 7" /><path d="M9 7 H17 V15" />
  </svg>
);
const ArrowR = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
    <path d="M5 12 H19" /><path d="M13 6 L19 12 L13 18" />
  </svg>
);
const PlayIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M6 4 L20 12 L6 20 Z" /></svg>
);

export default async function HomePage() {
  const latestPosts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    take: 3,
    include: { category: true, author: true },
  });

  return (
    <>
      <div className="bg-grid" />

      {/* HERO */}
      <section className="hero" id="top">
        <div className="container-x">
          <div className="hero-grid">
            <div>
              <span className="eyebrow"><span className="dot" />Edicao 2026 · Mentoria 1:1</span>
              <h1>
                Vendas <em>nao escalam</em> com <span className="underline-marker">vontade.</span>
              </h1>
              <p className="hero-sub">
                Escalam com processo. Sou <strong>Bruno Barbosa</strong> e instalo CRM como sistema operacional comercial dentro de empresas que precisam parar de viver de pico.
              </p>
              <div className="hero-ctas">
                <Link href="/contato" className="btn btn-pink">Agende uma chamada <ArrowUR /></Link>
                <Link href="/programas" className="btn btn-white">Como funciona</Link>
              </div>
            </div>

            <div className="hero-photos">
              <div className="nb-card photo pc1"><Image src="/images/home/heroE25.jpg" alt="Bruno no palco do Entur 2025" width={1120} height={840} priority /></div>
              <div className="nb-card photo pc2"><Image src="/images/home/heroVest.jpg" alt="Bruno Barbosa" width={770} height={620} /></div>
              <div className="nb-card photo pc3"><Image src="/images/home/heroBwSit.jpg" alt="Bruno sentado" width={532} height={390} /></div>
              <div className="sticker st1">+ 80 OPERACOES</div>
              <div className="sticker st2">Case RD Station</div>
            </div>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-cell">
              <div className="k">Anos no operacional</div>
              <div className="v">12+</div>
            </div>
            <div className="hero-meta-cell">
              <div className="k">Times comerciais montados</div>
              <div className="v">80+</div>
            </div>
            <div className="hero-meta-cell">
              <div className="k">Case oficial</div>
              <div className="v"><em>RD</em> Station</div>
            </div>
            <div className="hero-meta-cell">
              <div className="k">Sistema proprio</div>
              <div className="v">Entur <em>OS</em></div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[..."Processo|Pipeline|Previsibilidade|Conversao|CRM ≠ Software|Cadencia|Operacao|Receita".split("|"),
            ..."Processo|Pipeline|Previsibilidade|Conversao|CRM ≠ Software|Cadencia|Operacao|Receita".split("|"),
            ..."Processo|Pipeline|Previsibilidade|Conversao|CRM ≠ Software|Cadencia|Operacao|Receita".split("|")
          ].map((w, i) => (
            <span key={i}>{w}<span className="sep" style={{ marginLeft: 48 }}>✦</span></span>
          ))}
        </div>
      </div>

      {/* SOBRE */}
      <section className="brutal-section sobre" id="sobre">
        <div className="container-x">
          <div className="sobre-grid">
            <div className="sobre-photo">
              <div className="main"><Image src="/images/home/sobreStage.jpg" alt="Bruno em palestra" width={900} height={1120} /></div>
              <div className="tag">FIG.01 · ENTUR 2025</div>
            </div>
            <div>
              <span className="section-num">01 / SOBRE</span>
              <h2 className="section-title">Eu nao vendo curso. <em>Eu instalo</em> processo.</h2>
              <p>
                Sou fundador da Escola de Negocios do Turismo e cofundador da Entur — <strong>case oficial</strong> de uso de CRM dentro do RD Station, citado em palco em mais de uma edicao da RD Summit.
              </p>
              <p>
                Construi, do zero, o <em>CRM Entur OS</em>: um sistema nichado para agencias de viagens que hoje opera o pipeline de centenas de operacoes. Ja montei times e processos comerciais para mais de 80 empresas — startups, agencias e negocios consolidados.
              </p>
              <p>
                O que me move e uma conviccao simples: <strong>CRM nao e software. E a forma como sua empresa lembra das pessoas.</strong>
              </p>
              <div className="sobre-stats">
                <div><div className="k">Empresas atendidas</div><div className="v">80+</div></div>
                <div><div className="k">Conversao media</div><div className="v">3.2×</div></div>
                <div><div className="k">Sistema proprio</div><div className="v">Entur OS</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="brutal-section manifesto">
        <div className="container-x">
          <span className="section-num">02 / MANIFESTO</span>
          <blockquote>
            CRM bom e o que <em>sua equipe usa</em> de segunda a sexta.
          </blockquote>
          <div className="signature">— Bruno Barbosa, fundador</div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="brutal-section produtos" id="mentoria">
        <div className="container-x">
          <div className="head-block">
            <span className="section-num">03 / O QUE OFERECO</span>
            <h2 className="section-title">Dois caminhos. Um destino: <em>previsibilidade.</em></h2>
            <p>Trabalho com um numero fechado de empresas por trimestre. Aqui voce nao compra acesso a um curso — voce contrata um especialista para implementar ao seu lado.</p>
          </div>

          <article className="product-card">
            <div className="pnum">001</div>
            <div className="body">
              <h3>Mentoria de Implementacao</h3>
              <p className="desc">Programa intensivo de 12 semanas. Sento ao lado do seu time, mapeio o funil real, configuro o CRM, escrevo as cadencias e treino quem vende. Voce termina com pipeline operando — nao com slides.</p>
              <ul>
                <li>Diagnostico do funil atual e gargalos de conversao</li>
                <li>Arquitetura de pipeline, etapas, campos e automacoes</li>
                <li>Cadencia comercial (cold, inbound, follow-up)</li>
                <li>Treinamento pratico com o time + acompanhamento semanal</li>
                <li>Acesso direto via WhatsApp durante o programa</li>
              </ul>
            </div>
            <div className="meta">
              <div>
                <div className="label">Duracao</div>
                <div className="value">12 semanas</div>
              </div>
              <div>
                <div className="label">Formato</div>
                <div className="value">1:1, semanal</div>
              </div>
              <div>
                <div className="label">Proxima janela</div>
                <div className="value"><em>MAI</em> 2026</div>
              </div>
              <Link href="/contato" className="btn btn-pink">Agendar diagnostico <ArrowUR /></Link>
            </div>
          </article>

          <article className="product-card alt">
            <div className="pnum">002</div>
            <div className="body">
              <h3>CRM Entur OS — White-label</h3>
              <p className="desc">Para empresas que precisam de um CRM nichado e nao cabem em ferramenta generica. Desenvolvo o Entur OS como base e adapto a sua operacao. Nao e projeto de software — e produto entregue, em producao, com voce como dono.</p>
              <ul>
                <li>Base do Entur OS (nucleo de pipeline, contatos, atendimento)</li>
                <li>Customizacao de fluxos, campos e regras de negocio</li>
                <li>Integracao com WhatsApp, email e ERPs ja em uso</li>
                <li>Onboarding do time e documentacao operacional</li>
                <li>Suporte tecnico e evolutivo nos primeiros 12 meses</li>
              </ul>
            </div>
            <div className="meta">
              <div>
                <div className="label">Duracao</div>
                <div className="value">16–24 sem.</div>
              </div>
              <div>
                <div className="label">Formato</div>
                <div className="value">Projeto + SaaS</div>
              </div>
              <div>
                <div className="label">Modelo</div>
                <div className="value"><em>SOB</em> demanda</div>
              </div>
              <Link href="/contato" className="btn">Falar sobre o projeto <ArrowUR /></Link>
            </div>
          </article>
        </div>
      </section>

      {/* CALENDAR */}
      <section className="brutal-section calendar-sec" id="turmas">
        <div className="container-x">
          <div className="cal-head">
            <div>
              <span className="section-num">04 / CALENDARIO</span>
              <h2 className="section-title" style={{ marginTop: 12 }}>Proximas <em>turmas.</em></h2>
            </div>
            <Link href="/contato" className="btn btn-white">Reserve sua vaga <ArrowUR /></Link>
          </div>
          <div className="cal-grid">
            {[
              { date: "12", month: "Maio 2026", title: "Mentoria Q2 · Turma 14", status: "Vagas abertas", closed: false },
              { date: "04", month: "Agosto 2026", title: "Mentoria Q3 · Turma 15", status: "Pre-inscricao", closed: false },
              { date: "10", month: "Novembro 2026", title: "Mentoria Q4 · Turma 16", status: "Lista de espera", closed: true },
              { date: "06", month: "Junho 2026", title: "Workshop · Pipeline Real", status: "Online · Aberto", closed: false },
              { date: "19", month: "Julho 2026", title: "Imersao · Sao Paulo", status: "Esgotado", closed: true },
              { date: "23", month: "Setembro 2026", title: "Imersao · Florianopolis", status: "Pre-venda", closed: false }
            ].map((t, i) => (
              <div className={`cal-card ${t.closed ? 'closed' : ''}`} key={i}>
                <div className="month">{t.month}</div>
                <div className="date">{t.date}</div>
                <div className="title-cal">{t.title}</div>
                <div className="status">{t.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="brutal-section testimonials" id="cases">
        <div className="container-x">
          <div className="cal-head">
            <div>
              <span className="section-num">05 / QUEM IMPLEMENTOU</span>
              <h2 className="section-title" style={{ marginTop: 12 }}>Cases <em>de gente</em> que vende.</h2>
            </div>
            <Link href="/contato" className="btn btn-pink">Quero ser o proximo <ArrowR /></Link>
          </div>
          <div className="test-grid">
            <div className="test-card feature">
              <div className="quote">&ldquo;Em 12 semanas reescrevemos o pipeline inteiro. Nao foi consultoria de PowerPoint — ele entrou no CRM, configurou, treinou time. Saimos de 8% pra 26% de conversao de SQL pra cliente.&rdquo;</div>
              <div className="who">
                <div className="avatar">R</div>
                <div>
                  <div className="name">Rafael Mendonca</div>
                  <div className="role">CEO · Operadora SP</div>
                </div>
              </div>
            </div>
            <div className="test-card">
              <div className="quote">&ldquo;A maior virada do nosso comercial em 6 anos.&rdquo;</div>
              <div className="who">
                <div className="avatar">L</div>
                <div>
                  <div className="name">Luciana Prado</div>
                  <div className="role">Socia · Agencia B2B</div>
                </div>
              </div>
            </div>
            <div className="test-card">
              <div className="quote">&ldquo;O Bruno nao vende solucao. Ele instala disciplina.&rdquo;</div>
              <div className="who">
                <div className="avatar">D</div>
                <div>
                  <div className="name">Diego Salgado</div>
                  <div className="role">Head Vendas · SaaS</div>
                </div>
              </div>
            </div>
            <div className="test-card">
              <div className="quote">&ldquo;O Entur OS fez nossa agencia operar como SaaS. Outro nivel.&rdquo;</div>
              <div className="who">
                <div className="avatar">M</div>
                <div>
                  <div className="name">Marina Vasconcelos</div>
                  <div className="role">Dir. Comercial · Corporate</div>
                </div>
              </div>
            </div>
            <div className="test-card feature b">
              <div className="quote">&ldquo;Ja contratei consultor caro, agencia, gente boa. Ninguem entregou o que o Bruno entregou — porque ele ja operou. Nao e teoria, e cicatriz.&rdquo;</div>
              <div className="who">
                <div className="avatar">A</div>
                <div>
                  <div className="name">Andre Tannure</div>
                  <div className="role">Fundador · Distribuidora</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="brutal-section companies">
        <div className="container-x">
          <span className="section-num">06 / EMPRESAS ATENDIDAS</span>
          <h2 className="section-title">12 das <em>80+</em> operacoes.</h2>
          <div className="comp-grid">
            {[
              { label: "ENTUR", a: "accent-pink" },
              { label: "RD STATION", a: "" },
              { label: "VOLTARE", a: "" },
              { label: "PROAR", a: "accent-yellow" },
              { label: "SOLARE", a: "" },
              { label: "TANNURE", a: "" },
              { label: "MARBO", a: "accent-lime" },
              { label: "PRADO", a: "" },
              { label: "NAVEGA", a: "" },
              { label: "EBNTUR", a: "accent-cyan" },
              { label: "ATRIO", a: "" },
              { label: "VEIRA", a: "" }
            ].map((it, i) => (
              <div key={i} className={`comp-cell ${it.a}`}>{it.label}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEUDO — agora conectado ao blog real */}
      <section className="brutal-section conteudo-sec" id="conteudo">
        <div className="container-x">
          <div className="conteudo-head">
            <div>
              <span className="section-num">07 / CONTEUDO ABERTO</span>
              <h2 className="section-title" style={{ marginTop: 12 }}>Antes de falar comigo, <em>leia.</em></h2>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <Link href="/blog" className="btn btn-white btn-sm">Ver todos →</Link>
              <Link href="/materiais" className="btn btn-white btn-sm">Materiais ↗</Link>
            </div>
          </div>
          <div className="video-grid">
            {latestPosts.map((post, i) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="video-card">
                <div className="screen">
                  {post.coverImage && (
                    <img src={post.coverImage} alt={post.title} />
                  )}
                  <div className="play"><PlayIcon /></div>
                </div>
                <div className="label">
                  <div className="kicker">
                    <span>EP · {String(i + 1).padStart(2, '0')}</span>
                    <span>{post.category.name}</span>
                  </div>
                  <div className="title-v">{post.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="brutal-section community" id="comunidade">
        <div className="container-x">
          <div className="comm-grid">
            <div className="comm-photo">
              <Image src="/images/home/commStage.jpg" alt="Bruno em comunidade" width={900} height={1120} />
              <div className="badge">+ 1.400 MEMBROS</div>
            </div>
            <div>
              <span className="section-num">08 / COMUNIDADE</span>
              <h2 className="section-title">A <em>Sala de Operacao.</em></h2>
              <p>Espaco fechado para quem implementou comigo ou leva CRM a serio. Lives mensais, estudos de caso reais e revisao de pipeline ao vivo. <strong>Sem grupo de WhatsApp, sem barulho — so operacao.</strong></p>
              <ul className="comm-list">
                <li><span className="badge-num">01</span><div><strong>Live mensal de revisao</strong> — trazemos um caso e dissecamos o funil.</div></li>
                <li><span className="badge-num">02</span><div><strong>Biblioteca de cadencias</strong> — templates testados em operacoes reais.</div></li>
                <li><span className="badge-num">03</span><div><strong>Encontros presenciais</strong> — duas imersoes fisicas por ano.</div></li>
                <li><span className="badge-num">04</span><div><strong>Acesso a mim</strong> — perguntas respondidas semanalmente.</div></li>
              </ul>
              <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contato" className="btn btn-pink">Quero entrar <ArrowR /></Link>
                <Link href="/programas" className="btn btn-white">Ver programas</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="brutal-section faq-sec" id="faq">
        <div className="container-x">
          <span className="section-num">09 / FAQ</span>
          <h2 className="section-title">O que <em>perguntam</em> antes de fechar.</h2>
          <div className="faq-list" style={{ marginTop: 40 }}>
            {[
              { q: "A mentoria funciona pra qualquer tipo de negocio?", a: "Funciona bem em operacoes B2B, agencias, distribuidoras, SaaS e negocios de servico com ciclo de venda consultivo. Se voce vende e-commerce de massa puro, conversamos antes pra ver se faz sentido." },
              { q: "Quanto tempo do meu time vou precisar dedicar?", a: "Em media 4 horas semanais do dono e 6 a 8 horas do time comercial. Sem dedicacao nao ha implementacao — eu nao vendo programa de prateleira." },
              { q: "Voce implementa em qual CRM?", a: "Sou case oficial do RD Station e tenho profundidade nele. Tambem trabalho com HubSpot, Pipedrive e — em operacoes nichadas — com o meu proprio sistema, o Entur OS." },
              { q: "Tem garantia?", a: "Tem. Se nas duas primeiras semanas a mentoria nao fizer sentido pra voce, devolvo o investimento integral. Depois disso seguimos pela seriedade dos dois lados." },
              { q: "Qual o investimento?", a: "Compartilho na chamada de diagnostico. O numero varia porque eu adapto o escopo ao tamanho da operacao — nao tenho preco de tabela, tenho preco de problema." },
              { q: "Voce atende fora do Brasil?", a: "Sim. Atendo em portugues operacoes no Brasil, Portugal, EUA e LatAm. A mentoria e remota, com encontros opcionais presenciais." }
            ].map((it, i) => (
              <details className="faq-card" key={i} open={i === 0}>
                <summary>
                  <span className="qnum">0{i + 1}</span>
                  <span>{it.q}</span>
                  <span className="plus">+</span>
                </summary>
                <div className="answer">{it.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="brutal-section newsletter-sec" id="agenda">
        <div className="container-x">
          <div className="news-grid">
            <div>
              <span className="section-num">10 / CONVERSA DIRETA</span>
              <h2 className="section-title">Vamos <em>conversar?</em></h2>
              <p>Toda quarta escrevo uma carta sobre processo comercial real — sem teoria de LinkedIn. Assine, ou pule direto pra agenda.</p>
              <form className="news-form" action="#" method="post">
                <input type="email" name="email" placeholder="seu@email.com" required />
                <button type="submit">Assinar →</button>
              </form>
              <div className="news-small">+ 8.400 inscritos · 1 email por semana · cancele quando quiser</div>
              <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contato" className="btn btn-pink">Agende uma chamada <ArrowUR /></Link>
                <Link href="/contato" className="btn btn-yellow">Falar agora</Link>
              </div>
            </div>
            <div className="news-visual">
              <Image src="/images/home/newsClasped.jpg" alt="Bruno" width={700} height={900} />
              <div className="stamp">&ldquo;Vendas e processo. O resto e sorte.&rdquo;</div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING MARK */}
      <div className="closing-mark">
        <div className="word">Escola <em>de</em> CRM</div>
      </div>
    </>
  );
}
