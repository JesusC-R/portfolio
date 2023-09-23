"use client";

import Image from "next/image";
import Link from "next/link";

import Layout from "./components/Layout";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "./components/text/AnimatedText";
import { LinkArrowIcon } from "./components/Icons";
import HireMe from "./components/text/HireMe";
import { motion } from "framer-motion";

export default function Home() {
  const MotionLink = motion(Link);

  return (
    <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full image-animation">
          <div className="w-1/2">
            <Image
              src={profilePic}
              alt="Image"
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              className="!text-6xl !text-left"
              text="Turning Vision Into Reality With Code And Design"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into inovative web applications. Explore my latest projects and
              articles, showcasing my expertice in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <MotionLink
                href="/dummy.pdf"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light"
              >
                Resume
                <LinkArrowIcon className="w-6 ml-1" />
              </MotionLink>
              <Link
                href="mailto:cuevasrodartej@gmail.com"
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark underline
                  dark:text-light"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
    </main>
  );
}
