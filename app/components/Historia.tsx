"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const marcos = [
  {
    year: "2022",
    label: "Setembro",
    title: "Fundação",
    description:
      "Nasce a 1UP com a proposta de unir diferentes modalidades em um só complexo esportivo em Natal.",
  },
  {
    year: "2024",
    label: "Expansão",
    title: "Novas modalidades",
    description:
      "Ampliamos a estrutura e o quadro de instrutores — Natação, Hidroginástica e Pilates ganham espaço próprio.",
  },
  {
    year: "2026",
    label: "Hoje",
    title: "HYROX na 1UP",
    description:
      "Entramos na era HYROX — a competição fitness que mais cresce no mundo ganha estação própria no nosso box.",
  },
];

const HISTORIA_IMAGE = "/historia/equipe.png";

export default function Historia() {
  return (
    <section
      id="historia"
      className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
              02
            </span>
            <div className="w-10 h-0.5 bg-[#F7941D]" />
            <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
              Nossa História
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="lg:col-span-5 relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={HISTORIA_IMAGE}
              alt="Recepção da 1UP Complexo Esportivo em Natal/RN"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            <div className="absolute top-5 left-5 flex items-center gap-3 bg-[#0a0a0a]/80 backdrop-blur-sm px-4 py-2">
              <span className="w-2 h-2 bg-[#F7941D] rounded-full" />
              <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">
                Desde Setembro / 2022
              </span>
            </div>
          </motion.div>

          {/* Texto + timeline */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="font-display text-white text-5xl md:text-6xl lg:text-7xl leading-[0.88] tracking-tight"
            >
              ELEVANDO NÍVEIS
              <br />
              EM <span className="text-[#F7941D]">NATAL</span> — DESDE 2022.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.22 }}
              className="mt-8 text-gray-400 text-base leading-relaxed max-w-xl"
            >
              A 1UP começou de uma família de empreendedores e do sonho de um
              educador físico — com a ambição de juntar, em um mesmo endereço,
              tudo que faltava em Natal: estrutura, variedade de modalidades e
              atendimento que trata aluno por nome. Abrimos em setembro de 2022.
              Hoje são 2.000 m² em Capim Macio, seis modalidades e uma
              comunidade que cresce em volta do box e da piscina.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.32 }}
              className="mt-4 text-gray-400 text-base leading-relaxed max-w-xl"
            >
              Porque aqui, crescer é mais do que um objetivo — é a nossa
              essência.
            </motion.p>

            {/* Timeline */}
            <div className="mt-12 relative">
              {/* Linha vertical/horizontal */}
              <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-[#262626]" />

              <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                {marcos.map((m, i) => (
                  <motion.li
                    key={m.year}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                      delay: 0.25 + i * 0.12,
                    }}
                    className="relative"
                  >
                    {/* Dot na linha */}
                    <div className="hidden md:flex items-center gap-3 mb-4">
                      <span className="w-3 h-3 bg-[#F7941D] rounded-full ring-4 ring-[#0a0a0a]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                        {m.label}
                      </span>
                    </div>
                    <div className="md:hidden text-[10px] font-black uppercase tracking-[0.3em] text-[#F7941D] mb-2">
                      {m.label}
                    </div>
                    <div className="font-display text-[#F7941D] text-5xl leading-none mb-2">
                      {m.year}
                    </div>
                    <h3 className="text-white font-black uppercase tracking-wide text-sm mb-2">
                      {m.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {m.description}
                    </p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
