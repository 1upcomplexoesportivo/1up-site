const plans = [
  {
    name: "BÁSICO",
    price: "R$ 89",
    period: "/mês",
    description: "Perfeito para quem está começando",
    features: [
      "Acesso à musculação",
      "Vestiário completo",
      "Avaliação física inicial",
      "Horário livre",
      "Estacionamento gratuito",
    ],
    highlight: false,
    cta: "COMEÇAR AGORA",
  },
  {
    name: "INTERMEDIÁRIO",
    price: "R$ 129",
    period: "/mês",
    description: "O plano mais completo para sua evolução",
    features: [
      "Tudo do Básico",
      "Aulas coletivas ilimitadas",
      "Acompanhamento de treino",
      "Avaliação física mensal",
      "Acesso à quadra esportiva",
      "App de treinos 1UP",
    ],
    highlight: true,
    cta: "QUERO ESTE PLANO",
  },
  {
    name: "FULL",
    price: "R$ 159",
    period: "/mês",
    description: "Experiência premium sem limites",
    features: [
      "Tudo do Intermediário",
      "Personal trainer 2x/semana",
      "Plano nutricional",
      "Acesso às artes marciais",
      "Prioridade no agendamento",
      "Suporte prioritário",
    ],
    highlight: false,
    cta: "SER FULL",
  },
];

export default function Plans() {
  return (
    <section id="planos" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#F7941D]" />
            <span className="text-[#F7941D] text-xs font-black tracking-[0.3em] uppercase">
              Planos e Preços
            </span>
            <div className="w-8 h-0.5 bg-[#F7941D]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            ESCOLHA SEU <span className="text-[#F7941D]">PLANO</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm">
            Sem taxas de adesão. Cancele quando quiser. Comece agora e
            transforme sua vida.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 border transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#F7941D] border-[#F7941D] text-black scale-[1.03]"
                  : "bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#F7941D] text-white"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-[#F7941D] text-xs font-black px-5 py-1.5 uppercase tracking-widest">
                  MAIS POPULAR
                </div>
              )}

              {/* Nome e preço */}
              <div className="mb-8">
                <h3
                  className={`text-xs font-black tracking-[0.3em] uppercase mb-4 ${
                    plan.highlight ? "text-black/70" : "text-[#F7941D]"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black leading-none">
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm mb-1 ${
                      plan.highlight ? "text-black/60" : "text-gray-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-xs mt-2 ${
                    plan.highlight ? "text-black/60" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Divisor */}
              <div
                className={`h-px mb-8 ${
                  plan.highlight ? "bg-black/20" : "bg-[#2a2a2a]"
                }`}
              />

              {/* Features */}
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.highlight ? "text-black" : "text-[#F7941D]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={plan.highlight ? "text-black/80" : "text-gray-300"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contato"
                className={`block text-center font-black text-sm py-4 px-6 uppercase tracking-widest transition-colors ${
                  plan.highlight
                    ? "bg-black text-white hover:bg-[#111111]"
                    : "bg-[#F7941D] text-black hover:bg-[#e0850f]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          * Preços sujeitos a alteração. Entre em contato para condições especiais.
        </p>
      </div>
    </section>
  );
}
