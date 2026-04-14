export default function Hero() {
  return (
    <section
      id="sobre"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]"
    >
      {/* Fundo com gradiente diagonal */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111]" />

      {/* Elemento geométrico laranja — canto direito */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-10"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, #F7941D 40%, #F7941D 60%, transparent 60%)",
        }}
      />

      {/* Barra laranja lateral */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F7941D]" />

      {/* Brilho laranja difuso */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#F7941D]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32 lg:py-0">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#F7941D]" />
            <span className="text-[#F7941D] text-xs font-black tracking-[0.3em] uppercase">
              Natal / RN
            </span>
          </div>

          {/* Título */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-white mb-6">
            ELEVE
            <br />
            SEU{" "}
            <span className="text-[#F7941D]">NÍVEL</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
            Complexo esportivo completo em Natal/RN. Estrutura profissional,
            equipe qualificada e o ambiente ideal para você superar seus limites.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#modalidades"
              className="bg-[#F7941D] hover:bg-[#e0850f] text-black font-black text-sm px-8 py-4 uppercase tracking-widest transition-colors"
            >
              CONHEÇA A 1UP
            </a>
            <a
              href="#planos"
              className="border border-[#F7941D] text-[#F7941D] hover:bg-[#F7941D] hover:text-black font-black text-sm px-8 py-4 uppercase tracking-widest transition-colors"
            >
              VER PLANOS
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-12">
            {[
              { value: "500+", label: "Alunos Ativos" },
              { value: "10+", label: "Modalidades" },
              { value: "5★", label: "Avaliação Google" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-black text-[#F7941D]">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs uppercase tracking-widest">Role</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
