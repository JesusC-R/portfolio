"use client";

import Link from "next/link";

import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
        font-medium text-lg dark:border-light sm:text-base
        xs:text-xs"
    >
      <Layout
        className="py-8 flex items-center justify-between dark:text-light
          lg:flex-col lg:py-6 xs:py-5 whitespace-nowrap">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <Link href="/" className="xs:pt-2">JCR</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
