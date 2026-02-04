"use client";
import { useState, useEffect, useRef } from "react";

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [started, setStarted] = useState(false);
  const [text, setText] = useState("");
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const dialogues = [
    "Olá! Bem-vindo ao meu portfólio.",
    "Pronto para explorar?",
  ];

  useEffect(() => {
    audioRef.current = new Audio("/sounds/text-bit.wav");
  }, []);

  useEffect(() => {
    // Só começa a digitar se o usuário já clicou uma vez
    if (started && charIndex < dialogues[dialogueIndex].length) {
      const timeout = setTimeout(() => {
        const char = dialogues[dialogueIndex][charIndex];
        
        if (char !== " " && audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        }

        setText((prev) => prev + char);
        setCharIndex((prev) => prev + 1);
      }, 45);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, dialogueIndex, started]);

  const handleNext = () => {
    // Se ainda não começou, o primeiro clique apenas inicia a intro
    if (!started) {
      setStarted(true);
      return;
    }

    if (charIndex < dialogues[dialogueIndex].length) return;

    if (dialogueIndex < dialogues.length - 1) {
      setText("");
      setCharIndex(0);
      setDialogueIndex(dialogueIndex + 1);
    } else {
      setIsExiting(true);
      setTimeout(onComplete, 800);
    }
  };

  return (
    <div 
      onClick={handleNext}
      className={`fixed inset-0 z-[999] bg-black flex items-center justify-center p-4 cursor-pointer font-pixel ${isExiting ? 'fade-out' : ''}`}
    >
      {!started ? (
        <div className="text-white text-xl animate-pulse tracking-[0.2em]">
          [ CLIQUE PARA INICIAR ]
        </div>
      ) : (
        <div className="border-[3px] border-white bg-black p-6 w-full max-w-[470px] min-h-[130px] relative">
          <p className="text-white text-xl leading-tight tracking-wide">
            {text}
          </p>
          {charIndex === dialogues[dialogueIndex].length && (
            <span className="absolute bottom-2 right-4 text-white text-xs animate-pulse">▶</span>
          )}
        </div>
      )}
    </div>
  );
}