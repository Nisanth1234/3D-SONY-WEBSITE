import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "NIX Sonic Pro | Silence, perfected.",
  description: "Experience the new NIX Sonic Pro flagship wireless noise cancelling headphones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden selection:bg-nixBlue/30`}>
        {children}
      </body>
    </html>
  );
}
