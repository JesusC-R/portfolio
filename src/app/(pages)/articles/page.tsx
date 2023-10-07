"use client";

import Layout from "@/app/components/Layout";
import AnimatedText from "@/app/components/text/AnimatedText";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";

// Article Images
import articleImg from "../../../../public/images/articles/pagination component in reactjs.jpg";
import articleImg2 from "../../../../public/images/articles/smooth scrolling in reactjs.png";
import articleImg3 from "../../../../public/images/articles/create modal component in react using react portals.png";
import { useRef } from "react";

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

const HoverArticleImg: React.FC<ArticleProps> = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event: any) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event: any) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        ref={imgRef}
        src={img}
        alt="Image"
        sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        className="w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        style={{ x: x, y: y }}
      />
    </Link>
  );
};

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
        border-dark rounded-2xl relative dark:bg-dark dark:border-light"
      >
        <div
          className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]
            rounded-[2rem] bg-dark dark:bg-light"
        />
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
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
        <Link href={link} target="_blank">
          <h2
            className="capitalize text-2xl font-bold my-2 hover:underline mt-4 dark:text-light
              xs:text-lg sm:text-xl"
          >
            {title}
          </h2>
          <p className="text-sm mb-2 dark:text-light">{summary}</p>
          <span className="text-primary font-semibold">{time}</span>
        </Link>
      </li>
    );
  }
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid
        border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light
        dark:border-light sm:flex-col"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      viewport={{ once: true }}
    >
      <HoverArticleImg title={title} img={img} link={link} />
      <span
        className="text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm
        "
        >
          {date}
        </span>
    </motion.li>
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
          <AnimatedText
            text="Words Can Change The World"
            className="mb-16 xl:!text-7xl sm:!text-6xl xs:!text-3xl sm:my-8"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
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
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">
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
