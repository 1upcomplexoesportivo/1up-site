import { getMemberships, EvoMembership } from "@/app/lib/evo";
import PlansGrid, { ResolvedPlan } from "@/app/components/PlansGrid";
import FadeInSection from "@/app/components/FadeInSection";

const WA_LINK = "https://wa.me/5584981827107";

interface PlanMeta {
  key: string;
  displayName: string;
  badge?: string;
  tag?: string;
  activities?: string[];
  fallbackMonthly: number;
  fallbackTotal: number;
  fallbackDuration: number;
}

const PLAN_META: PlanMeta[] = [
  {
    key: "crossfit 3x semana anual (recorrente)",
    displayName: "CROSSFIT 3X SEMANA",
    tag: "Recorrente",
    fallbackMonthly: 230,
    fallbackTotal: 2760,
    fallbackDuration: 12,
  },
  {
    key: "1up plus - anual (recorrente + renovação automatica)",
    displayName: "1UP PLUS",
    badge: "MAIS VANTAJOSO",
    tag: "Recorrente",
    fallbackMonthly: 450,
    fallbackTotal: 5400,
    fallbackDuration: 12,
  },
  {
    key: "crossfit ilimitado - anual (recorrente)",
    displayName: "CROSSFIT ILIMITADO",
    tag: "Recorrente",
    fallbackMonthly: 280,
    fallbackTotal: 3360,
    fallbackDuration: 12,
  },
];

function resolveMonthly(plan: EvoMembership): number {
  if (plan.duration > 1) return Math.round(plan.value / plan.duration);
  return plan.value;
}

export default async function Plans() {
  let apiPlans: EvoMembership[] = [];

  try {
    apiPlans = await getMemberships();
  } catch {
    // Falha silenciosa: todos os planos usarão os dados de fallback
  }

  const plans: ResolvedPlan[] = PLAN_META.map((meta) => {
    const apiMatch = apiPlans.find(
      (p) => p?.name?.toLowerCase().trim() === meta.key
    );

    if (apiMatch) {
      const monthly = resolveMonthly(apiMatch);
      const activities =
        apiMatch.activityGroups.length > 0
          ? apiMatch.activityGroups
          : meta.activities;
      return {
        id: apiMatch.id,
        apiName: apiMatch.name,
        displayName: meta.displayName,
        badge: meta.badge,
        tag: meta.tag,
        activities,
        monthly,
        total: apiMatch.value,
        duration: apiMatch.duration,
      };
    }

    return {
      id: meta.key,
      apiName: meta.key,
      displayName: meta.displayName,
      badge: meta.badge,
      tag: meta.tag,
      activities: meta.activities,
      monthly: meta.fallbackMonthly,
      total: meta.fallbackTotal,
      duration: meta.fallbackDuration,
    };
  });

  return (
    <section id="planos" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <FadeInSection className="text-center mb-16">
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
        </FadeInSection>

        {/* Cards */}
        <PlansGrid plans={plans} />

        <FadeInSection delay={0.3}>
          <p className="text-center text-gray-600 text-xs mt-8">
            * Preços sujeitos a alteração. Entre em contato para condições especiais.
          </p>
        </FadeInSection>

        {/* Outros planos */}
        <FadeInSection delay={0.15} className="mt-12">
          <div className="bg-[#0d0d0d] border border-[#2a2a2a] p-8 md:p-10 text-center">
            <p className="text-white font-bold text-lg md:text-xl">
              Temos outros planos disponíveis, incluindo{" "}
              <span className="text-[#F7941D]">Natação, Hidroginástica e Pilates.</span>
            </p>
            <p className="text-gray-400 text-sm mt-2 mb-6">
              Entre em contato com nossa recepção para conhecer todas as opções.
            </p>
            <a
              href={`${WA_LINK}?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20os%20planos%20de%20Nata%C3%A7%C3%A3o%2C%20Hidrogin%C3%A1stica%20e%20Pilates.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F7941D] text-black font-black text-sm py-4 px-8 uppercase tracking-widest hover:bg-[#e0850f] transition-colors duration-300"
            >
              FALAR COM A RECEPÇÃO
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
