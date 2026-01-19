"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Navbar from "@/components/common/navbar.component";
import { Footer } from "@/components/common/footer.component";
import { Providers } from "@/components/providers.component";
import ScrollToTop from "@/components/scrollToTop.component";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import PageLoader from "@/components/Pagelayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>

          {loading && <PageLoader />}

          <ScrollToTop />

          <div className="min-h-screen flex flex-col selection:bg-olive/20 selection:text-olive">
            <Navbar />

            <main className="grow">
              {children}
            </main>

            <Footer />
            <MobileStickyCTA />
          </div>

        </Providers>
      </body>
    </html>
  );
}
