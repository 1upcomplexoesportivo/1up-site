import { getActivitiesSchedule, EvoActivitySchedule } from "@/app/lib/evo";

function formatTime(time: string): string {
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
  { nome: "HYROX",            horarios: "07h · 19h" },
  { nome: "Natação Infantil", horarios: "08h · 09h · 10h" },
  { nome: "Natação Adulto",   horarios: "06h · 07h · 18h · 19h" },
  { nome: "Hidroginástica",   horarios: "08h · 09h · 18h" },
  { nome: "Pilates",          horarios: "07h · 09h · 18h · 19h" },
];

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

function IconFor({ nome }: { nome: string }) {
  const n = nome.toLowerCase();
  const common = "w-4 h-4";
  if (n.includes("cross")) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 8h2v8H4zM18 8h2v8h-2zM7 10h2v4H7zM15 10h2v4h-2zM10 11h4v2h-4z" />
      </svg>
    );
  }
  if (n.includes("hyrox") || n.includes("funcional")) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 21h8M12 17v4M6 3h12v4a6 6 0 01-12 0V3zM6 5H3v2a3 3 0 003 3M18 5h3v2a3 3 0 01-3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (n.includes("nata")) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 16c1.5-1.5 3-1.5 4.5 0S9.5 17.5 11 16s3-1.5 4.5 0S18.5 17.5 20 16s2-1 2-1" />
        <path d="M2 20c1.5-1.5 3-1.5 4.5 0S9.5 21.5 11 20s3-1.5 4.5 0S18.5 21.5 20 20s2-1 2-1" />
        <circle cx="16" cy="7" r="2" />
        <path d="M5 13l5-3 3 2 4-1" />
      </svg>
    );
  }
  if (n.includes("hidro")) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c4 5 6 8 6 11a6 6 0 01-12 0c0-3 2-6 6-11z" />
      </svg>
    );
  }
  if (n.includes("pilates")) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <path d="M8 22l2-8 4 2 2 6M10 14l-2-4 4-3 4 3-2 4" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  );
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
    <section
      id="horarios"
      className="relative py-24 md:py-32 bg-[#0a0a0a] border-t border-[#171717]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
                05
              </span>
              <div className="w-10 h-0.5 bg-[#F7941D]" />
              <span className="text-[#F7941D] text-[10px] font-black tracking-[0.35em] uppercase">
                Horários
              </span>
            </div>
            <h2 className="font-display text-white text-5xl md:text-6xl lg:text-7xl leading-[0.88] tracking-tight">
              ENCAIXE A 1UP
              <br />
              NA <span className="text-[#F7941D]">SUA ROTINA.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Horários da academia e da grade de aulas coletivas. Sujeitos a
            ajustes — confirme com a recepção.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Funcionamento */}
          <div>
            <h3 className="font-display text-white text-2xl mb-6 flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#F7941D]" />
              Academia
            </h3>
            <div className="border border-[#262626]">
              {fallbackRows.map((row) => (
                <div
                  key={row.day}
                  className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-[#262626] last:border-0 hover:bg-[#171717] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#F7941D] font-black text-[10px] uppercase tracking-[0.25em] w-8">
                      {row.short}
                    </span>
                    <span className="text-gray-300 text-sm">
                      {row.day}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-bold text-sm tabular-nums">
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

          {/* Aulas coletivas */}
          <div>
            <h3 className="font-display text-white text-2xl mb-6 flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#F7941D]" />
              Aulas Coletivas
            </h3>
            <div className="border border-[#262626]">
              {aulas.map((aula) => (
                <div
                  key={aula.nome}
                  className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-[#262626] last:border-0 hover:bg-[#171717] transition-colors gap-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-[#F7941D] shrink-0">
                      <IconFor nome={aula.nome} />
                    </span>
                    <span className="text-white font-bold text-sm uppercase tracking-wide truncate">
                      {aula.nome}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm tabular-nums text-right">
                    {aula.horarios}
                  </span>
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
