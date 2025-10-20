import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Figure8 DX - Digital Transformation Consultancy | GCC Technology Leader",
  description: "Leading technology consultancy pioneering digital transformation since 2017. Empowering governments and enterprises across EU, GCC, and MENA with professional solutions.",
  icons: {
    icon: [
      { url: '/Figure8-08.png', sizes: '32x32', type: 'image/png' },
      { url: '/Figure8-08.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/Figure8-08.png',
    shortcut: '/Figure8-08.png',
  },
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
