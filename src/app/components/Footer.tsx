"use client";

import Link from "next/link";

import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
        font-medium text-lg dark:border-light"
    >
      <Layout className="py-8 flex items-center justify-between dark:text-light">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <Link href="/">JCR</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
