export default function Footer() {
  return (
    <footer id="footer" className="w-full max-w-4xl border-t border-zinc-800 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-zinc-500 text-sm">
        © 2026 Filippa. Construído com Next.js.
      </p>
      
      <div className="flex gap-6 text-sm font-medium text-zinc-400">
        <a href="mailto:seuemail@exemplo.com" className="hover:text-zinc-50 transition-colors duration-300">
          E-mail
        </a>
        <a href="https://linkedin.com/in/seuusuario" target="_blank" className="hover:text-zinc-50 transition-colors duration-300">
          LinkedIn
        </a>
        <a href="https://github.com/FilippaBittencourt" target="_blank" className="hover:text-zinc-50 transition-colors duration-300">
          GitHub
        </a>
      </div>
    </footer>
  );
}