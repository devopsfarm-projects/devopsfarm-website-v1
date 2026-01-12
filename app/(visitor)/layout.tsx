"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import { UserProvider } from "@/contexts/UserContext";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <div className="min-h-screen flex flex-col selection:bg-olive/20 selection:text-olive">

          <main className={`grow `}>
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
