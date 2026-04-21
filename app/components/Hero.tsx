"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { waLink } from "@/app/lib/contact";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});

const MODALIDADES = [
  "CROSSFIT",
  "HYROX",
  "NATAÇÃO",
  "HIDROGINÁSTICA",
  "PILATES",
];

const HERO_IMAGE = "/hero/hero-main.png";

export default function Hero() {
  return (
    <section
      id="sobre"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#0a0a0a]"
    >
      {/* Imagem de fundo full-bleed */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Duotone base: preto por baixo */}
        <div className="absolute inset-0 bg-[#0a0a0a]/70" />

        {/* Gradiente vertical — mais escuro na base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/60 to-[#0a0a0a]" />

        {/* Gradiente lateral — favorece leitura do texto à esquerda */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/55 to-transparent" />

        {/* Brilho laranja difuso */}
        <div className="absolute top-1/3 right-[-10%] w-[650px] h-[650px] bg-[#F7941D]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Grão editorial */}
        <div className="noise-overlay absolute inset-0" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-36 pb-24 lg:pt-44 lg:pb-32 flex-1 flex items-center">
        <div className="w-full">
          {/* Tag */}
          <motion.div
            {...fadeUp(0.05)}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-0.5 bg-[#F7941D]" />
            <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
              Natal / RN · Desde 2022
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.18)}
            className="font-display text-white leading-[0.82] tracking-tight text-[18vw] sm:text-[15vw] lg:text-[12vw] xl:text-[11rem]"
            style={{ letterSpacing: "-0.02em" }}
          >
            ELEVE
            <br />
            <span className="text-[#F7941D]">SEU</span> NÍVEL
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            {...fadeUp(0.32)}
            className="mt-8 text-base md:text-lg text-gray-300 max-w-xl leading-relaxed"
          >
            Mais que uma academia: um complexo esportivo completo em Natal/RN.
            CrossFit, Natação, Pilates, Hidroginástica e HYROX — sob o mesmo
            teto, com estrutura de alto padrão.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.44)}
            className="mt-10 flex flex-wrap items-center gap-8"
          >
            <a
              href={waLink("experimental")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#F7941D] hover:bg-[#e0850f] text-black font-black text-xs md:text-sm px-8 py-5 uppercase tracking-[0.22em] transition-colors duration-300"
            >
              Agendar aula experimental
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#modalidades"
              className="group inline-flex items-center gap-2 text-white/80 hover:text-white text-xs md:text-sm font-semibold uppercase tracking-[0.22em] transition-colors duration-300"
            >
              <span className="border-b border-white/30 group-hover:border-white pb-1">
                Conhecer modalidades
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Ticker de modalidades */}
      <div className="relative z-10 border-y border-[#262626] bg-[#0a0a0a]/80 backdrop-blur-sm overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap font-display text-white/80 text-4xl md:text-5xl py-4 gap-16 w-max">
          {[...MODALIDADES, ...MODALIDADES, ...MODALIDADES].map((m, i) => (
            <span key={`${m}-${i}`} className="inline-flex items-center gap-16">
              <span>{m}</span>
              <span className="text-[#F7941D]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <StatsBar />

      {/* Scroll indicator */}
      <a
        href="#modalidades"
        aria-label="Rolar para modalidades"
        className="absolute bottom-[-52px] left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500 hover:text-[#F7941D] transition-colors z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Role</span>
        <span className="text-xl animate-bounce">↓</span>
      </a>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "2.000m²", label: "Complexo esportivo" },
    { value: "450m²", label: "Box CrossFit · HYROX" },
    { value: "6", label: "Modalidades" },
    { value: "2022", label: "Desde setembro" },
  ];

  return (
    <div className="relative z-10 bg-[#0a0a0a] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#262626] border-x border-[#262626]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-6 py-6 md:py-8 flex flex-col gap-1"
            >
              <span className="font-display text-[#F7941D] text-4xl md:text-6xl leading-none">
                {s.value}
              </span>
              <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.25em]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
