export default function Sobre() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"];

  return (
    <section id="sobre" className="w-full max-w-4xl mt-24 mb-20">
      <h2 className="text-2xl font-semibold mb-8 border-b border-zinc-800 pb-2">
        Sobre
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-zinc-400 leading-relaxed space-y-4">
          <p>Sou uma desenvolvedora apaixonada por transformar ideias em realidade através de interfaces limpas e funcionais.</p>
          <p>Atualmente, estou focada em aprimorar meus conhecimentos em <strong>Next.js</strong> e <strong>Tailwind CSS</strong>.</p>
        </div>
        <div>
          <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Tecnologias</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="px-3 py-1 border border-zinc-800 rounded-md text-sm text-zinc-300 hover:border-zinc-500 transition-colors duration-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}