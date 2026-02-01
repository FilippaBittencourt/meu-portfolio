import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projetos from "@/components/Projetos";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-950 text-zinc-50 max-w-6xl mx-auto px-6">
      <Navbar />
      <div className="flex flex-col items-center p-24 pt-40 w-full">
        {/* Adicionamos IDs para que a Navbar encontre as seções */}
        <section id="inicio" className="w-full">
          <Hero />
        </section>

        <section id="projetos" className="w-full scroll-mt-24">
          <Projetos />
        </section>

        <section id="sobre" className="w-full scroll-mt-24">
          <Sobre />
        </section >

        <Footer />
      </div>
    </main>
  );
}