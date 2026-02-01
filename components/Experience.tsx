import { CheckCircle2 } from "lucide-react";

export default function Experiencia() {
  const experiencia = [
    {
      titulo: "Estagiária Ambar Tech",
      duracao: "Ago 2024 — Out 2025",
      descricao: "Uma aplicação de tarefas focada em produtividade e minimalismo.",
      objetivo: "Dar suporte à estratégia de vendas",
      recompensa: "+500 EXP em Análise de Dados",
      tecnologias: ["Next.js", "TypeScript"],
    },
    {
      titulo: "Professora de Inglês Evolutiva",
      duracao: "Jun 2023 — Dez 2023",
      descricao: "Dashboard financeiro com gráficos interativos e modo escuro nativo.",
      objetivo: "Ensinar vocabulário básico de Inglês",
      recompensa: "+400 EXP em Comunicação",
      tecnologias: ["Tailwind CSS", "React"],
    },
    {
      titulo: "Estagiária de Verão Onesix",
      duracao: "Jan 2024 — Fev 2024",
      descricao: "API de clima que consome dados em tempo real de serviços externos.",
      objetivo: "Integração de serviços externos",
      recompensa: "+300 EXP em Mentalidade Ágil",
      tecnologias: ["Node.js", "Fetch API"],
    }
  ];

  return (
    <section id="experiencia" className="w-full">
      <span className="text-purple-500 font-mono text-base mb-1 block">
        // EXPERIÊNCIA
      </span>

      <h2 className="text-3xl font-bold mb-12 tracking-tight text-zinc-100">
        Quest Log
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiencia.map((experiencia, index) => (
          <div key={index} className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden">
            
            <CheckCircle2 
              className="text-green-500 absolute top-6 right-6 opacity-80 group-hover:opacity-100 transition-opacity" 
              size={24} 
            />

            <div className="flex flex-col mb-4">
              <h3 className="text-1xl font-bold text-purple-400 pr-8">
                {experiencia.titulo}
              </h3>
              <span className="text-zinc-500 text-sm font-medium">
                {experiencia.duracao}
              </span>
            </div>

            <div className="space-y-3 mb-5">
              <p className="text-zinc-300 font-medium leading-relaxed">
                {experiencia.descricao}
              </p>
              
              <div className="space-y-1">
                <p className="text-zinc-400 text-sm italic">
                  <span className="text-purple-500 font-semibold not-italic">Objetivo:</span> {experiencia.objetivo}
                </p>
                <p className="text-zinc-400 text-sm italic">
                  <span className="text-purple-500 font-semibold not-italic">Recompensa:</span> {experiencia.recompensa}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-800">
              {experiencia.tecnologias.map((tech) => (
                <span key={tech} className="text-[10px] uppercase tracking-wider font-bold bg-zinc-800/80 px-3 py-1 rounded-md text-zinc-400 border border-zinc-700/50">
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