import { Github, ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const meusProjetos = [
    {
      titulo: "Projeto 1",
      descricao: "Este portfólio que você está navegando, focado em imersão de RPG e clean code.",
      tecnologias: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/FilippaBittencourt/meu-portfolio",
      deploy: "https://filippa.dev",
    },
    {
      titulo: "Projeto 2",
      descricao: "Uma breve descrição do impacto e do problema que esse projeto resolve no mundo real.",
      tecnologias: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/FilippaBittencourt/projeto-2",
      deploy: "#",
    },
  ];

  return (
    <section id="projects" className="w-full">
      <span className="text-purple-500 font-mono text-base mb-1 block">
        // PORTFÓLIO
      </span>      

      <h2 className="text-3xl font-bold mb-12 tracking-tight text-zinc-100">
        Meus Projetos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {meusProjetos.map((projeto, index) => (
          <div 
            key={index} 
            className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-zinc-800/50 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors">
                  <Code2 size={24} />
                </div>
                <div className="flex gap-3">
                  <a 
                    href={projeto.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-zinc-500 hover:text-zinc-100 transition-colors"
                    title="Ver código no GitHub"
                  >
                    <Github size={20} />
                  </a>
                  {projeto.deploy !== "#" && (
                    <a 
                      href={projeto.deploy} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-zinc-500 hover:text-zinc-100 transition-colors"
                      title="Ver demonstração"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-purple-400 transition-colors">
                {projeto.titulo}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {projeto.descricao}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {projeto.tecnologias.map((tech) => (
                <span 
                  key={tech} 
                  className="text-[10px] uppercase tracking-widest font-bold text-zinc-500"
                >
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