import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  const MotionLink = motion(Link);

  const buttonVariants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: { scale: 1.05, opacity: 1 },
  };

  return (
    <div
      className="flex items-center justify-center mt-2 md:absolute md:mr-[11rem]
        sm:mr-[15rem]"
    >
      <MotionLink
        href="/"
        className="h-16 w-16 bg-gray-700 text-white rounded-full p-4 flex items-center
          justify-center text-2xl font-bold transition-transform transform hover:scale-105
          border border-solid border-transparent dark:border-light"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
      >
        JCR
      </MotionLink>
    </div>
  );
};

export default Logo;
