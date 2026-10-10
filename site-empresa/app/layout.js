import { Archivo, Inter } from 'next/font/google';
import './globals.css';

const titulo = Archivo({ subsets: ['latin'], weight: ['800', '900'], variable: '--f-titulo', display: 'swap' });
const texto = Inter({ subsets: ['latin'], variable: '--f-texto', display: 'swap' });

export const metadata = {
  title: 'Sua Empresa',
  description: 'Conheça a nossa empresa, os nossos produtos e fale com a gente.',
};

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${titulo.variable} ${texto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
