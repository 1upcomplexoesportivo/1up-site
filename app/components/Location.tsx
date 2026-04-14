export default function Location() {
  return (
    <section id="localizacao" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Onde Estamos
          </span>
          <h2 className="text-4xl font-black text-zinc-900 mt-2">
            Localização
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Venha nos visitar! Estamos esperando por você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-zinc-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-orange-500 mb-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-zinc-900 mb-1">Endereço</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Rua Exemplo, 123 – Bairro<br />
                São Paulo – SP<br />
                CEP: 00000-000
              </p>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-orange-500 mb-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-zinc-900 mb-1">Como Chegar</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Próximo à estação de metrô.<br />
                Estacionamento gratuito<br />
                para alunos.
              </p>
            </div>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3 px-6 rounded-full transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Abrir no Google Maps
            </a>
          </div>

          {/* Mapa embed */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-200 h-96 lg:h-auto bg-zinc-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzcnNTkuOSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "384px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização 1UP Complexo Esportivo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
