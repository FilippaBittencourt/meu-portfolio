"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experiencia from "@/components/Experience";
import Sobre from "@/components/About";     
import Projetos from "@/components/Projects";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-50 overflow-x-hidden">
      {showIntro ? (
        <Intro onComplete={() => setShowIntro(false)} />
      ) : (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          
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
        </div>
      )}
    </main>
  );
}