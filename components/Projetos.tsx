export default function Projetos() {
  const projetos = [
    {
      titulo: "Projeto Alpha",
      descricao: "Uma aplicação de tarefas focada em produtividade e minimalismo.",
      tecnologias: ["Next.js", "TypeScript"],
    },
    {
      titulo: "Projeto Beta",
      descricao: "Dashboard financeiro com gráficos interativos e modo escuro nativo.",
      tecnologias: ["Tailwind CSS", "React"],
    },
    {
      titulo: "Projeto Gamma",
      descricao: "API de clima que consome dados em tempo real de serviços externos.",
      tecnologias: ["Node.js", "Fetch API"],
    }
  ];

  return (
    <section id="projetos" className="w-full max-w-4xl">
      <h2 className="text-2xl font-semibold mb-8 border-b border-zinc-800 pb-2">
        Projetos Selecionados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projetos.map((projeto, index) => (
          <div key={index} className="p-6 border border-zinc-800 rounded-xl hover:border-zinc-500 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <h3 className="text-xl font-bold mb-2 group-hover:text-zinc-400 transition-colors duration-300">
              {projeto.titulo}
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              {projeto.descricao}
            </p>
            <div className="flex gap-2">
              {projeto.tecnologias.map((tech) => (
                <span key={tech} className="text-xs bg-zinc-900 px-2 py-1 rounded text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}