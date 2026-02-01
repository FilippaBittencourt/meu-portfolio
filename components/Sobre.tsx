import { User2 } from "lucide-react";
import { siReact, siJavascript, siTypescript, siTailwindcss } from "simple-icons";

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
  return (
    <section id="about" className="w-full max-w-4xl mx-auto py-20 px-4">
      <span className="text-purple-500 font-mono text-base mb-1 block">
        // SOBRE MIM
      </span>  

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="max-w-sm space-y-6">
          <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">Me Conheça</h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed text-sm">
            <p>
              Olá! Sou a Filippa, desenvolvedora focada em criar interfaces que 
              equilibram estética e performance. 
            </p>
            <p>
              Minha jornada no desenvolvimento é guiada pela curiosidade de entender 
              como as coisas funcionam por baixo do capô.
            </p>
          </div>
        </div>

        <div className="p-6 bg-[#18181b] border border-zinc-800 rounded-3xl hover:border-purple-500/40 transition-all duration-500 w-full max-w-[400px] md:justify-self-end shadow-2xl">
          <div className="flex items-center gap-6">
            
            <div className="w-24 h-24 rounded-full bg-white overflow-hidden flex-shrink-0 border-4 border-zinc-800 shadow-inner">
               <img 
                 src="/caminho-da-sua-foto-pixel.png" 
                 alt="Lippa Bittencourt" 
                 className="w-full h-full object-cover scale-110"
               />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold text-purple-400 tracking-tight">
                Lippa
              </h3>
              
              <div className="space-y-0.5 font-mono text-sm text-zinc-100">
                <p><span className="text-purple-500 font-medium">Class:</span> Web Developer</p>
                <p><span className="text-purple-500 font-medium">Level:</span> 22</p>
                
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-purple-500 font-medium">Skills:</span>
                  <div className="flex gap-2 items-center">
                    <SkillIcon path={siReact.path} color="#61DAFB" name="React" />
                    <SkillIcon path={siJavascript.path} color="#F7DF1E" name="JavaScript" />
                    <SkillIcon path={siTypescript.path} color="#3178C6" name="TypeScript" />
                    <SkillIcon path={siTailwindcss.path} color="#06B6D4" name="Tailwind CSS" />
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