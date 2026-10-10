import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const MAX_BYTES = 4 * 1024 * 1024; // 4 MB
const EXTENSOES = ['pdf', 'doc', 'docx'];

const erro = (mensagem, status = 400) => Response.json({ ok: false, erro: mensagem }, { status });
const limpa = (t) => String(t ?? '').replace(/\s+/g, ' ').trim().slice(0, 200);

export async function POST(req) {
  let dados;
  try {
    dados = await req.formData();
  } catch {
    return erro('Não foi possível ler os dados enviados.');
  }

  // Campo escondido: só robôs preenchem. Fingimos que deu certo e não enviamos nada.
  if (limpa(dados.get('empresa'))) return Response.json({ ok: true });

  const nome = limpa(dados.get('nome'));
  const telefone = limpa(dados.get('telefone'));
  const email = limpa(dados.get('email'));
  const arquivo = dados.get('curriculo');

  if (!nome || !telefone || !/^\S+@\S+\.\S+$/.test(email)) {
    return erro('Preencha nome, telefone e e-mail corretamente.');
  }
  if (!arquivo || typeof arquivo === 'string' || !arquivo.size) return erro('Anexe o currículo.');

  const extensao = arquivo.name.split('.').pop().toLowerCase();
  if (!EXTENSOES.includes(extensao)) return erro('O currículo deve ser PDF ou Word (.pdf, .doc, .docx).');
  if (arquivo.size > MAX_BYTES) return erro('O currículo deve ter no máximo 4 MB.');

  const usuario = process.env.GMAIL_USER;
  const senha = process.env.GMAIL_APP_PASSWORD;
  if (!usuario || !senha) return erro('O envio de e-mail ainda não foi configurado no servidor.', 500);

  try {
    const transporte = nodemailer.createTransport({ service: 'gmail', auth: { user: usuario, pass: senha } });
    await transporte.sendMail({
      from: `"Site - Trabalhe conosco" <${usuario}>`,
      to: process.env.EMAIL_DESTINO || 'gabrielsantosestrela189@gmail.com',
      replyTo: email,
      subject: `Novo currículo: ${nome}`,
      text: `Nome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}\n\nO currículo está em anexo.`,
      attachments: [
        {
          filename: arquivo.name.replace(/[^\w.\- ]/g, '_'),
          content: Buffer.from(await arquivo.arrayBuffer()),
        },
      ],
    });
    return Response.json({ ok: true });
  } catch (e) {
    console.error('Erro ao enviar e-mail:', e);
    return erro('Não foi possível enviar agora. Tente novamente em alguns instantes.', 500);
  }
}
