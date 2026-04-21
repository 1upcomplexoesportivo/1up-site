"use client";

import { motion } from "framer-motion";
import { waLink } from "@/app/lib/contact";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.7, ease: EASE, delay },
});

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative py-24 md:py-32 bg-[#0a0a0a] border-t border-[#171717]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div
          {...fadeUp()}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
                07
              </span>
              <div className="w-10 h-0.5 bg-[#F7941D]" />
              <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
                Contato
              </span>
            </div>
            <h2 className="font-display text-white text-5xl md:text-6xl lg:text-7xl leading-[0.88] tracking-tight">
              VAMOS
              <br />
              <span className="text-[#F7941D]">CONVERSAR.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            O melhor jeito de conhecer a 1UP é vivendo a experiência. Marque uma
            aula experimental e venha treinar com a gente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Coluna esquerda — CTA + info */}
          <motion.div
            {...fadeUp(0.1)}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* CTA principal */}
            <div className="bg-[#171717] border border-[#262626] p-8 md:p-10">
              <p className="text-[#F7941D] text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                Aula experimental · gratuita
              </p>
              <h3 className="font-display text-white text-3xl md:text-4xl leading-none mb-3">
                Venha treinar antes de decidir.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Fale com a gente no WhatsApp — agendamos uma aula pra você
                conhecer a estrutura e a equipe.
              </p>

              <a
                href={waLink("experimental")}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full bg-[#F7941D] hover:bg-[#e0850f] text-black font-black text-xs py-4 px-6 uppercase tracking-[0.22em] transition-colors duration-300 flex items-center justify-center gap-3"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chamar no WhatsApp
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Info compacta */}
            <dl className="space-y-5">
              <InfoRow label="Endereço" value="R. Dr. Orlando de Azevedo, 1979 · Capim Macio · Natal/RN" />
              <InfoRow label="Telefone" value="(84) 98182-7107" href="tel:+5584981827107" />
              <InfoRow label="E-mail" value="contato@siga1up.com.br" href="mailto:contato@siga1up.com.br" />
              <InfoRow
                label="Funcionamento"
                value="Seg–Sex 05h00–21h00 · Sáb 08h00–12h00 · Dom fechado"
              />
            </dl>
          </motion.div>

          {/* Coluna direita — mapa */}
          <motion.div
            {...fadeUp(0.2)}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            <div className="border border-[#F7941D]/20 hover:border-[#F7941D]/50 transition-colors duration-500 overflow-hidden flex-1 min-h-[420px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589.9945705807577!2d-35.20229511301461!3d-5.856387001847729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff1c8b4af819%3A0x1616fa5af85429fd!2s1UP%20Complexo%20Esportivo!5e0!3m2!1spt-BR!2sbr!4v1776198426389!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px", display: "block", filter: "grayscale(25%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização 1UP Complexo Esportivo — Natal/RN"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/1UP+Complexo+Esportivo+Natal+RN"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 border border-[#262626] hover:border-[#F7941D] text-gray-400 hover:text-[#F7941D] font-black text-[11px] py-4 px-6 uppercase tracking-[0.22em] transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Abrir no Google Maps
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <dt className="text-[10px] font-black text-gray-500 uppercase tracking-[0.28em] mb-1">
        {label}
      </dt>
      <dd className="text-gray-200 text-sm leading-relaxed">{value}</dd>
    </>
  );

  return (
    <div className="border-b border-[#171717] pb-5">
      {href ? (
        <a
          href={href}
          className="block hover:text-[#F7941D] transition-colors"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
