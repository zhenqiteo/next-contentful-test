import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

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
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
