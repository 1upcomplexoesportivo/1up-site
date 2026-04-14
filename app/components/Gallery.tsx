const items = [
  { label: "Musculação", bg: "bg-zinc-700", span: "col-span-2 row-span-2" },
  { label: "Spinning", bg: "bg-zinc-600", span: "" },
  { label: "Funcional", bg: "bg-zinc-800", span: "" },
  { label: "Vestiário", bg: "bg-zinc-700", span: "" },
  { label: "Recepção", bg: "bg-zinc-600", span: "col-span-2" },
  { label: "Yoga", bg: "bg-zinc-800", span: "" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Nossa Estrutura
          </span>
          <h2 className="text-4xl font-black text-zinc-900 mt-2">Galeria</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Conheça os espaços da 1UP Complexo Esportivo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[500px]">
          {items.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} ${item.span} rounded-2xl flex items-end p-4 relative overflow-hidden group cursor-pointer`}
            >
              {/* Overlay hover */}
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/20 transition-colors duration-300" />

              {/* Label */}
              <span className="relative z-10 text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">
                {item.label}
              </span>

              {/* Ícone central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white/20 group-hover:text-white/30 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Em breve mais fotos da nossa estrutura!
        </p>
      </div>
    </section>
  );
}
