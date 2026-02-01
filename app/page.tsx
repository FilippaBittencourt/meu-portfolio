import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experiencia from "@/components/Experience"; // Verifique se o nome do arquivo é Experience ou Experiencia
import Sobre from "@/components/About";      // Verifique se o nome do arquivo é About ou Sobre
import Projetos from "@/components/Projects"; // Verifique se o nome do arquivo é Projects ou Projetos
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50 overflow-x-hidden">
      <Navbar />
      
      {/* Container Principal Ajustado:
        - gap-32: Espaçamento grande e elegante entre seções.
        - pt-28: Distância ideal da Navbar para o Hero.
        - max-w-4xl: Alinhamento horizontal perfeito para o conteúdo.
      */}
      <div className="flex flex-col items-center gap-32 pt-28 pb-40 max-w-4xl mx-auto px-6 w-full">
        
        <section id="inicio" className="w-full">
          <Hero />
        </section>

        <section id="sobre" className="w-full scroll-mt-24">
          <Sobre />
        </section>

        <section id="experiencia" className="w-full scroll-mt-24">
          <Experiencia />
        </section>

        <section id="projetos" className="w-full scroll-mt-24">
          <Projetos />
        </section>

        <Footer />
      </div>
    </main>
  );
}