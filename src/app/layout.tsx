import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fahrschule-am-ostendplatz.de'),
  applicationName: 'Fahrschule am Ostendplatz',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-white text-[color:var(--ink)] antialiased">{children}</body>
    </html>
  );
}
