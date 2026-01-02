import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.figure8dx.com'),
  title: "Figure8 DX - Digital Transformation Consultancy | GCC Technology Leader",
  description: "Leading technology consultancy pioneering digital transformation since 2017. Empowering governments and enterprises across EU, GCC, and MENA with professional solutions.",
  keywords: [
    'digital transformation',
    'enterprise architecture',
    'GCC technology',
    'government solutions',
    'MENA consultancy',
    'ISO 9001 certified',
    'digital strategy',
    'technology consulting'
  ],
  authors: [{ name: 'Figure8 DX' }],
  creator: 'Figure8 DX',
  publisher: 'Figure8 DX',
  alternates: {
    canonical: 'https://www.figure8dx.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.figure8dx.com',
    siteName: 'Figure8 DX',
    title: 'Figure8 DX - Digital Transformation Consultancy | GCC Technology Leader',
    description: 'Leading technology consultancy pioneering digital transformation since 2017. Empowering governments and enterprises across EU, GCC, and MENA with 1,625+ successful projects.',
    images: [
      {
        url: '/Figure8-05.png',
        width: 1200,
        height: 630,
        alt: 'Figure8 DX - Digital Excellence for the GCC Region',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Figure8 DX - Digital Transformation Consultancy | GCC Technology Leader',
    description: 'Leading technology consultancy pioneering digital transformation since 2017. Empowering governments and enterprises across EU, GCC, and MENA with professional solutions.',
    images: ['/Figure8-05.png'],
    creator: '@Figure8DX',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
