// função principal que o Next.js usa para exibir o conteúdo da página inicial
export default function Home() {
  // Lista de projetos
  const projetos = [
    {
      titulo: "Projeto Alpha",
      descricao: "Uma aplicação de tarefas focada em produtividade e minimalismo.",
      tecnologias: ["Next.js", "TypeScript"],
      link: "#"
    },
    {
      titulo: "Projeto Beta",
      descricao: "Dashboard financeiro com gráficos interativos e modo escuro nativo.",
      tecnologias: ["Tailwind CSS", "React"],
      link: "#"
    },
    {
      titulo: "Projeto Gamma",
      descricao: "API de clima que consome dados em tempo real de serviços externos.",
      tecnologias: ["Node.js", "Fetch API"],
      link: "#"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black text-zinc-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-6 text-center mb-20">
        <h1 className="text-5xl font-bold tracking-tight">Filippa</h1>
        <p className="max-w-[600px] text-lg text-zinc-400">
          Criando experiências digitais com código e design.
        </p>
        <div className="flex gap-4 mt-4">
          <a href="#projetos" className="px-6 py-3 bg-zinc-50 text-black rounded-full font-medium hover:bg-zinc-200 transition-all duration-300">
            Ver Projetos
          </a>
          <a href="https://github.com/FilippaBittencourt" target="_blank" className="px-6 py-3 border border-zinc-700 rounded-full font-medium hover:bg-zinc-900 transition-all duration-300">
            GitHub
          </a>
        </div>
      </section>

      {/* Seção de Projetos Dinâmica */}
      <section id="projetos" className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-8 border-b border-zinc-800 pb-2">
          Projetos Selecionados
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projetos.map((projeto, index) => (
            /* Adicionado: transition-all, duration-300 e o efeito de subir (hover:-translate-y-1) */
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

      {/* Seção Sobre Mim */}
      <section id="sobre" className="w-full max-w-4xl mt-24 mb-20">
        <h2 className="text-2xl font-semibold mb-8 border-b border-zinc-800 pb-2">
          Sobre
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-zinc-400 leading-relaxed space-y-4">
            <p>
              Sou uma desenvolvedora apaixonada por transformar ideias em realidade através de interfaces limpas e funcionais. 
            </p>
            <p>
              Atualmente, estou focada em aprimorar meus conhecimentos em <strong>Next.js</strong> e <strong>Tailwind CSS</strong>, buscando sempre escrever um código legível e eficiente.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">
              Tecnologias
            </h3>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"].map((skill) => (
                <span key={skill} className="px-3 py-1 border border-zinc-800 rounded-md text-sm text-zinc-300 hover:border-zinc-500 transition-colors duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé / Footer */}
      <footer className="w-full max-w-4xl border-t border-zinc-800 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 text-sm">
          © 2026 Filippa. Construído com Next.js.
        </p>
        
        <div className="flex gap-6 text-sm font-medium text-zinc-400">
          <a href="mailto:seuemail@exemplo.com" className="hover:text-zinc-50 transition-colors duration-300">E-mail</a>
          <a href="https://linkedin.com/in/seuusuario" target="_blank" className="hover:text-zinc-50 transition-colors duration-300">LinkedIn</a>
          <a href="https://github.com/FilippaBittencourt" target="_blank" className="hover:text-zinc-50 transition-colors duration-300">GitHub</a>
        </div>
      </footer>
    </main>
  );
}