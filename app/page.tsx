import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projetos from "@/components/Projetos";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-zinc-50">
      <Navbar />
      <div className="flex flex-col items-center p-24 pt-40 w-full">
        <Hero />
        <Projetos />
        <Sobre />
        <Footer />
      </div>
    </main>
  );
}