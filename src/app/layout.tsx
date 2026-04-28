import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sony WH-1000XM6 | Silence, perfected.",
  description: "Experience the new Sony WH-1000XM6 flagship wireless noise cancelling headphones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden selection:bg-sonyBlue/30`}>
        {children}
      </body>
    </html>
  );
}
