"use client";

import { motion } from "framer-motion";
import {
  BatteryCharging,
  Building2,
  Dumbbell,
  HeartHandshake,
  LayoutGrid,
  MapPin,
  ShowerHead,
  Users,
  type LucideIcon,
} from "lucide-react";

type Differentiator = {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
};

const DIFFERENTIATORS = [
  {
    icon: Dumbbell,
    title: "Equipamento que entrega",
    description:
      "Box com rigs e ergômetros importados, piscina aquecida e salinizada, estúdio de pilates com aparelhos completos.",
  },
  {
    icon: Users,
    title: "Dois a três professores por aula",
    description:
      "No CrossFit, sempre mais de um coach em sala. Iniciante recebe atenção, avançado é desafiado. Ninguém treina sozinho.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento que chama pelo nome",
    description:
      "Da recepção ao fim da aula, o aluno é reconhecido. Experiência consistente, sem script engessado.",
  },
  {
    icon: MapPin,
    title: "No coração de Capim Macio",
    description:
      "Zona sul de Natal, perto de onde você mora, trabalha e faz a rotina. Rota direta pelas principais vias da cidade.",
  },
  {
    icon: LayoutGrid,
    title: "Seis modalidades, um plano",
    description:
      "Plano CrossFit abre acesso a Gymnastics, Barbell, Core & Machine, Suadeira, Fun Friday e UP-X. Flexibilidade de rotina.",
  },
  {
    icon: Building2,
    title: "Tudo no mesmo complexo",
    description:
      "Lanchonete, loja fitness e barbearia no próprio endereço. Resolve treino e rotina em uma parada.",
  },
  {
    icon: ShowerHead,
    title: "Vestiários pensados pro pós-treino",
    description:
      "Ar condicionado, chuveiro aquecido, toalha individual, shampoo, condicionador e sabonete inclusos. Saia do treino pronto pro resto do dia.",
  },
  {
    icon: BatteryCharging,
    title: "Estacionamento privativo, carregador elétrico",
    description:
      "Vagas dentro do complexo e carregador elétrico exclusivo pra alunos. Zero preocupação com o carro enquanto treina.",
  },
] as const satisfies ReadonlyArray<Differentiator>;

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.06 },
  }),
};

export default function StructureDifferentiators() {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-0.5 bg-[#F7941D]" />
        <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
          Além dos espaços
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#262626] border border-[#262626]">
        {DIFFERENTIATORS.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group bg-[#0a0a0a] p-6 md:p-8 flex flex-col gap-5"
            >
              <Icon
                className="text-[#F7941D] size-7 transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-display text-white text-2xl md:text-3xl leading-none tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
