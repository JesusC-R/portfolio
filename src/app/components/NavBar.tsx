"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const NavBar = () => {
  const pathname = usePathname();

  const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
    return (
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span
          className={`h-[1px] inline-block w-0 bg-dark
            absolute left-0 -bottom-0.5 group-hover:w-full transition-[width]
            ease duration-300
            ${pathname === href ? `w-full` : `w-0`}
            `}
        >
          &nbsp;
        </span>
      </Link>
    );
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex
        items-center justify-between"
    >
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-between flex-wrap">
        <motion.a
          className="w-8 mr-3"
          href="https://github.com/JesusC-R"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          className="w-8 mr-3"
          href="https://www.linkedin.com/in/jesus-cuevas-rodarte-4560a7227"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;