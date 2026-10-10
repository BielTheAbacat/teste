# Site da empresa (Next.js)

## O que tem em cada pasta
- `app/page.js`: os textos do site (nome da empresa, telefones, produtos, missão...)
- `app/globals.css`: cores e aparência (as cores ficam no começo do arquivo)
- `components/`: as partes que se mexem (menu, animações e formulário)
- `app/api/enviar/route.js`: o que manda o currículo para o seu e-mail

## Para ver o site no seu computador
1. Instale o Node.js em nodejs.org (versão "LTS").
2. Abra o terminal dentro desta pasta e rode: `npm install`
3. Copie o arquivo `.env.local.example`, dê o nome `.env.local` à cópia e preencha (veja abaixo).
4. Rode: `npm run dev`
5. Abra http://localhost:3000 no navegador.

## Para o e-mail funcionar (Gmail)
O Gmail exige uma "senha de app", que é diferente da sua senha normal:
1. Na sua conta Google, vá em Segurança e ative a "Verificação em duas etapas".
2. Na mesma área, procure "Senhas de app" e crie uma. Copie as 16 letras, sem espaços.
3. Cole essa senha em `GMAIL_APP_PASSWORD` no arquivo `.env.local`.

## Para colocar no ar
Use a Vercel (vercel.com): envie esta pasta e, em "Environment Variables", cadastre as mesmas três informações do `.env.local`.
O currículo pode ter até 4 MB (PDF ou Word).
