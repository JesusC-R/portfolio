import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JCR",
  description: "Meet JCR a web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}
          bg-light w-full min-h-screen`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
