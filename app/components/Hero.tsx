"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

export default function Hero() {
  return (
    <section
      id="sobre"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#111111]"
    >
      {/* Imagem de fundo — CrossFit */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&auto=format&fit=crop&q=80"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay escuro para legibilidade */}
        <div className="absolute inset-0 bg-[#111111]/75" />
        {/* Gradiente diagonal sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-[#111111]/20" />
      </div>

      {/* Brilho laranja difuso */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#F7941D]/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Coluna esquerda — texto */}
          <div>
            {/* Tag */}
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#F7941D]" />
              <span className="text-[#F7941D] text-xs font-black tracking-[0.3em] uppercase">
                Natal / RN
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              {...fadeUp(0.22)}
              className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-white mb-6"
            >
              ELEVE
              <br />
              SEU{" "}
              <span className="text-[#F7941D]">NÍVEL</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              {...fadeUp(0.34)}
              className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed"
            >
              Complexo esportivo completo em Natal/RN. Estrutura profissional,
              equipe qualificada e o ambiente ideal para você superar seus limites.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.46)} className="flex flex-wrap gap-4">
              <a
                href="#modalidades"
                className="bg-[#F7941D] hover:bg-[#e0850f] text-black font-black text-sm px-8 py-4 uppercase tracking-widest transition-colors duration-300"
              >
                CONHEÇA A 1UP
              </a>
              <a
                href="#planos"
                className="border border-[#F7941D] text-[#F7941D] hover:bg-[#F7941D] hover:text-black font-black text-sm px-8 py-4 uppercase tracking-widest transition-colors duration-300"
              >
                VER PLANOS
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.58)} className="mt-16 flex flex-wrap gap-12">
              {[
                { value: "500+", label: "Alunos Ativos" },
                { value: "10+", label: "Modalidades" },
                { value: "5★", label: "Avaliação Google" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-black text-[#F7941D]">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Coluna direita — cards de imagem (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
            className="hidden lg:grid grid-cols-2 gap-3 h-[520px]"
          >
            {/* Card grande — CrossFit */}
            <div className="row-span-2 relative overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=80"
                alt="CrossFit 1UP"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F7941D]">CrossFit</span>
                <p className="text-white text-xs mt-0.5">Treinamento funcional</p>
              </div>
            </div>

            {/* Card pequeno — Natação */}
            <div className="relative overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400&auto=format&fit=crop&q=80"
                alt="Natação 1UP"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F7941D]">Natação</span>
              </div>
            </div>

            {/* Card pequeno — Pilates */}
            <div className="relative overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&auto=format&fit=crop&q=80"
                alt="Pilates 1UP"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F7941D]">Pilates</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Role</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
