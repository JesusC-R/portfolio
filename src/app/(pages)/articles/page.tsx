"use client";

import Layout from "@/app/components/Layout";
import AnimatedText from "@/app/components/text/AnimatedText";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Article Images
import articleImg from "../../../../public/images/articles/pagination component in reactjs.jpg";
import { motion } from "framer-motion";

interface ArticleProps {
  img: StaticImageData | string;
  title: string;
  time: string;
  summary: string;
  link: string;
}

const FramerImage = motion(Image);

const Article: React.FC<ArticleProps> = ({
  img,
  title,
  time,
  summary,
  link,
}) => {
  return (
    <li
      className="col-span-1 w-full p-4 bg-light border border-solid
      border-dark rounded-2xl relative"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]
        rounded-[2rem] bg-dark"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4">
          {title}
        </h2>
        <p className="text-sm mb-2 ">{summary}</p>
        <span className="text-primary font-semibold">{time}</span>
      </Link>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Helix | Articles</title>
        <meta name="description" content="any description" />
      </Head>
      <div className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <Article
              img={articleImg}
              title="Build A Custom Pagination Component In ReactJS From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch.
                Follow this step-by-step guide to integrate Pagination component into your
                ReactJS project."
              time="9 min read"
              link="/"
            />
            <Article
              img={articleImg}
              title="Build A Custom Pagination Component In ReactJS From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch.
                Follow this step-by-step guide to integrate Pagination component into your
                ReactJS project."
              time="9 min read"
              link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
        </Layout>
      </div>
    </>
  );
};

export default Articles;
