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
  title: {
    default: "Figure8 DX - Digital Transformation Consultancy | GCC Technology Leader",
    template: "%s | Figure8 DX",
  },
  description: "Digital transformation consultancy since 2019. Empowering governments and enterprises across EU, GCC, and MENA with enterprise architecture, business strategy, and technology solutions.",
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
    description: 'Digital transformation consultancy since 2019. Empowering governments and enterprises across EU, GCC, and MENA with 1,625+ successful projects in enterprise architecture and technology solutions.',
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
    description: 'Digital transformation consultancy since 2019. Empowering governments and enterprises across EU, GCC, and MENA with enterprise architecture, business strategy, and technology solutions.',
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
  // Structured Data (JSON-LD) for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Figure8 DX",
    url: "https://www.figure8dx.com",
    logo: "https://www.figure8dx.com/Figure8-05.png",
    description: "Digital transformation consultancy since 2019. Empowering governments and enterprises across EU, GCC, and MENA with enterprise architecture, business strategy, and technology solutions.",
    foundingDate: "2019",
    address: {
      "@type": "PostalAddress",
      addressCountry: ["SA", "AE"],
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "connect@figure8dx.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/figure8dx",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Figure8 DX",
    url: "https://www.figure8dx.com",
    description: "Digital transformation consultancy specializing in enterprise architecture, business strategy, and technology solutions for GCC, MENA, and EU regions.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.figure8dx.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
