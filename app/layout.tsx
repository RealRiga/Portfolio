import type { Metadata, Viewport } from 'next';
import './globals.css';
import AosInit from '@/components/AosInit';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://adeolaportfolio.vercel.app'),
  title: 'Adeola Yisa (Riga) | Full-Stack & Mobile Developer',
  description: 'Portfolio of Adeola Yisa (Riga) - A passionate Full-Stack Software Engineer & Mobile Developer specializing in React, Next.js, TypeScript, Flutter, C#, and scalable backend systems.',
  keywords: [
    'Adeola Yisa',
    'Riga',
    'Full Stack Developer',
    'Software Engineer',
    'Next.js Developer',
    'React Developer',
    'Flutter Developer',
    'Nigeria Developer',
    'Web Developer',
    'Mobile Developer'
  ],
  authors: [{ name: 'Adeola Yisa' }],
  creator: 'Adeola Yisa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adeolaportfolio.vercel.app',
    title: 'Adeola Yisa (Only1Riga) | Full-Stack & Mobile Developer',
    description: 'Specializing in building high-performance web applications and fluid cross-platform mobile experiences.',
    siteName: 'Adeola Yisa Portfolio',
    images: [
      {
        url: '/image/riga.jpg',
        width: 800,
        height: 800,
        alt: 'Adeola Yisa Profile',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className="bg-white text-slate-900 dark:bg-dark-950 dark:text-slate-100 antialiased selection:bg-brand-emerald selection:text-black transition-colors duration-300">
        <ThemeProvider>
          <AosInit />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
