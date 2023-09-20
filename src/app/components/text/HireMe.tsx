"use client";

import Link from "next/link";
import { CircularText } from "./CircularText";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 flex items-center
        justify-center overflow-hidden"
    >
      <div
        className="w-48 h-auto flex items-center justify-center
          relative"
        >
          <CircularText className="fill-dark animate-spin-slow dark:fill-light"/>
          <Link
            href="mailto:cuevasrodartej@gmail.com"
            className="flex items-center justify-center absolute left-1/2
              top-1/2 -translate-x-1/2 -translate-y-1/2 text-light bg-dark
              shadow-md border border-solid border-dark w-20 h-20 rounded-full
              font-semibold hover:bg-white hover:text-dark hover:border-light
              dark:text-dark dark:bg-white dark:border-light hover:dark:bg-dark
              hover:dark:text-light hover:dark:border-light"
            >
            Hire Me
          </Link>
      </div>
    </div>
  );
}

export default HireMe;
