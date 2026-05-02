import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Validação de E-mail',
  description: 'Ativação de usuário',
  icons: {
    icon: '/nailnow-logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
