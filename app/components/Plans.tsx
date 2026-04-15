import { getMemberships, EvoMembership } from "@/app/lib/evo";

const WA_LINK = "https://wa.me/5584981827107";

// Metadados fixos por plano: badge, tag, atividades e valores de fallback
interface PlanMeta {
  key: string; // nome em lowercase para matching com a API
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
    key: "1up plus - anual (recorrente + renovação automatica)",
    displayName: "1UP PLUS",
    badge: "MAIS VANTAJOSO",
    tag: "Recorrente",
    activities: [
      "1UP RUN", "1UP VERÃO", "AULÃO", "AULÃO BENEFICENTE", "AULÃO DIA DOS PAIS",
      "AULÃO FERIADO", "CORE AND MACHINE", "CROSSFIT", "DOMINGUEIRA", "ENDURANCE DAY",
      "FUN FRIDAY", "MURPH", "NADO LIVRE", "SUADEIRA", "UP BARBELL",
      "UP GYMNASTICS", "UP MOBILITY", "UP-X",
    ],
    fallbackMonthly: 450,
    fallbackTotal: 5400,
    fallbackDuration: 12,
  },
  {
    key: "crossfit ilimitado - anual (recorrente)",
    displayName: "CROSSFIT ILIMITADO",
    badge: "MAIS VANTAJOSO",
    tag: "Recorrente",
    fallbackMonthly: 280,
    fallbackTotal: 3360,
    fallbackDuration: 12,
  },
  {
    key: "crossfit 3x semana anual (recorrente)",
    displayName: "CROSSFIT 3X SEMANA",
    tag: "Recorrente",
    fallbackMonthly: 230,
    fallbackTotal: 2760,
    fallbackDuration: 12,
  },
];

interface ResolvedPlan {
  id: number | string;
  apiName: string;
  displayName: string;
  badge?: string;
  tag?: string;
  activities?: string[];
  monthly: number;
  total: number;
  duration: number;
}

function resolveMonthly(plan: EvoMembership): number {
  if (plan.duration > 1) return Math.round(plan.value / plan.duration);
  return plan.value;
}

function formatPrice(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function PlanCard({
  plan,
  highlight,
}: {
  plan: ResolvedPlan;
  highlight: boolean;
}) {
  const waLink = `${WA_LINK}?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20${encodeURIComponent(plan.apiName)}.`;

  return (
    <div
      className={`relative flex flex-col border transition-all duration-300 ${
        highlight
          ? "bg-[#F7941D] border-[#F7941D] text-black scale-[1.03]"
          : "bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#F7941D] text-white"
      }`}
    >
      {/* Badge acima do card */}
      {plan.badge && (
        <div
          className={`text-center text-xs font-black py-2 px-4 uppercase tracking-widest ${
            highlight ? "bg-black text-[#F7941D]" : "bg-[#F7941D] text-black"
          }`}
        >
          {plan.badge}
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        {/* Tag */}
        {plan.tag && (
          <span
            className={`self-start text-[10px] font-black uppercase tracking-widest px-2 py-0.5 mb-4 ${
              highlight
                ? "bg-black/20 text-black"
                : "bg-[#F7941D]/10 text-[#F7941D]"
            }`}
          >
            {plan.tag}
          </span>
        )}

        {/* Nome e preço */}
        <div className="mb-6">
          <h3
            className={`text-xs font-black tracking-[0.3em] uppercase mb-4 ${
              highlight ? "text-black/70" : "text-[#F7941D]"
            }`}
          >
            {plan.displayName}
          </h3>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-black leading-none">
              {formatPrice(plan.monthly)}
            </span>
            <span
              className={`text-sm mb-1 ${
                highlight ? "text-black/60" : "text-gray-500"
              }`}
            >
              /mês
            </span>
          </div>
          <p
            className={`text-xs mt-1 ${
              highlight ? "text-black/50" : "text-gray-600"
            }`}
          >
            {formatPrice(plan.total)} em {plan.duration}x
          </p>
        </div>

        {/* Atividades incluídas */}
        {plan.activities && plan.activities.length > 0 && (
          <div className="mb-6">
            <p
              className={`text-[10px] font-black uppercase tracking-widest mb-2 ${
                highlight ? "text-black/60" : "text-gray-500"
              }`}
            >
              Ilimitado:
            </p>
            <div className="flex flex-wrap gap-1">
              {plan.activities.map((activity) => (
                <span
                  key={activity}
                  className={`text-[10px] font-bold px-1.5 py-0.5 ${
                    highlight
                      ? "bg-black/15 text-black"
                      : "bg-[#2a2a2a] text-gray-300"
                  }`}
                >
                  {activity}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Divisor */}
        <div
          className={`h-px mt-auto mb-6 ${
            highlight ? "bg-black/20" : "bg-[#2a2a2a]"
          }`}
        />

        {/* CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-center font-black text-sm py-4 px-6 uppercase tracking-widest transition-colors ${
            highlight
              ? "bg-black text-white hover:bg-[#111111]"
              : "bg-[#F7941D] text-black hover:bg-[#e0850f]"
          }`}
        >
          QUERO ESSE PLANO
        </a>
      </div>
    </div>
  );
}

export default async function Plans() {
  let apiPlans: EvoMembership[] = [];

  try {
    apiPlans = await getMemberships();
    console.log("[Plans] Total retornado pela API:", apiPlans.length);
    apiPlans.forEach((p, i) => console.log(`[Plans] ${i}: id=${p.id} "${p.name}"`));

    // Busca direta pelo ID 146
    try {
      const token = process.env.EVO_API_TOKEN ?? "";
      const credentials = Buffer.from(`1upcomplexoesportivo:${token}`).toString("base64");
      const r = await fetch(`${process.env.EVO_API_URL}/api/v1/membership/146`, {
        headers: { Authorization: `Basic ${credentials}`, "Content-Type": "application/json" },
        cache: "no-store",
      });
      console.log("[Plans] Fetch direto ID 146 — status:", r.status);
      if (r.ok) console.log("[Plans] ID 146 dados:", JSON.stringify(await r.json()));
    } catch (e) {
      console.log("[Plans] Fetch direto ID 146 — erro:", e);
    }
  } catch (error) {
    console.error("[Plans] Erro ao buscar planos da API EVO:", error);
  }

  // Mescla dados da API com metadados fixos.
  // Regra: API tem prioridade para valores/duração/grupos de atividade.
  // Fallback completo apenas para 1UP PLUS enquanto não retorna da API.
  const plans: ResolvedPlan[] = PLAN_META.map((meta) => {
    const apiMatch = apiPlans.find(
      (p) => p?.name?.toLowerCase().trim() === meta.key
    );

    if (apiMatch) {
      const monthly = resolveMonthly(apiMatch);
      // Usa atividades detalhadas do meta se existirem (1UP PLUS);
      // caso contrário usa os grupos de atividade retornados pela API
      const activities =
        meta.activities ??
        (apiMatch.activityGroups.length > 0 ? apiMatch.activityGroups : undefined);
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

    // Fallback completo com dados fixos (usado enquanto 1UP PLUS não retorna da API)
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

        {/* Cards — índice 1 (CROSSFIT ILIMITADO) é o destaque laranja */}
        <div className="grid gap-6 items-stretch grid-cols-1 md:grid-cols-3">
          {plans.map((plan, i) => (
            <PlanCard key={String(plan.id)} plan={plan} highlight={i === 1} />
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          * Preços sujeitos a alteração. Entre em contato para condições especiais.
        </p>

        {/* Outros planos */}
        <div className="mt-12 bg-[#0d0d0d] border border-[#2a2a2a] p-8 md:p-10 text-center">
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
            className="inline-block bg-[#F7941D] text-black font-black text-sm py-4 px-8 uppercase tracking-widest hover:bg-[#e0850f] transition-colors"
          >
            FALAR COM A RECEPÇÃO
          </a>
        </div>
      </div>
    </section>
  );
}
