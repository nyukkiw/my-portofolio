import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { robotoCondensed } from "./fonts";

import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
        <body className={`${robotoCondensed.variable} bg-black flex flex-col py-4 min-h-screen`}>
            <header>
              <Navbar/>
            </header>

            <main className="py-3 grow">
            {children}
            </main>

            <footer className="py-3 text-center text-xs">
            <span>{"I'm here to stay footere"}</span>
            </footer>
        </body>
</html>
  );
}
