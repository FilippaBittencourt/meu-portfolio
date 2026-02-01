"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  // 1. Extraímos os dados que definiste
  const nome = formData.get('nome');
  const email = formData.get('email');
  const assunto = formData.get('assunto');
  const mensagem = formData.get('mensagem');

  // 2. Aqui faremos o envio com o Resend
  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // No início usamos este domínio de teste do Resend
      to: 'btt.lippa@gmail.com',
      subject: `Novo contacto: ${assunto}`,
      replyTo: email as string, // Permite que respondas direto ao e-mail de quem escreveu
      text: `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`,
    });

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}