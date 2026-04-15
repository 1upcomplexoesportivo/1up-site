import { getActivitiesSchedule, EvoActivitySchedule } from "@/app/lib/evo";

const weekDayMap: Record<string, string> = {
  Monday:    "Seg",
  Tuesday:   "Ter",
  Wednesday: "Qua",
  Thursday:  "Qui",
  Friday:    "Sex",
  Saturday:  "Sáb",
  Sunday:    "Dom",
  // variantes em português
  "Segunda":  "Seg",
  "Terça":    "Ter",
  "Quarta":   "Qua",
  "Quinta":   "Qui",
  "Sexta":    "Sex",
  "Sábado":   "Sáb",
  "Domingo":  "Dom",
  // numérico (0=Dom, 1=Seg, ...)
  "0": "Dom", "1": "Seg", "2": "Ter", "3": "Qua",
  "4": "Qui", "5": "Sex", "6": "Sáb",
};

function formatDay(day: string | number): string {
  return weekDayMap[String(day)] ?? String(day);
}

function formatTime(time: string): string {
  // Garante formato hh:mm (remove segundos se vier hh:mm:ss)
  return time?.slice(0, 5) ?? "";
}

// Fallback estático
const fallbackRows = [
  { day: "Segunda", short: "Seg", open: "05:00", close: "21:00", note: "" },
  { day: "Terça",   short: "Ter", open: "05:00", close: "21:00", note: "" },
  { day: "Quarta",  short: "Qua", open: "05:00", close: "21:00", note: "" },
  { day: "Quinta",  short: "Qui", open: "05:00", close: "21:00", note: "" },
  { day: "Sexta",   short: "Sex", open: "05:00", close: "21:00", note: "" },
  { day: "Sábado",  short: "Sáb", open: "08:00", close: "12:00", note: "" },
  { day: "Domingo", short: "Dom", open: "—",     close: "—",     note: "Fechado" },
];

const fallbackAulas = [
  { nome: "CrossFit",         horarios: "06h · 09h · 18h · 20h" },
  { nome: "Hyrox",            horarios: "07h · 19h" },
  { nome: "Natação Infantil", horarios: "08h · 09h · 10h" },
  { nome: "Natação Adulto",   horarios: "06h · 07h · 18h · 19h" },
  { nome: "Hidroginástica",   horarios: "08h · 09h · 18h" },
  { nome: "Pilates",          horarios: "07h · 09h · 18h · 19h" },
];

// Agrupa os horários da EVO por modalidade
function groupByActivity(
  schedules: EvoActivitySchedule[]
): { nome: string; horarios: string }[] {
  const map = new Map<string, string[]>();

  for (const s of schedules) {
    const name = s.name ?? "Atividade";
    const time = formatTime(s.startTime);
    if (!map.has(name)) map.set(name, []);
    if (time) map.get(name)!.push(time);
  }

  return Array.from(map.entries()).map(([nome, times]) => ({
    nome,
    horarios: [...new Set(times)].join(" · "),
  }));
}

export default async function Schedule() {
  let aulas = fallbackAulas;

  try {
    const data = await getActivitiesSchedule();
    if (data.length > 0) {
      aulas = groupByActivity(data);
    }
  } catch (error) {
    console.error("[Schedule] Usando fallback estático:", error);
  }

  return (
    <section id="horarios" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#F7941D]" />
            <span className="text-[#F7941D] text-xs font-black tracking-[0.3em] uppercase">
              Grade Horária
            </span>
            <div className="w-8 h-0.5 bg-[#F7941D]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            HORÁRIOS DE <span className="text-[#F7941D]">FUNCIONAMENTO</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm">
            Organize sua semana e encontre o melhor horário para treinar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Horários de funcionamento (estático) */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#F7941D]" />
              Academia
            </h3>
            <div className="border border-[#2a2a2a] overflow-hidden">
              {fallbackRows.map((row, i) => (
                <div
                  key={row.day}
                  className={`flex items-center justify-between px-6 py-4 border-b border-[#2a2a2a] last:border-0 ${
                    i % 2 === 0 ? "bg-[#111111]" : "bg-[#1a1a1a]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#F7941D] font-black text-xs uppercase tracking-wider w-8">
                      {row.short}
                    </span>
                    <span className="text-gray-300 text-sm font-medium">
                      {row.day}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-bold text-sm">
                      {row.open !== "—" ? `${row.open} – ${row.close}` : "—"}
                    </span>
                    {row.note && (
                      <p className="text-gray-600 text-xs mt-0.5">{row.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Aulas coletivas (dinâmico via EVO API) */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#F7941D]" />
              Aulas Coletivas
            </h3>
            <div className="border border-[#2a2a2a] overflow-hidden">
              {aulas.map((aula, i) => (
                <div
                  key={aula.nome}
                  className={`flex items-center justify-between px-6 py-4 border-b border-[#2a2a2a] last:border-0 ${
                    i % 2 === 0 ? "bg-[#111111]" : "bg-[#1a1a1a]"
                  }`}
                >
                  <span className="text-white font-bold text-sm uppercase tracking-wide">
                    {aula.nome}
                  </span>
                  <span className="text-gray-400 text-sm">{aula.horarios}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-l-2 border-[#F7941D] pl-4">
              <p className="text-gray-500 text-xs leading-relaxed">
                Horários sujeitos a alteração. Confirme disponibilidade pelo
                WhatsApp ou na recepção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
