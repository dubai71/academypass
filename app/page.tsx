'use client'

import Head from 'next/head'
import { useState } from 'react'

// ─── COPY NURSEHUB® ──────────────────────────────────────────────────────────

const NAV_ITEMS = ['O QUE É', 'O QUE TEM DENTRO', 'TRILHAS', 'PREÇO']

const HERO = {
  label: 'NurseHub®',
  h1: 'A comunidade de enfermeiros que usa IA na rotina.',
  subtitle: 'NurseHub® é o lugar onde enfermeiros e técnicos de enfermagem encontram conteúdo prático, sem enrolação, para usar inteligência artificial no dia a dia da profissão.',
  cta1: 'Quero fazer parte',
  cta2: 'Ver trilhas',
}

const STATS = {
  number: '5000+',
  label: 'enfermeiros à procura de conteúdo sobre IA.',
  community: 'Uma comunidade de enfermeiros, técnicos de enfermagem, gestores e empreendedores que já estão usando IA para transformar a rotina de cuidado.',
  nps: '9.7',
  courses: '10',
  recommend: '98%',
}

const DIFFERENTIALS = {
  label: 'COMO FUNCIONA',
  headline: 'Menos teoria. Mais resultado no plantão.',
  subtitle: 'Você chega, segue o passo a passo, e tem o resultado. Sem improviso.',
  items: [
    {
      step: '01',
      title: 'Escolhe sua trilha',
      desc: 'Baseada no seu objetivo: rotina hospitalar, conteúdo para redes, renda extra ou liderança.',
    },
    {
      step: '02',
      title: 'Aprende com contexto',
      desc: 'Cada curso cobre um caso de uso real. Nada de teoria pela teoria.',
    },
    {
      step: '03',
      title: 'Coloca em prática',
      desc: 'Labs, templates e workflows prontos. Você sai da ideia e vai para a entrega.',
    },
  ],
}

const INSIDE_ITEMS = [
  {
    q: 'Workflows',
    a: 'Uma nova forma de aprender. Passo a passo guiado e prático. Você chega, segue os passos, e tem o resultado. Sem improviso, sem perder tempo tentando adivinhar o que funciona.',
    detail: 'Step-by-step testado e comprovado: como criar 30 dias de conteúdo para Instagram em 2h, como usar IA na passagem de plantão, como gerar material educativo para paciente.',
  },
  {
    q: 'Aprender',
    a: 'Cursos com recorte bom. Uma ideia por frame. Sem enrolação. São cursos curados por enfermeiros que já trabalham com IA.',
    detail: 'Cada um cobre um caso de uso real: automatizar evoluções, criar conteúdo para redes, calcular doses rapidamente, gerar material educativo para paciente.',
  },
  {
    q: 'Comunidade',
    a: '+13.000 enfermeiros construindo com IA no dia a dia. Tem gente de UTI, atenção básica, emergência, gestão. Todo mundo compartilha o que funciona.',
    detail: 'Lives semanais. Cases de sucesso reais. Mentorias em grupo. As lives são gravadas.',
  },
  {
    q: 'Labs de Criação',
    a: 'Labs, templates e ferramentas pra sair da ideia e ir para a entrega. São oficinas onde você coloca a mão na massa.',
    detail: 'Cada lab tem uma entrega: um template pronto, um workflow documentado, um conteúdo publicado. Nada fica na teoria.',
  },
  {
    q: 'NurseAI',
    a: 'A IA que monta sua trilha de aprendizado no ritmo certo, baseada nos seus objetivos.',
    detail: 'Se você trabalha de noite, adapta. Se você quer gerar conteúdo pra Instagram, foca nisso. Se precisa passar plantão mais rápido, vai por esse caminho. Sem plano genérico. Plano feito pra você.',
  },
  {
    q: 'Biblioteca',
    a: 'Referências e prompts com contexto real de enfermagem. +500 prompts organizados por situação.',
    detail: '"Como pedir cooperação do paciente", "Como explicar procedimento complicado", "Como criar post educativo sobre medicação", "Como fazer passagem de plantão com IA". Tudo testado. Tudo funcionando.',
  },
  {
    q: 'Mentorias',
    a: 'Sessões ao vivo com profissionais de saúde referência. Mentorias em grupo e individuais.',
    detail: 'Profissionais que já estão usando IA no dia a dia e sabem exatamente o que funciona no plantão brasileiro.',
  },
]

const TOOLS = [
  'CHATGPT', 'GEMINI', 'CLAUDE', 'GROK',
  'FLUX', 'IDEOGRAM', 'RECRAFT', 'RUNWAY',
  'KLING AI', 'VEO 3', 'MIDJOURNEY', 'MAGNIFIC',
  'LUMA DREAM MACHINE', 'HEYGEN', 'ELEVENLABS',
  'D-ID', 'KAIBAN', 'SUNO', 'MUSICFX',
  'AUDIOBOX', 'NOTEBOOKLM', 'PERPLEXITY',
  'GEMINI ADVANCED', 'DEEP RESEARCH',
  'PUBMED AI', 'MEDICAL FLASH', 'UPTOID AI', 'CLINICAL LK',
]

const FOR_WHO = [
  'Enfermeiros de plantão que querem usar IA no dia a dia',
  'Técnicos de enfermagem que precisam otimizar a rotina',
  'Gestores de saúde que querem leads mais qualificados',
  'Enfermeiros que querem gerar renda extra com conteúdo',
  'Profissionais de saúde que querem se destacar no mercado',
  'Quem já tentou IA e não conseguiu aplicar na prática',
]

const FAQ_ITEMS = [
  {
    q: 'Quanto tempo leva pra ver resultado?',
    a: 'Já na primeira semana você tem ferramentas práticas pra usar no plantão.',
  },
  {
    q: 'Preciso ser expert em tecnologia?',
    a: 'Não. Os cursos começam do zero e são feitos pra quem trabalha 12h de plantão.',
  },
  {
    q: 'Funciona pra quem é técnico de enfermagem?',
    a: 'Sim. A maioria dos membros são técnicos e enfermeiros de plantão. O conteúdo é feito pra quem tem pouco tempo e precisa de resultado rápido.',
  },
  {
    q: 'As ferramentas são gratuitas ou pagas?',
    a: 'Ensino a usar ferramentas gratuitas. Algumas têm plano gratuito suficiente. Outras têm plano pago, mas mostro como usar a versão gratuita ao máximo.',
  },
  {
    q: 'Tem certificado?',
    a: 'Sim. Ao final de cada curso você recebe um certificado. Reconhecido pelo mercado.',
  },
  {
    q: 'Posso cancelar a assinatura?',
    a: 'Sim, a qualquer momento. Sem burocracia. Você vai no painel, clica em cancelar, e pronto. Ninguém vai te pedir pra ficar.',
  },
]

const PLANOS = [
  {
    name: 'Mensal',
    price: 'R$ 47',
    period: '/mês',
    desc: 'Para quem quer experimentar.',
    features: ['Acesso aos cursos', 'Acesso à comunidade', 'Workflows básicos', '1 trilha de aprendizado'],
    cta: 'Começar agora',
    highlight: false,
  },
  {
    name: 'Anual',
    price: 'R$ 37',
    period: '/mês',
    desc: 'Para quem quer dominar IA. Economia de R$ 120/ano.',
    features: ['Tudo do mensal', 'NurseAI', 'Biblioteca completa', 'Mentorias em grupo', 'Labs de criação', 'Todas as trilhas'],
    cta: 'Fazer parte',
    highlight: true,
  },
  {
    name: 'Vitalício',
    price: 'R$ 197',
    period: 'pago uma vez',
    desc: 'Para quem quer estar pronto pra sempre.',
    features: ['Tudo do anual', 'Acesso vitalício', 'Novos cursos incluídos', 'Prioridade em mentorias'],
    cta: 'Quero vitalício',
    highlight: false,
  },
]

// ─── Componentes ─────────────────────────────────────────────────────────────

function AccordionItem({ q, a, detail }: { q: string; a: string; detail?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="text-base font-medium text-[#EDDABA] group-hover:text-white transition-colors">
          {q}
        </span>
        <span className={`text-[#FF5404] text-xl ml-4 transition-transform ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-[rgba(237,218,186,0.6)] text-sm leading-relaxed">{a}</p>
          {detail && (
            <p className="text-[rgba(237,218,186,0.4)] text-xs leading-relaxed mt-2">{detail}</p>
          )}
        </div>
      )}
    </div>
  )
}

function PlanCard({ name, price, period, desc, features, cta, highlight }: typeof PLANOS[0]) {
  return (
    <div className={`rounded-2xl p-6 border ${highlight ? 'bg-[#28e7d7]/5 border-[#28e7d7]/40' : 'bg-white/3 border-white/10'}`}>
      {highlight && (
        <span className="inline-block text-[10px] font-bold px-2 py-1 rounded bg-[#FF5404]/20 text-[#FF5404] border border-[#FF5404]/30 mb-3">
          MAIS POPULAR
        </span>
      )}
      <p className="text-xs font-bold tracking-[0.15em] uppercase text-[rgba(237,218,186,0.4)] mb-1">{name}</p>
      <div className="mb-1">
        <span className="text-3xl font-black text-[#EDDABA]">{price}</span>
        <span className="text-xs text-[rgba(237,218,186,0.4)] ml-1">{period}</span>
      </div>
      <p className="text-xs text-[rgba(237,218,186,0.5)] mb-5">{desc}</p>
      <ul className="space-y-2 mb-6">
        {features.map(f => (
          <li key={f} className="text-xs text-[rgba(237,218,186,0.6)] flex items-start gap-2">
            <span className="text-[#28e7d7] mt-0.5">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <button className={`w-full h-11 rounded-xl font-semibold text-sm transition-colors ${highlight ? 'bg-[#FF5404] hover:bg-[#e64a00] text-white' : 'bg-white/8 hover:bg-white/12 text-[#EDDABA] border border-white/10'}`}>
        {cta}
      </button>
    </div>
  )
}

function ToolBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[rgba(237,218,186,0.7)] hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">
      {name}
    </span>
  )
}

function FeatureCard({ title, tag, desc, icon }: { title: string; tag: string; desc: string; icon: string }) {
  return (
    <div className="group relative bg-[rgba(247,242,232,0.03)] border border-white/10 rounded-xl p-5 hover:border-[#28e7d7]/40 transition-all duration-200">
      {tag && (
        <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded bg-[#FF5404]/20 text-[#FF5404] border border-[#FF5404]/30">
          {tag}
        </span>
      )}
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="text-sm font-bold text-[#EDDABA] mb-2">{title}</h3>
      <p className="text-xs text-[rgba(237,218,186,0.55)] leading-relaxed">{desc}</p>
    </div>
  )
}

// ─── Página Principal ─────────────────────────────────────────────────────────

export default function NurseHubLanding() {
  const [email, setEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault()
    if (email.trim()) {
      setNewsletterSubmitted(true)
      setEmail('')
    }
  }

  return (
    <>
      <Head>
        <title>NurseHub® | A comunidade de enfermeiros que usam IA na rotina</title>
        <meta name="description" content="NurseHub® é a comunidade onde enfermeiros e técnicos de enfermagem aprendem a usar inteligência artificial para transformar a rotina de cuidado. Conteúdo prático, sem enrolação." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="NurseHub® | A comunidade de enfermeiros que usam IA na rotina" />
        <meta property="og:description" content="Conteúdo prático de IA para enfermeiros e técnicos de enfermagem. Sem hype. Só o que funciona." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-[#080706] text-[#EDDABA]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>

        {/* ── NAV ── */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080706]/90 backdrop-blur-md border-b border-white/8">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#28e7d7] to-[#dcff64] flex items-center justify-center text-black font-bold text-sm">N</div>
              <span className="font-bold text-sm tracking-tight">NurseHub<span className="text-[#28e7d7]">®</span></span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map(item => (
                <button key={item} className="px-3 py-1.5 text-xs text-[rgba(237,218,186,0.6)] hover:text-[#EDDABA] hover:bg-white/5 rounded-lg transition-colors">
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button className="text-xs text-[rgba(237,218,186,0.6)] hover:text-[#EDDABA] px-3 py-1.5 transition-colors">
                LOGIN
              </button>
              <button className="text-xs font-semibold bg-[#FF5404] hover:bg-[#e64a00] text-white px-4 py-1.5 rounded-lg transition-colors">
                FAÇA PARTE
              </button>
            </div>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div
              className="fixed inset-0 -z-10 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(247,242,232,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(247,242,232,0.03) 1px, transparent 1px),
                  radial-gradient(ellipse 80% 50% at 50% -10%, rgba(40,231,215,0.12), transparent)
                `,
                backgroundSize: '48px 48px, 48px 48px, auto',
              }}
            />
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#28e7d7] mb-4">
              {HERO.label}
            </p>
            <h1
              className="text-4xl md:text-6xl font-black text-[#EDDABA] leading-tight mb-6 max-w-3xl mx-auto"
              style={{ letterSpacing: '-0.02em' }}
            >
              {HERO.h1}
            </h1>
            <p className="text-lg text-[rgba(237,218,186,0.6)] max-w-xl mx-auto mb-10 leading-relaxed">
              {HERO.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="h-12 px-8 rounded-xl font-bold text-[#090806] bg-gradient-to-r from-[#dcff64] via-[#28e7d7] to-[#28e7d7] hover:opacity-90 transition-opacity shadow-lg shadow-[#28e7d7]/20">
                {HERO.cta1}
              </button>
              <button className="h-12 px-8 rounded-xl font-semibold text-[#EDDABA] border border-white/20 hover:bg-white/5 transition-colors">
                {HERO.cta2}
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-20">
            <p className="text-center text-[10px] tracking-[0.15em] uppercase text-[rgba(237,218,186,0.3)] mb-6">
              Confiado por profissionais de saúde em +200 instituições
            </p>
            <div className="flex flex-wrap justify-center gap-6 opacity-40">
              {['Hospital Albert Einstein', 'Sírio-Libanês', "Rede D'Or", 'Prevent Senior', 'Amil', 'Bradesco Saúde'].map(name => (
                <span key={name} className="text-xs font-semibold text-[rgba(237,218,186,0.6)] tracking-tight">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── NURSEHUB® ── */}
        <section className="py-16 px-4 border-t border-white/6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#28e7d7] mb-3">
                NurseHub®
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-[#EDDABA] mb-4 leading-tight">
                Bem-vindo(a) ao NurseHub®
              </h2>
              <p className="text-[rgba(237,218,186,0.6)] leading-relaxed mb-4">
                A comunidade de enfermeiros que usa IA na rotina.
              </p>
              <p className="text-xs text-[rgba(237,218,186,0.4)]">
                Conteúdo prático, sem enrolação, para quem trabalha de verdade.
              </p>
            </div>
            <div className="w-full md:w-80 h-52 rounded-xl bg-gradient-to-br from-[#28e7d7]/10 to-[#dcff64]/5 border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🩺</div>
                <p className="text-xs text-[rgba(237,218,186,0.5)]">NurseHub®</p>
                <p className="text-[10px] text-[rgba(237,218,186,0.3)] mt-1">Acesso completo</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="py-20 px-4 border-t border-white/6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { n: STATS.number, l: STATS.label },
                { n: STATS.nps, l: 'NPS da comunidade' },
                { n: STATS.courses, l: 'cursos na plataforma' },
                { n: STATS.recommend, l: 'recomendariam' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-[#28e7d7] mb-1">{s.n}</div>
                  <div className="text-xs text-[rgba(237,218,186,0.5)] leading-relaxed">{s.l}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-[rgba(237,218,186,0.4)] mt-8 max-w-xl mx-auto">
              {STATS.community}
            </p>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section className="py-20 px-4 border-t border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#28e7d7] mb-3 text-center">
              {DIFFERENTIALS.label}
            </p>
            <h2 className="text-2xl md:text-4xl font-black text-[#EDDABA] text-center mb-3 leading-tight">
              {DIFFERENTIALS.headline}
            </h2>
            <p className="text-[rgba(237,218,186,0.5)] text-center text-sm mb-14">{DIFFERENTIALS.subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {DIFFERENTIALS.items.map(item => (
                <div key={item.step} className="text-center md:text-left">
                  <div className="text-5xl font-black text-[rgba(40,231,215,0.15)] mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold text-[#EDDABA] mb-2">{item.title}</h3>
                  <p className="text-sm text-[rgba(237,218,186,0.5)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── O QUE VOCÊ ENCONTRA DENTRO ── */}
        <section className="py-20 px-4 border-t border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#28e7d7] mb-3 text-center">
              NURSEHUB® COMPLETO
            </p>
            <h2 className="text-2xl md:text-4xl font-black text-[#EDDABA] text-center mb-3 leading-tight">
              O que você encontra dentro
            </h2>
            <p className="text-center text-[rgba(237,218,186,0.5)] text-sm mb-12">
              Tudo que você precisa para usar IA no plantão.
            </p>
            <div className="max-w-3xl mx-auto">
              {INSIDE_ITEMS.map(item => (
                <AccordionItem key={item.q} q={item.q} a={item.a} detail={item.detail} />
              ))}
            </div>
          </div>
        </section>

        {/* ── TRILHAS ── */}
        <section className="py-20 px-4 border-t border-white/6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[rgba(237,218,186,0.4)] mb-3">
              TRILHAS
            </p>
            <h2 className="text-2xl md:text-4xl font-black text-[#EDDABA] text-center mb-3 leading-tight">
              Escolhe por onde começar
            </h2>
            <p className="text-[rgba(237,218,186,0.5)] text-sm mb-12">
              Cada trilha é um caminho completo. Comece pela sua realidade.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Rotina Hospitalar', icon: '🏥', desc: 'IA para plantão, evolução e passagem' },
                { name: 'Conteúdo para Redes', icon: '📱', desc: 'IA para criar posts, stories e reels' },
                { name: 'Renda Extra', icon: '💰', desc: 'IA para freelance e trabalhos extras' },
                { name: 'Liderança', icon: '📊', desc: 'IA para gestão e tomada de decisão' },
              ].map(t => (
                <div key={t.name} className="bg-white/3 border border-white/10 rounded-xl p-5 text-left hover:border-[#28e7d7]/40 transition-colors cursor-pointer">
                  <div className="text-3xl mb-3">{t.icon}</div>
                  <h3 className="text-sm font-bold text-[#EDDABA] mb-1">{t.name}</h3>
                  <p className="text-xs text-[rgba(237,218,186,0.45)]">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLANOS ── */}
        <section className="py-20 px-4 border-t border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[rgba(237,218,186,0.4)] mb-3 text-center">
              PREÇO
            </p>
            <h2 className="text-2xl md:text-4xl font-black text-[#EDDABA] text-center mb-3 leading-tight">
              Escolhe seu plano
            </h2>
            <p className="text-center text-[rgba(237,218,186,0.5)] text-sm mb-12">
              Sem burocracia. Cancela quando quiser.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PLANOS.map(plan => (
                <PlanCard key={plan.name} {...plan} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FERRAMENTAS ── */}
        <section className="py-20 px-4 border-t border-white/6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#EDDABA] mb-8">
              Ferramentas que você aprende a usar
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {TOOLS.map(t => (
                <ToolBadge key={t} name={t} />
              ))}
            </div>
            <button className="h-12 px-10 rounded-xl font-bold text-[#090806] bg-gradient-to-r from-[#dcff64] via-[#28e7d7] to-[#28e7d7] hover:opacity-90 transition-opacity shadow-lg shadow-[#28e7d7]/20">
              QUERO FAZER PARTE
            </button>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-4 border-t border-white/6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#EDDABA] text-center mb-10">
              TUDO O QUE VOCÊ PRECISA SABER
            </h2>
            <div>
              {FAQ_ITEMS.map(item => (
                <AccordionItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER ── */}
        <section className="py-20 px-4 border-t border-white/6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#EDDABA] mb-2">
              Receba atualizações
            </h2>
            <p className="text-xs text-[rgba(237,218,186,0.4)] mb-8">
              Conteúdo toda semana. Sem spam. Você pode cancelar a qualquer momento.
            </p>
            {newsletterSubmitted ? (
              <p className="text-[#28e7d7] text-sm font-medium">Enviado! Vamos manter contato. 🩺</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2 max-w-sm mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="seu melhor email"
                  required
                  className="flex-1 h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-sm text-[#EDDABA] placeholder:text-[rgba(237,218,186,0.3)] focus:outline-none focus:border-[#28e7d7]/50 transition-colors"
                />
                <button
                  type="submit"
                  className="h-11 px-6 rounded-lg font-semibold bg-[#FF5404] hover:bg-[#e64a00] text-white text-sm transition-colors whitespace-nowrap"
                >
                  Quero receber
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-white/8 py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[rgba(237,218,186,0.4)] mb-4">Produto</p>
                <ul className="space-y-2">
                  {['Trilhas', 'Biblioteca', 'Workflows', 'Mentorias', 'Comunidade', 'NurseAI'].map(item => (
                    <li key={item}>
                      <button className="text-xs text-[rgba(237,218,186,0.5)] hover:text-[#EDDABA] transition-colors text-left">{item}</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[rgba(237,218,186,0.4)] mb-4">Empresa</p>
                <ul className="space-y-2">
                  {['Sobre', 'Blog', 'Contato'].map(item => (
                    <li key={item}>
                      <button className="text-xs text-[rgba(237,218,186,0.5)] hover:text-[#EDDABA] transition-colors text-left">{item}</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[rgba(237,218,186,0.4)] mb-4">Jurídico</p>
                <ul className="space-y-2">
                  {['Termos de uso', 'Privacidade', 'LGPD'].map(item => (
                    <li key={item}>
                      <button className="text-xs text-[rgba(237,218,186,0.5)] hover:text-[#EDDABA] transition-colors text-left">{item}</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[rgba(237,218,186,0.4)] mb-4">Social</p>
                <ul className="space-y-2">
                  {['Instagram', 'YouTube', 'LinkedIn', 'TikTok'].map(item => (
                    <li key={item}>
                      <button className="text-xs text-[rgba(237,218,186,0.5)] hover:text-[#EDDABA] transition-colors text-left">{item}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#28e7d7] to-[#dcff64] flex items-center justify-center text-black font-bold text-xs">N</div>
                <span className="text-sm font-bold">NurseHub<span className="text-[#28e7d7]">®</span></span>
              </div>
              <p className="text-xs text-[rgba(237,218,186,0.35)]">
                NurseHub®. A enfermagem ainda trabalha manualmente em 2026.
              </p>
              <p className="text-xs text-[rgba(237,218,186,0.25)]">© 2026</p>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}