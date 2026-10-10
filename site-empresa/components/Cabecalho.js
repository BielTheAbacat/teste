'use client';

import { useEffect, useState } from 'react';

const links = [
  ['#inicio', 'Início'],
  ['#quem-somos', 'Quem Somos'],
  ['#produtos', 'Produtos'],
  ['#contatos', 'Redes sociais e contatos'],
  ['#trabalhe', 'Trabalhe conosco'],
];

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const ver = () => setRolou(window.scrollY > 30);
    ver();
    window.addEventListener('scroll', ver, { passive: true });
    return () => window.removeEventListener('scroll', ver);
  }, []);

  return (
    <header id="top" className={`${rolou ? 'sc' : ''} ${aberto ? 'open' : ''}`.trim()}>
      <a className="logo" href="#inicio">Sua Logo</a>
      <button id="mb" aria-label="Abrir menu" onClick={() => setAberto(!aberto)}>☰</button>
      <nav>
        {links.map(([destino, nome]) => (
          <a key={destino} href={destino} onClick={() => setAberto(false)}>{nome}</a>
        ))}
      </nav>
    </header>
  );
}
