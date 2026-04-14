const rows = [
  {
    day: "Segunda",
    short: "Seg",
    open: "05:30",
    close: "23:00",
    note: "",
  },
  {
    day: "Terça",
    short: "Ter",
    open: "05:30",
    close: "23:00",
    note: "",
  },
  {
    day: "Quarta",
    short: "Qua",
    open: "05:30",
    close: "23:00",
    note: "",
  },
  {
    day: "Quinta",
    short: "Qui",
    open: "05:30",
    close: "23:00",
    note: "",
  },
  {
    day: "Sexta",
    short: "Sex",
    open: "05:30",
    close: "23:00",
    note: "",
  },
  {
    day: "Sábado",
    short: "Sáb",
    open: "07:00",
    close: "17:00",
    note: "Aulas coletivas até 14h",
  },
  {
    day: "Domingo",
    short: "Dom",
    open: "08:00",
    close: "13:00",
    note: "Somente musculação",
  },
];

const aulas = [
  { nome: "Spinning", horarios: "07h · 12h · 19h" },
  { nome: "Funcional", horarios: "06h · 09h · 18h · 20h" },
  { nome: "Muay Thai", horarios: "08h · 19h · 21h" },
  { nome: "Jiu-Jitsu", horarios: "07h · 19h30 · 21h" },
  { nome: "Yoga", horarios: "07h30 · 09h · 18h30" },
  { nome: "Pilates", horarios: "09h · 10h · 18h · 19h" },
];

export default function Schedule() {
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
          {/* Tabela de funcionamento */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#F7941D]" />
              Academia
            </h3>
            <div className="border border-[#2a2a2a] overflow-hidden">
              {rows.map((row, i) => (
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
                      {row.open} – {row.close}
                    </span>
                    {row.note && (
                      <p className="text-gray-600 text-xs mt-0.5">{row.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grade de aulas coletivas */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#F7941D]" />
              Aulas Coletivas (Seg – Sáb)
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

            {/* Aviso */}
            <div className="mt-6 border-l-2 border-[#F7941D] pl-4">
              <p className="text-gray-500 text-xs leading-relaxed">
                Horários de aulas sujeitos a alteração. Confirme disponibilidade
                pelo WhatsApp ou na recepção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
