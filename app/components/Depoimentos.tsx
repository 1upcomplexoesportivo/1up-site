"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

// TODO: substituir pelos depoimentos reais dos alunos (texto, nome, modalidade e foto)
interface Depoimento {
  quote: string;
  name: string;
  modalidade: string;
  photo?: string;
  initials: string;
}

const DEPOIMENTOS: Depoimento[] = [
  {
    quote:
      "A estrutura é impressionante. Em três meses consegui resultados que não tinha em outras academias. O acompanhamento faz toda a diferença.",
    name: "Ana Carolina",
    modalidade: "CrossFit",
    initials: "AC",
  },
  {
    quote:
      "Coloquei minha filha na natação infantil e ela simplesmente ama vir. O professor é atencioso e ela já perdeu o medo da água.",
    name: "Rafael Monteiro",
    modalidade: "Natação Infantil",
    initials: "RM",
  },
  {
    quote:
      "Comecei no Pilates por indicação médica e virou parte da rotina. Dores sumiram e hoje treino por prazer, não por obrigação.",
    name: "Luciana Freitas",
    modalidade: "Pilates",
    initials: "LF",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.1 },
  }),
};

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="relative py-24 md:py-32 bg-[#0a0a0a] border-t border-[#171717] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
                04
              </span>
              <div className="w-10 h-0.5 bg-[#F7941D]" />
              <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
                Depoimentos
              </span>
            </div>
            <h2 className="font-display text-white text-5xl md:text-6xl lg:text-7xl leading-[0.88] tracking-tight">
              QUEM TREINA NA 1UP
              <br />
              <span className="text-[#F7941D]">CONTA A HISTÓRIA.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            O que os alunos dizem vale mais que qualquer apresentação. Leia, e
            venha viver a mesma experiência.
          </p>
        </motion.div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {DEPOIMENTOS.map((d, i) => (
            <motion.figure
              key={d.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative bg-[#171717] border border-[#262626] p-8 md:p-10 flex flex-col h-full hover:border-[#F7941D]/60 transition-colors duration-500"
            >
              {/* Aspas */}
              <span
                aria-hidden="true"
                className="font-display text-[#F7941D]/30 text-8xl leading-none absolute top-4 right-5 select-none"
              >
                &ldquo;
              </span>

              <blockquote className="relative text-gray-200 text-base leading-relaxed flex-1">
                {d.quote}
              </blockquote>

              <figcaption className="relative mt-8 pt-6 border-t border-[#262626] flex items-center gap-4">
                {d.photo ? (
                  <img
                    src={d.photo}
                    alt={d.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#F7941D]/10 border border-[#F7941D]/30 flex items-center justify-center text-[#F7941D] font-black text-xs tracking-wider">
                    {d.initials}
                  </div>
                )}
                <div>
                  <p className="text-white font-bold text-sm">{d.name}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mt-0.5">
                    {d.modalidade}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
