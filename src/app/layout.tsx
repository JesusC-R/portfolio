"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}
          bg-light w-full min-h-screen dark:bg-dark`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
        {children}
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
