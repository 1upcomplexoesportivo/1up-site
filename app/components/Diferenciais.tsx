"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Modalidade {
  title: string;
  description: string;
  image: string; // URL ou path em /public
  tag?: string;
}

const MODALIDADES: Modalidade[] = [
  {
    title: "CrossFit",
    description:
      "Box de 450 m² com equipamentos importados. Treinos funcionais que combinam força, resistência e condicionamento em uma única aula.",
    image: "/modalidades/crossfit.png",
  },
  {
    title: "HYROX",
    description:
      "A competição fitness mais popular do mundo — estações completas no box funcional da 1UP, com metodologia oficial.",
    image: "/modalidades/hyrox.png",
    tag: "Novo",
  },
  {
    title: "Natação Adulto",
    description:
      "Piscina aquecida, salinizada e coberta. Técnica, condicionamento e bem-estar no seu ritmo — o ano inteiro.",
    image: "/modalidades/natacao-adulto.png",
  },
  {
    title: "Natação Infantil",
    description:
      "Do bebê ao pré-adolescente. Água aquecida e salinizada, instrutores especializados em iniciação aquática — aula confortável em qualquer estação.",
    image: "/modalidades/natacao-infantil.png",
  },
  {
    title: "Hidroginástica",
    description:
      "Baixo impacto em piscina aquecida e salinizada. Alívio de dores, mobilidade e bem-estar — conforto do adulto ao idoso.",
    image: "/modalidades/hidroginastica.png",
  },
  {
    title: "Pilates",
    description:
      "Estúdio completo com aparelhos importados e acompanhamento próximo. Fortalecimento, postura e consciência corporal.",
    image: "/modalidades/pilates.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 },
  }),
};

export default function Diferenciais() {
  return (
    <section
      id="modalidades"
      className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
                01
              </span>
              <div className="w-10 h-0.5 bg-[#F7941D]" />
              <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
                Modalidades
              </span>
            </div>
            <h2 className="font-display text-white text-5xl md:text-6xl lg:text-7xl leading-[0.88] tracking-tight">
              TUDO QUE VOCÊ PRECISA
              <br />
              <span className="text-[#F7941D]">EM UM SÓ LUGAR.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Um complexo esportivo completo, pensado para atender do iniciante ao
            atleta de alto rendimento — com estrutura profissional para cada
            modalidade.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {MODALIDADES.map((item, i) => (
            <motion.article
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative overflow-hidden aspect-[4/5] cursor-default"
            >
              {/* Foto */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />

              {/* Duotone */}
              <div className="absolute inset-0 bg-[#0a0a0a]/55 group-hover:bg-[#0a0a0a]/40 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/25 to-transparent" />

              {/* Número */}
              <span className="absolute top-5 left-5 font-display text-white/70 text-4xl leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Tag opcional */}
              {item.tag && (
                <span className="absolute top-6 right-5 bg-[#F7941D] text-black text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1">
                  {item.tag}
                </span>
              )}

              {/* Título + descrição */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                <h3 className="font-display text-white text-3xl md:text-4xl leading-none tracking-tight">
                  {item.title}
                </h3>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <p className="overflow-hidden text-gray-300 text-sm leading-relaxed">
                    <span className="block pt-3">{item.description}</span>
                  </p>
                </div>
              </div>

              {/* Linha inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F7941D] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
