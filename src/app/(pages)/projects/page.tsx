"use client";

import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { GithubIcon } from "@/app/components/Icons";
import Layout from "@/app/components/Layout";
import AnimatedText from "@/app/components/text/AnimatedText";

// Project Images
import project1 from "../../../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";

interface ProjectProps {
  type?: string;
  title: string;
  summary?: string; // Add Summary Only to Featured Projects
  img: StaticImageData | string;
  link: string;
  github: string;
  isFeatured: boolean;
}

const Framerimage = motion(Image);

const Project: React.FC<ProjectProps> = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  isFeatured,
}) => {
  return (
    <article
      className={clsx(
        `flex items-center border shadow-2xl relative
        border-solid border-dark bg-light w-full
        border-r-[0.7rem] border-b-[0.7rem] dark:border-light
        dark:bg-dark sm:p-4 sm:rounded-br-3xl  md:p-4 md:w-[80%] md:mx-auto
        sm:rounded-2xl xs:w-[66%] sm:left-[4%]`,
        isFeatured
          ? `rounded-3xl p-12 justify-between lg:flex-col lg:p-8
             `
          : `rounded-2xl p-6 relative justify-center flex-col`
      )}
    >
      {isFeatured ? (
        <div
          className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]
          rounded-[2.5rem] bg-dark dark:bg-light
          rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"
        />
      ) : (
        <div
          className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]
          rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl
          md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
          "
        />
      )}

      <Link
        href={link}
        target="_blank"
        className={clsx(
          `cursor-pointer overflow-hidden rounded-lg`,
          isFeatured ? `w-1/2 lg:w-full` : `w-full`
        )}
      >
        <Framerimage
          src={img}
          alt={title}
          sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div
        className={clsx(
          `flex flex-col items-start justify-between`,
          isFeatured ? `w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6` : `w-full mt-4`
        )}
      >
        <span
          className={clsx(
            `text-primary font-medium text-xl`,
            isFeatured ? `xs:text-base` : `lg:text-lg md:text-base`
          )}
        >
          {type}
        </span>
        <Link href={link} target="_blank">
          <h2
            className={clsx(
              `my-2 w-full text-left font-bold dark:text-light`,
              isFeatured ? `text-4xl lg:text-3xl xs:text-2xl` : `text-3xl lg:text-2xl`
            )}
          >
            {title}
          </h2>
        </Link>
        {isFeatured && (
          <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
        )}
        <div
          className={clsx(
            `mt-2 flex items-center`,
            !isFeatured && `justify-between w-full`
          )}
        >
          <Link
            href={github}
            target="_blank"
            className={clsx(
              `dark:text-light hover:text-dark/75 hover:dark:text-light/75`,
              isFeatured ? `w-10` : `w-8 `
            )}
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className={clsx(
              isFeatured
                ? `ml-4 rounded-lg bg-dark text-light p-2 px-6 border border-solid
                text-lg font-semibold hover:text-dark hover:bg-light hover:border-dark
                dark:bg-light dark:text-dark hover:dark:text-light hover:dark:bg-dark
                hover:dark:border-light sm:px-4 sm:text-base`
                : `m-4 text-lg font-semibold underline dark:text-light
                hover:text-dark/75 hover:dark:text-light/75 `
            )}
          >
            {isFeatured ? "Visit Project" : "Visit"}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Helix | Projects Page</title>
      </Head>
      <Layout className="w-full mb-16 flex flex-col items-center justify-center pt-16">
        <AnimatedText
          text="Imagination Trumps Knowledge!"
          className="mb-16 xl:!text-7xl sm:!text-6xl xs:!text-3xl sm:my-8"
        />

        <div
          className="grid grid-cols-8 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8
            md:gap-y-24 sm:gap-x-0"
        >
          <div className="col-span-8">
            <Project
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Contet API, React Router
              and It shows details regarding almost all the cryptocurrency. You can easily convert the price
              in your local currency."
              link="/"
              github="/"
              type="Featured Project"
              img={project1}
              isFeatured={true}
            />
          </div>
          <div className="col-span-4 sm:col-span-8">
            <Project
              title="Crypto Screener Application"
              link="/"
              github="/"
              img={project1}
              isFeatured={false}
            />
          </div>

          <div className="col-span-4 sm:col-span-8">
            <Project
              title="Crypto Screener Application"
              link="/"
              github="/"
              img={project1}
              isFeatured={false}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;
