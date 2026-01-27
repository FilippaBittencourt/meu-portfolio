// função principal que o Next.js usa para exibir o conteúdo da página inicial
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-zinc-50">
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Filippa
        </h1>
        <p className="max-w-[600px] text-lg text-zinc-400">
          Criando experiências digitais com código e design.
        </p>
        <div className="flex gap-4 mt-4">
          <a 
            href="#projetos" 
            className="px-6 py-3 bg-zinc-50 text-black rounded-full font-medium hover:bg-zinc-200 transition-colors"
          >
            Ver Projetos
          </a>
          <a 
            href="https://github.com/FilippaBittencourt" 
            target="_blank"
            className="px-6 py-3 border border-zinc-700 rounded-full font-medium hover:bg-zinc-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}