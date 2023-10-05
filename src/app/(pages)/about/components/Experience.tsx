"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

interface DetailsProps {
  position: string;
  company?: string;
  companyLink?: string;
  time: string;
  address: string;
  work: string;
}

const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="flex flex-col items-center justify-between my-8 first:mt-0
        last:mb-0 w-[60%] mx-auto md:w-[80%]"
    >
      <LiIcon ref={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "string" }}
      >
        {company ? (
          <h3 className="capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg">
            {position}&nbsp;
            <a
              href={companyLink}
              target="_blank"
              className="text-primary capitalize"
            >
              @{company}
            </a>
          </h3>
        ) : (
          <h3 className="capitalize font-bold text-2xl dark:text-light">{position}</h3>
        )}
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-mdeium w-full dark:text-light md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 sm:my-32">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl
          xs:text-4xl md:mb-16 "
      >
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full sm:right-[30%]">
        <motion.div
          className="absolute left-[35px] top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 sm:w-[150%] sm:mx-auto sm:ml-10">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View CA."
            work="Worked on a team responsible for developing new features for Google's
              search engine, including improving the accuracy and relevance of search results and
              developing new tools for data analysis and visualization."
          />
          <Details
            position="Intern"
            company="Facebook"
            companyLink="www.facebook.com"
            time="Summer 2021"
            address="Menlo Park, CA."
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and
            share short-form video content, including designing and implementing a new user interface and developing
            the backend infrastructure to support the feature."
          />
          <Details
            position="Software Developer"
            company="Amazon"
            companyLink="www.amazon.com"
            time="2020-2021"
            address="Seattle, WA."
            work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features suc
            as product recommendations and user reviews, and optimizing the app's performance and reliability."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
