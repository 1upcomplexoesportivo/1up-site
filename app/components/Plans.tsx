import { getMemberships, EvoMembership } from "@/app/lib/evo";
import { waLink } from "@/app/lib/contact";

interface PlanMeta {
  key: string;
  displayName: string;
  tag?: string;
  fallbackMonthly: number;
  fallbackTotal: number;
  fallbackDuration: number;
}

const PLAN_META: PlanMeta[] = [
  {
    key: "crossfit 3x semana anual (recorrente)",
    displayName: "CrossFit 3x / semana",
    tag: "Anual · recorrente",
    fallbackMonthly: 230,
    fallbackTotal: 2760,
    fallbackDuration: 12,
  },
  {
    key: "1up plus - anual (recorrente + renovação automatica)",
    displayName: "1UP Plus",
    tag: "Multimodalidade",
    fallbackMonthly: 450,
    fallbackTotal: 5400,
    fallbackDuration: 12,
  },
  {
    key: "crossfit ilimitado - anual (recorrente)",
    displayName: "CrossFit Ilimitado",
    tag: "Sem limite de aulas",
    fallbackMonthly: 280,
    fallbackTotal: 3360,
    fallbackDuration: 12,
  },
];

interface ResolvedPlan {
  id: number | string;
  displayName: string;
  tag?: string;
  monthly: number;
  total: number;
  duration: number;
}

function formatPrice(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function resolveMonthly(plan: EvoMembership): number {
  if (plan.duration > 1) return Math.round(plan.value / plan.duration);
  return plan.value;
}

export default async function Plans() {
  let apiPlans: EvoMembership[] = [];

  try {
    apiPlans = await getMemberships();
  } catch {
    // silent fallback
  }

  const plans: ResolvedPlan[] = PLAN_META.map((meta) => {
    const apiMatch = apiPlans.find(
      (p) => p?.name?.toLowerCase().trim() === meta.key
    );

    if (apiMatch) {
      return {
        id: apiMatch.id,
        displayName: meta.displayName,
        tag: meta.tag,
        monthly: resolveMonthly(apiMatch),
        total: apiMatch.value,
        duration: apiMatch.duration,
      };
    }

    return {
      id: meta.key,
      displayName: meta.displayName,
      tag: meta.tag,
      monthly: meta.fallbackMonthly,
      total: meta.fallbackTotal,
      duration: meta.fallbackDuration,
    };
  });

  return (
    <section
      id="planos"
      className="relative py-24 md:py-32 bg-[#0a0a0a] border-t border-[#171717]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho discreto */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
                06
              </span>
              <div className="w-10 h-0.5 bg-[#F7941D]" />
              <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
                Planos
              </span>
            </div>
            <h2 className="font-display text-white text-4xl md:text-5xl leading-[0.88] tracking-tight">
              PRIMEIRO UMA AULA.
              <br />
              <span className="text-[#F7941D]">DEPOIS O PLANO.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            A melhor forma de escolher é experimentando. Venha treinar com a
            gente — na recepção a gente conversa sobre o plano ideal pra você.
          </p>
        </div>

        {/* Grid de planos — cards iguais, sem destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {plans.map((plan) => (
            <div
              key={String(plan.id)}
              className="group border border-[#262626] hover:border-[#F7941D]/50 p-8 flex flex-col bg-[#0f0f0f] transition-colors duration-500"
            >
              {plan.tag && (
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-6">
                  {plan.tag}
                </span>
              )}

              <h3 className="font-display text-white text-3xl leading-none tracking-tight mb-6">
                {plan.displayName}
              </h3>

              <div className="flex items-end gap-1 mb-2">
                <span className="font-display text-[#F7941D] text-5xl leading-none tabular-nums">
                  {formatPrice(plan.monthly)}
                </span>
                <span className="text-gray-500 text-xs mb-2">/mês</span>
              </div>
              <p className="text-gray-500 text-xs tabular-nums">
                {formatPrice(plan.total)} em {plan.duration}x
              </p>
            </div>
          ))}
        </div>

        {/* CTA principal — conversa com a recepção */}
        <div className="mt-12 border border-[#262626] bg-[#0f0f0f] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-display text-white text-2xl md:text-3xl leading-tight">
              Quer saber qual plano combina com você?
            </p>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Agende uma aula experimental gratuita, conheça a estrutura e, com
              calma, a gente monta o plano certo na recepção.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={waLink("experimental")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[#F7941D] hover:bg-[#e0850f] text-black font-black text-xs py-4 px-6 uppercase tracking-[0.22em] transition-colors duration-300"
            >
              Aula experimental
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href={waLink("recepcao")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white/80 hover:text-white font-black text-xs py-4 px-6 uppercase tracking-[0.22em] border border-[#262626] hover:border-white transition-colors duration-300"
            >
              Falar com recepção
            </a>
          </div>
        </div>

        <p className="text-center text-gray-700 text-xs mt-6">
          Preços sujeitos a alteração. Todos os planos incluem avaliação inicial.
        </p>
      </div>
    </section>
  );
}
