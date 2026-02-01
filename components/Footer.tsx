export default function Footer() {
  return (
    <footer id="footer" className="w-full max-w-4xl border-t border-zinc-800 pt-10 pb-12 flex flex-col md:flex-row justify-between items-center gap-8 mx-auto px-4">
      
      {/* Assinatura Minimalista */}
      <div className="text-zinc-500 text-sm font-medium tracking-tight">
        <span>Feito com dedicação por <span className="text-zinc-300 font-semibold">Filippa</span></span>
      </div>
      
      {/* Links de Redes Sociais */}
      <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
        <a 
          href="mailto:seuemail@exemplo.com" 
          className="hover:text-zinc-50 transition-colors duration-300"
        >
          Email
        </a>
        <a 
          href="https://linkedin.com/in/seuusuario" 
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