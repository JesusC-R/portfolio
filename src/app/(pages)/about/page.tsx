"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import AnimatedText from "../../components/text/AnimatedText";
import profilePic from "../../../../public/images/profile/developer-pic-2.jpg";
import Layout from "@/app/components/Layout";
import Skills from "@/app/(pages)/about/components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

interface AnimatedNumbersProps {
  value: number;
}

const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true }); // Executes animation when it`s in view port

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(60) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref} className="dark:text-light"></span>;
};

const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <head>
        <title>JCR | About Page</title>
        <meta name="description" content="Any description" />
      </head>
      <div className="flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose"
            className="mb-16 xl:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          {/* Grid */}
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">

            {/* Biography */}
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4
               md:order-2 md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="my-4 font-medium dark:text-light xs:my-2 ">
                Hi, I&apos;m Helix, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>
              <p className="my-4 font-medium dark:text-light xs:my-2">
                I believe that design is about more than just making things look
                pretty it&apos;s about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="my-4 font-medium dark:text-light xs:my-2">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            {/* Image */}
            <div
              className="col-span-3 relative h-max rounded-2xl border-2
                border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
                xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%]
                bg-dark rounded-[2rem] dark:bg-light"
              />
              <Image
                src={profilePic}
                alt="Image"
                className="w-full h-auto rounded-2xl"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>

            {/* Numbers */}
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8
                xl:flex-row xl:items-center md:order-3"
            >
              <div className="flex flex-col items-center justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center md:mx-[1rem] xs:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>

            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </div>
    </>
  );
};

export default About;
