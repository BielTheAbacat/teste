import Cabecalho from '../components/Cabecalho';
import Efeitos from '../components/Efeitos';
import FormularioCurriculo from '../components/FormularioCurriculo';

// Os textos do site ficam aqui. Para mudar um texto, troque só as palavras
// (não mexa nos sinais < > nem nas palavras dentro deles).
export default function Pagina() {
  return (
    <>
      <Efeitos />
      <Cabecalho />
<main>
<section className="hero" id="inicio">
  <div className="orb o1"></div><div className="orb o2"></div>
  <div className="hero-in">
    <h1 className="rv"><span>Sua</span><br /><span className="g">Empresa</span></h1>
    <p className="rv" style={{ '--d': '.2s' }}>Escreva aqui uma frase curta que diga o que a sua empresa faz de melhor.</p>
    <a className="btn rv" style={{ '--d': '.35s' }} href="#produtos">Conheça nossos produtos</a>
  </div>
  <div className="cue"><i></i>Role para baixo</div>
</section>
<section className="about" id="quem-somos">
  <div className="lbl rv">Nossa essência</div>
  <h2 className="ttl"><span>Quem somos</span></h2>
  <p className="intro rv">Conte aqui, em poucas linhas, a história da sua empresa e o que ela representa.</p>
  <div className="cards">
    <div className="box rv"><em>01</em><h3>Missão</h3><p>Produzir com qualidade e responsabilidade, entregando produtos que fazem a diferença na vida dos nossos clientes.</p></div>
    <div className="box rv" style={{ '--d': '.15s' }}><em>02</em><h3>Visão</h3><p>Ser referência no nosso segmento, reconhecida pela qualidade, confiança e inovação.</p></div>
    <div className="box rv" style={{ '--d': '.3s' }}><em>03</em><h3>Valores</h3><ul><li>Ética e transparência</li><li>Qualidade em tudo que fazemos</li><li>Respeito às pessoas</li><li>Compromisso com o cliente</li></ul></div>
  </div>
</section>
<section className="alt" id="produtos">
  <div className="lbl rv">O que fazemos</div>
  <h2 className="ttl"><span>Nossos produtos</span></h2>
  <div className="prods">
    <div className="pr rv"><div className="ph">Seu Produto</div><h3>Produto 01</h3><p>Breve descrição do que é produzido.</p></div>
    <div className="pr rv" style={{ '--d': '.1s' }}><div className="ph">Seu Produto</div><h3>Produto 02</h3><p>Breve descrição do que é produzido.</p></div>
    <div className="pr rv" style={{ '--d': '.2s' }}><div className="ph">Seu Produto</div><h3>Produto 03</h3><p>Breve descrição do que é produzido.</p></div>
    <div className="pr rv"><div className="ph">Seu Produto</div><h3>Produto 04</h3><p>Breve descrição do que é produzido.</p></div>
    <div className="pr rv" style={{ '--d': '.1s' }}><div className="ph">Seu Produto</div><h3>Produto 05</h3><p>Breve descrição do que é produzido.</p></div>
    <div className="pr rv" style={{ '--d': '.2s' }}><div className="ph">Seu Produto</div><h3>Produto 06</h3><p>Breve descrição do que é produzido.</p></div>
  </div>
</section>
<section id="contatos">
  <div className="lbl rv">Fale com a gente</div>
  <h2 className="ttl"><span>Redes sociais e contatos</span></h2>
  <div className="cards">
    <div className="card rv"><small>Telefone</small><b>(00) 0000-0000</b></div>
    <div className="card rv" style={{ '--d': '.1s' }}><small>WhatsApp</small><b>(00) 90000-0000</b></div>
    <div className="card rv" style={{ '--d': '.2s' }}><small>E-mail</small><b>contato@suaempresa.com.br</b></div>
    <div className="card rv"><small>Endereço</small><b>Rua Exemplo, 123 – Centro<br />Sua Cidade – UF</b></div>
    <div className="card rv" style={{ '--d': '.1s' }}><small>Instagram</small><b>@suaempresa</b></div>
    <div className="card rv" style={{ '--d': '.2s' }}><small>Facebook</small><b>/suaempresa</b></div>
  </div>
</section>
<section className="alt" id="trabalhe">
  <div className="lbl rv">Faça parte</div>
  <h2 className="ttl"><span>Trabalhe conosco</span></h2>
  <p className="intro rv">Preencha seus dados e anexe seu currículo. Entraremos em contato quando surgir uma vaga para você.</p>
  <FormularioCurriculo />
</section>
</main>
<footer>© 2026 Sua Empresa. Todos os direitos reservados.</footer>
    </>
  );
}
