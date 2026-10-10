'use client';

import { useEffect } from 'react';

// Cuida dos efeitos ao rolar a página: barra de progresso, itens que aparecem
// e voltam a sumir, destaque do menu e o movimento da primeira tela.
export default function Efeitos() {
  useEffect(() => {
    const todos = (seletor) => [...document.querySelectorAll(seletor)];

    // Aparecem ao descer e voltam a se esconder ao subir
    const aparecer = new IntersectionObserver(
      (itens) => itens.forEach((i) => {
        const passou = i.boundingClientRect.top < 0;
        i.target.classList.toggle('in', i.isIntersecting || passou);
      }),
      { rootMargin: '0px 0px -12% 0px' }
    );
    todos('.rv, .ttl').forEach((el) => aparecer.observe(el));

    // Destaca no menu a parte da página onde você está
    const links = todos('nav a');
    const secao = new IntersectionObserver(
      (itens) => itens.forEach((i) => {
        if (i.isIntersecting) {
          links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + i.target.id));
        }
      }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    todos('main section').forEach((s) => secao.observe(s));

    // Barra de progresso e movimento da primeira tela
    const barra = document.getElementById('bar');
    const inicio = document.querySelector('.hero-in');
    function aoRolar() {
      const y = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      barra.style.transform = 'scaleX(' + (total > 0 ? y / total : 0) + ')';
      if (inicio && y < window.innerHeight) {
        inicio.style.transform = 'translateY(' + y * 0.25 + 'px)';
        inicio.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.85));
      }
    }
    window.addEventListener('scroll', aoRolar, { passive: true });
    aoRolar();

    return () => {
      aparecer.disconnect();
      secao.disconnect();
      window.removeEventListener('scroll', aoRolar);
    };
  }, []);

  return <div id="bar" />;
}
