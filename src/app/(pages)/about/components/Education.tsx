"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

interface DetailsProps {
  type: string;
  place: string;
  info: string;
}

const Details: React.FC<DetailsProps> = ({ type, place, info }) => {
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
        <h3 className="capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">{place}</span>
        <p className="font-medium w-full dark:text-light md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 sm:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full sm:right-[30%]">
        <motion.div
          className="absolute left-[35px] top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 sm:w-[150%] sm:mx-auto sm:ml-10">
          <Details
            type="Associates's Of Science In Computer Science"
            place="Long Beach City College, CA"
            info="Relevant courses included Data Structures and Algorithms, Computer Information Systems
              and Data Base Managment."
          />
          <Details
            type="Computer Science Certification"
            place="El Camino College, CA"
            info="Relevant courses included Data Structures and Algorithms, Computer Information Systems
              and Data Base Managment."
          />
          <Details
            type="Web Development Certification"
            place="Udemy"
            info="Relevant courses included Data Structures and Algorithms, Computer Information Systems
              and Data Base Managment."
          />
          <Details
            type="Back-end Web Development Certification"
            place="Udemy"
            info="Relevant courses included Data Structures and Algorithms, Computer Information Systems
              and Data Base Managment."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
