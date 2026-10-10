'use client';

import { useState } from 'react';

const MAX_MB = 4;

export default function FormularioCurriculo() {
  const [estado, setEstado] = useState('parado'); // parado | enviando | ok
  const [erro, setErro] = useState('');
  const [arquivo, setArquivo] = useState(null);

  async function enviar(e) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const nome = String(dados.get('nome') || '').trim();
    const telefone = String(dados.get('telefone') || '').trim();
    const email = String(dados.get('email') || '').trim();

    if (!nome || !telefone || !/\S+@\S+\.\S+/.test(email) || !arquivo) {
      return setErro('Preencha todos os campos e anexe o currículo.');
    }
    const extensao = arquivo.name.split('.').pop().toLowerCase();
    if (!['pdf', 'doc', 'docx'].includes(extensao)) {
      return setErro('O currículo deve ser PDF ou Word (.pdf, .doc, .docx).');
    }
    if (arquivo.size > MAX_MB * 1024 * 1024) {
      return setErro(`O currículo deve ter no máximo ${MAX_MB} MB.`);
    }

    setErro('');
    setEstado('enviando');
    try {
      const resposta = await fetch('/api/enviar', { method: 'POST', body: dados });
      const json = await resposta.json().catch(() => ({}));
      if (!resposta.ok || !json.ok) throw new Error(json.erro || '');
      setEstado('ok');
    } catch (x) {
      setErro(x.message || 'Não foi possível enviar agora. Tente novamente em alguns instantes.');
      setEstado('parado');
    }
  }

  if (estado === 'ok') {
    return <div className="ok">Recebemos seus dados. Obrigado pelo interesse!</div>;
  }

  return (
    <form className="form rv" onSubmit={enviar} noValidate>
      <label className="full">Nome completo
        <input type="text" name="nome" placeholder="Seu nome completo" autoComplete="name" />
      </label>
      <label>Telefone de contato
        <input type="tel" name="telefone" placeholder="(00) 00000-0000" autoComplete="tel" />
      </label>
      <label>E-mail
        <input type="email" name="email" placeholder="seuemail@exemplo.com" autoComplete="email" />
      </label>
      <label className="drop full">
        <input type="file" name="curriculo" accept=".pdf,.doc,.docx" onChange={(e) => setArquivo(e.target.files[0] || null)} />
        <b>{arquivo ? `Anexado: ${arquivo.name}` : 'Clique aqui para anexar seu currículo (PDF ou Word)'}</b>
      </label>
      {/* Campo escondido: só robôs preenchem */}
      <input className="hp" type="text" name="empresa" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {erro && <div className="msg-erro full" role="alert">{erro}</div>}
      <div className="full">
        <button className="btn" type="submit" disabled={estado === 'enviando'} style={{ marginTop: 0 }}>
          {estado === 'enviando' ? 'Enviando...' : 'Enviar currículo'}
        </button>
      </div>
    </form>
  );
}
