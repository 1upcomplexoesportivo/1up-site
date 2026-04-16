"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.65, ease: EASE, delay },
});

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#F7941D]" />
            <span className="text-[#F7941D] text-xs font-black tracking-[0.3em] uppercase">
              Fale Conosco
            </span>
            <div className="w-8 h-0.5 bg-[#F7941D]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            ENTRE EM <span className="text-[#F7941D]">CONTATO</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm">
            Tire suas dúvidas, agende uma visita ou comece sua matrícula agora.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Coluna esquerda — info + WhatsApp */}
          <motion.div {...fadeUp(0.1)} className="flex flex-col gap-6">
            {/* WhatsApp CTA */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8 flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white mb-2">
                  FALE PELO WHATSAPP
                </h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  Resposta rápida! Nossa equipe está pronta para tirar suas
                  dúvidas e te ajudar a começar.
                </p>
              </div>

              <a
                href="https://wa.me/5584981827107?text=Ol%C3%A1!%20Tenho%20interesse%20em%20conhecer%20a%201UP%20Complexo%20Esportivo."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1db954] text-white font-black text-sm py-4 px-8 uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                CHAMAR NO WHATSAPP
              </a>
            </div>

            {/* Informações */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Endereço",
                  value: "R. Dr. Orlando de Azevedo, 1979\nCapim Macio, Natal – RN, 59082-050",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Telefone",
                  value: "(84) 98182-7107",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "E-mail",
                  value: "contato@siga1up.com.br",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Funcionamento",
                  value: "Seg–Sex: 05h00–21h00\nSáb: 08h00–12h00 | Dom: Fechado",
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] p-5 flex items-start gap-4"
                >
                  <div className="text-[#F7941D] mt-0.5 shrink-0">{info.icon}</div>
                  <div>
                    <p className="text-gray-600 text-xs font-bold uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Coluna direita — Mapa */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-4">
            <div className="border border-[#2a2a2a] overflow-hidden flex-1 min-h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589.9945705807577!2d-35.20229511301461!3d-5.856387001847729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff1c8b4af819%3A0x1616fa5af85429fd!2s1UP%20Complexo%20Esportivo!5e0!3m2!1spt-BR!2sbr!4v1776198426389!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px", display: "block" }}
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
              className="border border-[#2a2a2a] hover:border-[#F7941D] text-gray-400 hover:text-[#F7941D] font-bold text-xs py-3 px-6 uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              ABRIR NO GOOGLE MAPS
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
