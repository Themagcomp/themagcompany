import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Mag Company | Maglight M1 — Magnetic Portable Light",
  description:
    "Revolutionize portable lighting with the Maglight M1. Hands-free magnetic light with 50-400 lumens, IPX6 water resistance, and 10-hour battery life.",
  keywords: [
    "Maglight",
    "magnetic light",
    "portable light",
    "hands-free light",
    "IPX6",
    "camping light",
    "outdoor light",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
