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

interface ProjectProps {
  type?: string;
  title: string;
  summary?: string; // Add Summary Only to Featured Projects
  img: StaticImageData | string;
  link: string;
  github: string;
  isFeatured: boolean;
}

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
        border-solid border-dark bg-light w-full`,
        isFeatured
          ? `rounded-3xl p-12 justify-between`
          : `rounded-2xl p-6 relative justify-center flex-col`
      )}
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]
          rounded-[2.5`rem] bg-dark"
      />
      <Link
        href={link}
        target="_blank"
        className={clsx(
          `cursor-pointer overflow-hidden rounded-lg`,
          isFeatured ? `w-1/2` : `w-full`
        )}
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div
        className={clsx(
          `flex flex-col items-start justify-between`,
          isFeatured ? `w-1/2 pl-6` : `w-full mt-4`
        )}
      >
        <span className="text-primary font-medium text">{type}</span>
        <Link href={link} target="_blank">
          <h2
            className={clsx(
              `my-2 w-full text-left font-bold`,
              isFeatured ? `text-4xl` : `text-3xl`
            )}
          >
            {title}
          </h2>
        </Link>
        {isFeatured && <p className="my-2 font-medium text-dark">{summary}</p>}
        <div
          className={clsx(
            `mt-2 flex items-center`,
            !isFeatured && `justify-between w-full`
          )}
        >
          <Link
            href={github}
            target="_blank"
            className={clsx(isFeatured ? `w-10` : `w-8`)}
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className={clsx(
              isFeatured
                ? `ml-4 rounded-lg bg-dark text-light p-2 px-6
                text-lg font-semibold`
                : `m-4 text-lg font-semibold underline`
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
      <Layout className="w-full mb-16 flex flex-col items-center justify-center">
        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />

        <div className="grid grid-cols-12 gap-24">
          <div className="col-span-12">
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
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              link="/"
              github="/"
              img={project1}
              isFeatured={false}
            />
          </div>

          <div className="col-span-6">
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
