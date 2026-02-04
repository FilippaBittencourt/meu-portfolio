"use client";

import { Github, ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const meusProjetos = [
    {
      titulo: "Playbook Polar",
      imagem: "/project-1.png",
      descricao: "Hub estratégico desenvolvido para centralizar informações e otimizar processos do time comercial da Polar.",
      tecnologias: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "postgreSQL", "API REST"],
      github: "https://github.com/barbaracatucci/Playbook_Polar_2025",
      deploy: "#",
    },
    {
      titulo: "Cine Limon",
      imagem: "/project-2.png", 
      descricao: "Aplicação de gerenciamento de filmes que permite o controle total sobre o catálogo.",
      tecnologias: ["TypeScript", "JavaScript"],
      github: "https://github.com/RamonPeixe/cine-limon/commits/main/",
      deploy: "https://cine-limon.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="w-full">
      <span className="text-purple-500 font-mono text-base mb-1 block">
        // PORTFÓLIO
      </span>      

      <h2 className="text-3xl font-bold mb-12 tracking-tight text-zinc-900 dark:text-zinc-100">
        Meus Projetos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {meusProjetos.map((projeto, index) => (
          <div 
            key={index} 
            className="group rounded-2xl transition-all duration-500 flex flex-col border shadow-2xl overflow-hidden
            /* MODO CLARO */
            bg-zinc-100 border-zinc-200 hover:border-purple-600/50
            /* MODO ESCURO */
            dark:bg-zinc-900/50 dark:border-zinc-800 dark:hover:border-purple-500/50"
          >
            {/* CONTAINER DA IMAGEM COM EFEITO ZOOM */}
            <div className="relative h-48 w-full overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
              <img 
                src={projeto.imagem} 
                alt={projeto.titulo}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
            </div>

            {/* CONTEÚDO DO CARD */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-lg transition-colors bg-zinc-200 dark:bg-zinc-800/50 text-purple-600 dark:text-purple-400">
                    <Code2 size={20} />
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={projeto.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      title="Ver código no GitHub"
                    >
                      <Github size={20} />
                    </a>
                    {projeto.deploy !== "#" && (
                      <a 
                        href={projeto.deploy} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        title="Ver demonstração"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 transition-colors text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  {projeto.titulo}
                </h3>
                
                <p className="text-sm leading-relaxed mb-6 text-zinc-600 dark:text-zinc-400 font-medium">
                  {projeto.descricao}
                </p>
              </div>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 dark:text-zinc-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}