import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

import "./globals.css";
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
    <html lang="en" className={geistSans.variable}>
        <body className="bg-blue-200 flex flex-col py-4 min-h-screen">
            <header>
              <Navbar/>
            </header>

            <main className="py-3 grow">
            {children}
            </main>

            <footer className="border-t py-3 text-center text-xs">
            <span>{"I'm here to stay footere"}</span>
            </footer>
        </body>
</html>
  );
}
