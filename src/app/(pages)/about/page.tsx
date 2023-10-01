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
        <Layout className="pt-16 md:pt-8 sm:pt-4">
          <AnimatedText
            text="Passion Fuels Purpose"
            className="mb-8 md:text-5xl sm:text-2xl xs:text-xl"
          />

          {/* Grid */}
          <div className="grid w-full grid-cols-9 md:grid-cols-6 xs:grid-cols-4 gap-8 md:gap-4 xs:gap-2">

            {/* Biography */}
            <div
              className="col-span-3 flex flex-col items-start justify-start order-1
              lg:col-span-6
              md:col-span-6 md:order-2
              xs:col-span-4 xs:items-center xs:justify-between xs:p-0 xs:w-full xs:-ml-0"
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

            <div
              className="col-span-3 relative h-max rounded-2xl border-2
                border-solid border-dark bg-light dark:border-light dark:bg-dark order-2
                lg:col-span-3
                md:left-0 md:order-1 md:col-span-3
                sm:right-0 sm:col-span-5"
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[110%] h-[105%]
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
              className="col-span-2 flex flex-col flex-grow items-end justify-between order-3
              lg:flex-row lg:right-0
              md:order-3 md:col-span-5 md:pl-0 md:flex-row
              sm:col-span-5
              xs:col-span-2"
            >
              <div className="flex flex-col items-center justify-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-5xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-sm md:text-center sm:text-lg">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center md:mx-[1rem]">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-5xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-sm md:text-center sm:text-lg">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-5xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-sm md:text-center sm:text-lg">
                  Years of Experience
                </h2>
              </div>

            </div>
          </div>

          {/* <Skills />
          <Experience />
          <Education /> */}
        </Layout>
      </div>
    </>
  );
};

export default About;
