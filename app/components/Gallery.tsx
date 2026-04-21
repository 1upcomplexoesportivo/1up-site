"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { waLink } from "@/app/lib/contact";

interface Photo {
  src: string;
  label: string;
  caption: string;
}

const PHOTOS: Photo[] = [
  {
    src: "/gallery/01-box-crossfit.png",
    label: "Box CrossFit + HYROX",
    caption: "450 m² de área funcional. Rigs, pesos livres e ampla variedade de ergômetros importados.",
  },
  {
    src: "/gallery/02-piscina.png",
    label: "Piscina aquecida",
    caption: "Salinizada e coberta. Conforto o ano todo — do bebê ao idoso, em todas as aulas.",
  },
  {
    src: "/gallery/03-estudio-pilates.png",
    label: "Estúdio de Pilates",
    caption: "Aparelhos completos e acompanhamento individualizado em estúdio exclusivo.",
  },
  {
    src: "/gallery/04-area-hyrox.png",
    label: "Convivência",
    caption: "Lanchonete, loja fitness e barbearia no próprio complexo — tudo no mesmo lugar.",
  },
];

const metrics = [
  { value: "Aquecida", label: "Piscina salinizada e coberta" },
  { value: "Equipados", label: "Vestiários climatizados com amenities" },
  { value: "Elétrica", label: "Vaga de carregamento exclusiva" },
  { value: "Convívio", label: "Lanchonete, loja fitness e barbearia" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay: i * 0.1 },
  }),
};

export default function Gallery() {
  return (
    <section
      id="estrutura"
      className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
                03
              </span>
              <div className="w-10 h-0.5 bg-[#F7941D]" />
              <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
                Estrutura
              </span>
            </div>
            <h2 className="font-display text-white text-5xl md:text-6xl lg:text-7xl leading-[0.88] tracking-tight">
              ESPAÇOS FEITOS
              <br />
              PARA <span className="text-[#F7941D]">VENCER.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Cada ambiente foi pensado para extrair o seu melhor — dos primeiros
            treinos ao alto rendimento.
          </p>
        </motion.div>

        {/* Grid de fotos editorial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {PHOTOS.map((photo, i) => {
            const big = i === 0 || i === 3;
            return (
              <motion.figure
                key={photo.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className={`group ${big ? "md:row-span-1" : ""}`}
              >
                <div
                  className={`relative overflow-hidden ${
                    big ? "aspect-[4/3]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[#0a0a0a]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <figcaption className="mt-4 flex items-start justify-between gap-6">
                  <div>
                    <p className="font-display text-white text-2xl md:text-3xl leading-none">
                      {photo.label}
                    </p>
                    <p className="text-gray-500 text-sm mt-2 max-w-sm leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                  <span className="font-display text-[#F7941D]/70 text-4xl leading-none shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>

        {/* Métricas */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mt-20 border-y border-[#262626]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#262626]">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="px-6 py-8 md:py-10 flex flex-col gap-1"
              >
                <span className="font-display text-white text-3xl md:text-5xl leading-none">
                  {m.value}
                </span>
                <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.22em] mt-2">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA inferior */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-gray-600 text-xs max-w-sm">
            A foto real vale mais que mil palavras — venha conhecer pessoalmente.
          </p>
          <a
            href={waLink("visita")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[#F7941D] hover:text-white font-black text-xs py-3 px-6 uppercase tracking-[0.22em] border border-[#F7941D]/40 hover:border-[#F7941D] hover:bg-[#F7941D] transition-colors duration-300"
          >
            <span className="transition-colors duration-300 group-hover:text-black">
              Agendar visita
            </span>
            <span className="transition-all duration-300 group-hover:text-black group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
