"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, MessageSquare } from "lucide-react";
import Image from "next/image";
import ContactModal from "./ContactModal"; // 👈 Certifique-se que o caminho está correto

export default function Hero() {
  const palavras = [
    "Web Designer", 
    "Desenvolvedora Frontend", 
    "Analista de Dados", 
    "Apaixonada por Games"
  ];
  
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [estaApagando, setEstaApagando] = useState(false);
  const [velocidade, setVelocidade] = useState(150);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (subIndex === palavras[index].length + 1 && !estaApagando) {
      setVelocidade(2000);
      setEstaApagando(true);
      return;
    }

    if (subIndex === 0 && estaApagando) {
      setEstaApagando(false);
      setIndex((prev) => (prev + 1) % palavras.length);
      setVelocidade(500);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (estaApagando ? -1 : 1));
      setVelocidade(estaApagando ? 30 : 80);
    }, velocidade);

    return () => clearTimeout(timeout);
  }, [subIndex, estaApagando, index, velocidade, palavras]);

  return (
    <section className="relative flex flex-col items-start gap-4 text-left w-full">
      
      <span className="text-zinc-400 text-lg md:text-xl font-bold tracking-tight">
        Olá, Mundo! Eu sou a
      </span>
      
      <h1 className="text-6xl md:text-6xl font-bold tracking-tighter text-purple-500 -mt-2">
        Filippa Bittencourt
      </h1>

      <p className="max-w-[600px] text-lg md:text-xl text-zinc-400 mt-2 font-bold leading-relaxed h-8">
        E sou <span className="text-purple-500">
          {palavras[index].substring(0, subIndex)}
        </span>
        <span className="animate-pulse ml-1">|</span>
      </p>

      <p className="max-w-[550px] text-zinc-500 text-base md:text-lg leading-relaxed mt-4">
        Crio interfaces modernas e responsivas, unindo código, design e inteligência de negócio. 
        Gosto de transformar problemas em soluções simples, bonitas e funcionais. 
        Nas horas vagas, me aventuro no mundo dos jogos.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <a 
          href="/CV-Filippa-Bittencourt.pdf" 
          download="CV-Filippa-Bittencourt.pdf"
          className="group flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] active:scale-95 cursor-pointer"
        >
          <Download size={20} className="group-hover:animate-bounce" />
          Baixar CV
        </a>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-transparent border-2 border-zinc-800 hover:border-purple-500 text-zinc-300 hover:text-purple-400 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <MessageSquare size={20} />
          Me Contate
        </button>
      </div>

      <div className="flex gap-6 mt-10">
        <a href="https://github.com/FilippaBittencourt" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-purple-500 transition-all hover:-translate-y-1">
          <Github size={28} />
        </a>
        <a href="https://linkedin.com/in/filippa-bittencourt" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-purple-500 transition-all hover:-translate-y-1">
          <Linkedin size={28} />
        </a>
        <a href="mailto:btt.lippa@gmail.com" className="text-zinc-500 hover:text-purple-500 transition-all hover:-translate-y-1">
          <Mail size={28} />
        </a>
      </div>

      <div className="hidden md:block absolute right-0 top-0 w-48 h-48 lg:w-64 lg:h-64 overflow-hidden rounded-full border-4 border-zinc-900 shadow-2xl z-0">
        <Image 
          src="/profile.jpeg"
          alt="Foto de Filippa Bittencourt" 
          fill 
          className="object-cover scale-110 hover:scale-125 transition-transform duration-700" 
          priority 
        />
      </div>

      {/* 🚀 O Modal agora é um componente separado e limpo */}
      {isModalOpen && (
        <ContactModal onClose={() => setIsModalOpen(false)} />
      )}

    </section>
  );
}