"use client";

import { motion } from "framer-motion";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop&q=80",
    label: "Área de CrossFit",
    sublabel: "Equipamentos profissionais",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=600&auto=format&fit=crop&q=80",
    label: "Piscina",
    sublabel: "Natação e Hidroginástica",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80",
    label: "Pilates",
    sublabel: "Estúdio especializado",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80",
    label: "Treino Funcional",
    sublabel: "Hyrox e condicionamento",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&auto=format&fit=crop&q=80",
    label: "Mobilidade",
    sublabel: "Yoga e alongamento",
    span: "col-span-2",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.1,
    },
  }),
};

export default function Gallery() {
  return (
    <section id="estrutura" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#F7941D]" />
            <span className="text-[#F7941D] text-xs font-black tracking-[0.3em] uppercase">
              Nossa Estrutura
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              ESPAÇOS FEITOS PARA<br />
              <span className="text-[#F7941D]">VENCER</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Estrutura de alto nível para todas as modalidades. Cada espaço
              foi pensado para extrair o melhor de você.
            </p>
          </div>
        </motion.div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-3 h-auto md:h-[560px]">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className={`${photo.span} relative overflow-hidden group cursor-default min-h-[180px] md:min-h-0`}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay base */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

              {/* Gradiente inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Borda laranja no hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#F7941D]/40 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-[#F7941D] text-[10px] font-black uppercase tracking-[0.2em]">
                  {photo.label}
                </p>
                <p className="text-white/70 text-xs mt-0.5">{photo.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA inferior */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 }}
          className="mt-8 flex items-center justify-between flex-wrap gap-4"
        >
          <p className="text-gray-600 text-xs">
            * Estrutura sujeita a atualizações. Visite-nos para conhecer pessoalmente.
          </p>
          <a
            href="https://wa.me/5584981827107?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20%C3%A0%201UP%20Complexo%20Esportivo."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7941D] hover:text-white border border-[#F7941D]/30 hover:border-[#F7941D] font-black text-xs py-2 px-5 uppercase tracking-widest transition-colors duration-300"
          >
            AGENDAR VISITA →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
