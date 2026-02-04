"use client";

import  ThemeToggle  from "./ThemeToggle";

export default function Navbar() {
  const links = [
    { nome: "Início", href: "#" },
    { nome: "Sobre", href: "#sobre" },
    { nome: "Experiência", href: "#experiencia" },
    { nome: "Projetos", href: "#projetos" },
    { nome: "Contato", href: "#footer" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        
        <div className="w-6" />

        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.nome}
              href={link.href}
              className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors hover:text-black dark:hover:text-zinc-50"
            >
              {link.nome}
            </a>
          ))}
        </div>

        <ThemeToggle />

      </div>
    </nav>
  );
}