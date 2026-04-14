const items = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Musculação",
    description:
      "Equipamentos de última geração para um treino completo, com área de pesos livres, máquinas e cardio.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Artes Marciais",
    description:
      "Muay Thai, Jiu-Jitsu, Boxe e MMA com instrutores experientes. Para todos os níveis, do iniciante ao avançado.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Esportes Coletivos",
    description:
      "Quadra poliesportiva para futebol society, basquete, vôlei e muito mais. Aluguel de quadra disponível.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Acompanhamento Profissional",
    description:
      "Equipe de personal trainers, nutricionistas e fisioterapeutas para potencializar seus resultados.",
  },
];

export default function Diferenciais() {
  return (
    <section id="modalidades" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#F7941D]" />
              <span className="text-[#F7941D] text-xs font-black tracking-[0.3em] uppercase">
                Nossos Diferenciais
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
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-[#111111] border border-[#2a2a2a] hover:border-[#F7941D] p-8 transition-all duration-300 relative overflow-hidden"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
