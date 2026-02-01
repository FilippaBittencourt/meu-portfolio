"use client";

import { Mail, X } from "lucide-react";
import { sendEmail } from "@/app/actions"; // Verifique se o caminho está correto

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl max-w-lg w-full relative shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          Mande uma mensagem <Mail className="text-purple-500" size={24} />
        </h2>
        
        {/* CORREÇÃO DO ERRO TS(2322) AQUI 👇 */}
        <form 
          action={async (formData: FormData) => {
            await sendEmail(formData);
            onClose();
            alert("E-mail enviado com sucesso!");
          }} 
          className="space-y-5"
        >
          <div>
            <label htmlFor="nome" className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Nome</label>
            <input type="text" id="nome" name="nome" required className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Seu nome" />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">E-mail de Contato</label>
            <input type="email" id="email" name="email" required className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-purple-500 transition-colors" placeholder="seu@email.com" />
          </div>

          <div>
            <label htmlFor="assunto" className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Assunto</label>
            <input type="text" id="assunto" name="assunto" required className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Ex: Proposta de Freelance" />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Mensagem</label>
            <textarea id="mensagem" name="mensagem" required rows={4} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Conte-me mais sobre sua ideia..."></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg transition-all active:scale-95 shadow-lg shadow-purple-500/20"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}