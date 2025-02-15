import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "cONTENTFUL TEST",
  description: `This is a blog built with Next.js.`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <section className="min-h-screen">
          <Header />
          <main className="pt-[72px] md:pt-[80px] lg:pt-[96px] transition-spacing duration-300">
            {children}
          </main>
          {/* <Footer /> */}
        </section>
      </body>
    </html>
  );
}
