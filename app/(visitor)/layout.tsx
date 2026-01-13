import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import  Navbar  from "@/components/common/navbar.component";
import { Footer } from "@/components/common/footer.component";
import { Providers } from "@/components/providers.component";
import ScrollToTop from "@/components/scrollToTop.component";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
// import { UserProvider } from "@/contexts/UserContext";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
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
