import { User2 } from "lucide-react";
import { siReact, siJavascript, siTypescript, siTailwindcss, siPython } from "simple-icons";

interface SkillIconProps {
  path: string;
  color: string;
  name: string;
}

const SkillIcon = ({ path, color, name }: SkillIconProps) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    className="w-4 h-4" 
    style={{ fill: color }}
  >
    <title>{name}</title>
    <path d={path} />
  </svg>
);

export default function About() {
  const skills = [
    { icon: siReact, color: "#61DAFB", name: "React" },
    { icon: siJavascript, color: "#F7DF1E", name: "JavaScript" },
    { icon: siTypescript, color: "#3178C6", name: "TypeScript" },
    { icon: siTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
    { icon: siPython, color: "#3776AB", name: "Python" },
  ];

  return (
    <section id="sobre" className="w-full">
      <span className="text-purple-500 font-mono text-base mb-1 block">
        // SOBRE
      </span>  

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="max-w-sm space-y-6">
          <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">Me Conheça</h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed text-sm">
            <p>
              Oi! Me chamo Filippa, sou desenvolvedora web apaixonada por tecnologia e pelo mundo dos games.
              Desde os títulos clássicos como Super Mario Bros. até os mais modernos como Stardew Valley,
              os jogos sempre foram uma grande fonte de inspiração para mim. Atualmente, curso Análise e Desenvolvimento de Sistemas
              no IFSP São Carlos e gosto de transformar ideias em interfaces criativas, funcionais e bem pensadas.
            </p>
            <p>
              Minha jornada no desenvolvimento é guiada pela curiosidade e vontade de melhorar cada vez mais, assim como nos games!
            </p>
          </div>
        </div>

        <div className="p-6 bg-[#18181b] border border-zinc-800 rounded-3xl hover:border-purple-500/40 transition-all duration-500 w-full max-w-[400px] md:justify-self-end shadow-2xl">
          <div className="flex items-center gap-6">
            
            <div className="w-32 h-32 rounded-full bg-zinc-800 overflow-hidden flex-shrink-0 border-4 border-zinc-800 shadow-inner relative">
               <img 
                 src="/avatar.png"
                 alt="Avatar Lippa Estilo Stardew Vallley" 
                 className="w-full h-full object-cover"
               />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold text-purple-400 tracking-tight">
                Lippa
              </h3>
              
              <div className="space-y-0.5 font-mono text-sm text-zinc-100">
                <p><span className="text-purple-500 font-semibold not-italic">Classe:</span> Web Developer</p>
                <p><span className="text-purple-500 font-semibold not-italic">Nível:</span> 22</p>
                
                <div className="flex flex-col">
                  <span className="text-purple-500 font-semibold not-italic">Habilidades:</span>
                  <div className="flex gap-2 items-center mt-1">
                    {skills.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-purple-500/50 transition-colors"
                        title={skill.name}
                      >
                        <SkillIcon path={skill.icon.path} color={skill.color} name={skill.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}