"use client";

import Layout from "@/app/components/Layout";
import AnimatedText from "@/app/components/text/AnimatedText";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Article Images
import articleImg from "../../../../public/images/articles/pagination component in reactjs.jpg";
import articleImg2 from "../../../../public/images/articles/smooth scrolling in reactjs.png";
import articleImg3 from "../../../../public/images/articles/create modal component in react using react portals.png";

interface ArticleProps {
  img: StaticImageData | string;
  title: string;
  time?: string;
  date?: string;
  summary?: string;
  link: string;
  isFeatured?: boolean;
}

const FramerImage = motion(Image);

const Article: React.FC<ArticleProps> = ({
  img,
  title,
  time,
  date,
  summary,
  link,
  isFeatured,
}) => {
  if (isFeatured) {
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
  }
  return (
    <li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid
        border-dark border-r-4 border-b-4">
      <Link href={link} target="_blank">
        <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
      </Link>
      <span className="text-primary font-semibold pl-4 ">{date}</span>
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
              isFeatured
            />
            <Article
              img={articleImg}
              title="Build A Custom Pagination Component In ReactJS From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch.
                Follow this step-by-step guide to integrate Pagination component into your
                ReactJS project."
              time="9 min read"
              link="/"
              isFeatured
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In ReactJS: Build A Reusable Custom Hook For Inputs
                And Error Handling"
              img={articleImg3}
              date="09/08/2000"
              link="/"
            />
            <Article
              title="Form Validation In ReactJS: Build A Reusable Custom Hook For Inputs
                And Error Handling"
              img={articleImg3}
              date="09/08/2000"
              link="/"
            />
            <Article
              title="Form Validation In ReactJS: Build A Reusable Custom Hook For Inputs
                And Error Handling"
              img={articleImg3}
              date="09/08/2000"
              link="/"
            />
            <Article
              title="Form Validation In ReactJS: Build A Reusable Custom Hook For Inputs
                And Error Handling"
              img={articleImg3}
              date="09/08/2000"
              link="/"
            />
            <Article
              title="Form Validation In ReactJS: Build A Reusable Custom Hook For Inputs
                And Error Handling"
              img={articleImg3}
              date="09/08/2000"
              link="/"
            />
            <Article
              title="Form Validation In ReactJS: Build A Reusable Custom Hook For Inputs
                And Error Handling"
              img={articleImg3}
              date="09/08/2000"
              link="/"
            />
          </ul>
        </Layout>
      </div>
    </>
  );
};

export default Articles;
