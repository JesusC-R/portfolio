"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { useRouter } from "next/navigation";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
  toggle?: () => void;
}

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1.5px] inline-block w-0 bg-dark
            absolute left-0 -bottom-0.5 group-hover:w-full transition-[width]
            ease duration-300 dark:bg-light
            ${pathname === href ? `w-full` : `w-0`}
            `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: CustomLinkProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (toggle) {
      toggle();
      router.push(href);
    }
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1.5px] inline-block w-0 bg-dark
            absolute left-0 -bottom-0.5 group-hover:w-full transition-[width]
            ease duration-300 dark:bg-light
            ${pathname === href ? `w-full` : `w-0`}
            `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  // Handle Modal
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex
        items-center justify-between dark:text-light relative
        z-50 lg:px-16 md:px-12 sm:px-8 xs:px-6"
    >
      {/* Hamburger Button */}
      <button
        className="hidden lg:flex flex-col justify-center items-center fixed z-50
          lg:mt-5"
        onClick={handleClick}
      >
        <span
          className={`h-0.5 w-6 bg-dark dark:bg-light block rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-dark dark:bg-light block rounded-sm transition-all duration-300 ease-out my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-dark dark:bg-light block rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Desktop NavBar */}
      <div className="w-full flex justify-between items-center lg:hidden">
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

          <motion.button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`ml-[5rem] flex items-center justify-center rounded-full p-1 text-2xl
              ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-light" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Navbar */}
      {isOpen ? (
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
            x: "-50%",
            y: "-50%",
          }}
          animate={{ scale: 1, opacity: 1, }}
          className="min-w-[70vw] flex flex-col justify-between items-center
            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-dark/50
            dark:bg-light/50 rounded-lg backdrop-blur-xl py-32"
        >
          <nav className="flex items-center flex-col justify-center py-[2rem]">
            <CustomMobileLink
              className="mb-[1rem]"
              href="/"
              title="Home"
              toggle={handleClick}
            />
            <CustomMobileLink
              className="mb-[1rem]"
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              className="mb-[1rem]"
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
            <CustomMobileLink
              className="mb-[1rem]"
              href="/articles"
              title="Articles"
              toggle={handleClick}
            />
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
            <motion.button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`flex items-center justify-center rounded-full p-1
              text-2xl
                  ${
                    mode === "light"
                      ? "bg-dark text-light"
                      : "bg-light text-dark"
                  }`}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-light" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </motion.button>
          </nav>
        </motion.div>
      ) : null}

      <div
        className="absolute left-[50%] top-2 translate-x-[50%]
          lg:translate-x-[50%] lg:left-[45%] lg:top-2
          xs:left-[40%]"
        >
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
