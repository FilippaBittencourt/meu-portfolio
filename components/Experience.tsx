import { CheckCircle2 } from "lucide-react";

export default function Experiencia() {
  const experiencia = [
    {
      titulo: "Estagiária Ambar Tech",
      duracao: "Ago 2024 — Out 2025",
      descricao: "Suporte ao time comercial, análise de dados, monitoramento de KPIs, dashboards e aplicações web para automação e otimização de processos.",
      objetivo: "Dar suporte à estratégia de vendas",
      recompensa: "+500 EXP em Análise de Dados",
    },
    {
      titulo: "Professora de Inglês Evolutiva",
      duracao: "Jun 2023 — Dez 2023",
      descricao: "Ensino de inglês básico para educação infantil, planejamento de aulas e atividades lúdicas, desenvolvimento de vocabulário e comunicação.",
      objetivo: "Ensinar vocabulário básico de Inglês",
      recompensa: "+400 EXP em Comunicação",
    },
    {
      titulo: "Estagiária de Verão Onesix",
      duracao: "Jan 2024 — Fev 2024",
      descricao: "Vivência corporativa com mentorias temáticas, desenvolvimento de solução técnica, focado em inovação e resolução de problemas.",
      objetivo: "Integração de serviços externos",
      recompensa: "+300 EXP em Resolução de Problemas",
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
        {experiencia.map((exp, index) => (
          <div key={index} className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden">
            
            <CheckCircle2 
              className="text-green-500 absolute top-6 right-6 opacity-80 group-hover:opacity-100 transition-opacity" 
              size={24} 
            />

            <div className="flex flex-col mb-4">
              <h3 className="text-lg font-bold text-purple-400 pr-8">
                {exp.titulo}
              </h3>
              <span className="text-zinc-500 text-sm font-medium">
                {exp.duracao}
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-zinc-300 font-medium leading-relaxed text-sm">
                {exp.descricao}
              </p>
              
              <div className="space-y-1">
                <p className="text-zinc-400 text-sm italic">
                  <span className="text-purple-500 font-semibold not-italic">Objetivo:</span> {exp.objetivo}
                </p>
                <p className="text-zinc-400 text-sm italic">
                  <span className="text-purple-500 font-semibold not-italic">Recompensa:</span> {exp.recompensa}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}