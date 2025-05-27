import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Talktitude-client',
  description: 'Talktitude 고객용 웹서비스',
  icons: {
    icon: '/logo/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
