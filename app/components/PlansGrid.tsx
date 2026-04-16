"use client";

import { motion } from "framer-motion";

const WA_LINK = "https://wa.me/5584981827107";

export interface ResolvedPlan {
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
      className={`relative flex flex-col border h-full ${
        highlight
          ? "bg-[#F7941D] border-[#F7941D] text-black"
          : "bg-[#1a1a1a] border-[#2a2a2a] text-white"
      }`}
    >
      {/* Badge acima do card */}
      {plan.badge && (
        <div
          className={`text-center text-xs font-black py-2 px-4 uppercase tracking-widest ${
            highlight ? "bg-black text-white" : "bg-[#F7941D] text-black"
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
                ? "bg-black text-white"
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
                highlight ? "text-black" : "text-gray-500"
              }`}
            >
              {/3[xX]/.test(plan.displayName) ? "3x por semana:" : "Ilimitado:"}
            </p>
            <div className="flex flex-wrap gap-1">
              {plan.activities.map((activity) => (
                <span
                  key={activity}
                  className={`text-[10px] font-bold px-1.5 py-0.5 ${
                    highlight
                      ? "bg-black text-white"
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
          className={`block text-center font-black text-sm py-4 px-6 uppercase tracking-widest transition-colors duration-300 ${
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PlansGrid({ plans }: { plans: ResolvedPlan[] }) {
  return (
    <motion.div
      className="grid gap-6 items-stretch grid-cols-1 md:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {plans.map((plan, i) => {
        const highlight = i === 1;
        return (
          <motion.div
            key={String(plan.id)}
            variants={cardVariants}
            whileHover={
              highlight
                ? {}
                : {
                    scale: 1.02,
                    boxShadow: "0 0 28px rgba(247,148,29,0.18)",
                    transition: { duration: 0.25 },
                  }
            }
            className={highlight ? "scale-[1.03]" : ""}
          >
            <PlanCard plan={plan} highlight={highlight} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
