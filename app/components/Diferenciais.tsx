"use client";

import { motion } from "framer-motion";

const items = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "CrossFit",
    description:
      "Treinos funcionais de alta intensidade que combinam força, resistência e condicionamento físico completo.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Hyrox",
    description:
      "A competição fitness mais popular do mundo. Treine e compita com o método Hyrox na 1UP.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Natação Infantil",
    description:
      "Aulas especializadas para crianças, com instrutores capacitados para ensinar do zero com segurança e diversão.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Natação Adulto",
    description:
      "Para iniciantes ou nadadores experientes. Melhore sua técnica, condicionamento e qualidade de vida na água.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Hidroginástica",
    description:
      "Atividade de baixo impacto ideal para todas as idades. Fortalece o corpo, alivia dores e melhora a mobilidade.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Pilates",
    description:
      "Método de fortalecimento muscular com foco em postura, equilíbrio e consciência corporal. Para todos os níveis.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 },
  }),
};

export default function Diferenciais() {
  return (
    <section id="modalidades" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#F7941D]" />
              <span className="text-[#F7941D] text-xs font-black tracking-[0.3em] uppercase">
                Nossas Modalidades
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              TUDO QUE VOCÊ<br />
              <span className="text-[#F7941D]">PRECISA</span> EM UM SÓ LUGAR
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            A 1UP é um complexo esportivo completo, pensado para atender do
            iniciante ao atleta de alto rendimento.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 24px rgba(247,148,29,0.15)",
                transition: { duration: 0.25 },
              }}
              className="group bg-[#111111] border border-[#2a2a2a] hover:border-[#F7941D] p-8 transition-colors duration-300 relative overflow-hidden cursor-default"
            >
              {/* Número de fundo */}
              <span className="absolute top-4 right-4 text-7xl font-black text-white/[0.03] group-hover:text-[#F7941D]/10 transition-colors select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Ícone */}
              <div className="text-[#F7941D] mb-6 relative z-10">{item.icon}</div>

              {/* Texto */}
              <h3 className="text-xl font-black text-white mb-3 uppercase tracking-wide relative z-10">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                {item.description}
              </p>

              {/* Linha inferior hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F7941D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
