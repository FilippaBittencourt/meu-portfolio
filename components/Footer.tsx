import { Heart, Gamepad2 } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="w-full max-w-4xl border-t border-zinc-800 pt-10 pb-1 flex flex-col md:flex-row justify-between items-center gap-8 mx-auto px-4">
      
      <div className="text-zinc-500 text-sm font-medium tracking-tight flex items-center gap-1.5">
        <span>Desenvolvido com</span>
        <Heart size={16} className="fill-purple-500 text-purple-500" />
        <span>e</span>
        <Gamepad2 size={18} className="text-purple-500" />
      </div>
      
      <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
        <a 
          href="mailto:btt.lippa@gmail.com" 
          className="hover:text-zinc-50 transition-colors duration-300"
        >
          Email
        </a>
        <a 
          href="https://linkedin.com/in/filippa-bittencourt" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-zinc-50 transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/FilippaBittencourt" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-zinc-50 transition-colors duration-300"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}