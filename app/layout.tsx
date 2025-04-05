import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Define base URL for absolute URLs
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: '110% Pickleball - Built to bounce above the rest',
  description:
    'The first pickleballs scientifically validated to deliver approximately 10% more bounce than conventional balls. Crafted using advanced polymer science for consistently dynamic performance on every surface.',

  openGraph: {
    title: '110% Pickleball - Built to bounce above the rest',
    description:
      'The first pickleballs scientifically validated to deliver approximately 10% more bounce than conventional balls. Crafted using advanced polymer science for consistently dynamic performance on every surface.',
    images: [
      {
        url: '/share.jpg',
        width: 1200,
        height: 630,
        alt: '110% Pickleball - Built to bounce above the rest',
      },
    ],
    locale: 'en_US',
    type: 'website',
    siteName: '110% Pickleball',
  },
  twitter: {
    card: 'summary_large_image',
    title: '110% Pickleball - Built to bounce above the rest',
    description: 'The first pickleballs scientifically validated to deliver approximately 10% more bounce than conventional balls.',
    images: ['/share.jpg'],
    creator: '@110pickleball',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: { url: '/apple-touch-icon.png', type: 'image/png' },
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  themeColor: '#000000',
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
