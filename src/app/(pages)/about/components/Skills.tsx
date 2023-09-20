"use client";

import { motion } from "framer-motion";

const Skills = () => {
  interface SkillProps {
    name: string;
    x: string;
    y: string;
  }

  const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
    return (
      <motion.div
        className="flex items-center justify-center bg-dark font-semibold
            rounded-full text-light py-3 px-6 cursor-pointer shadow-dark absolute
            dark:bg-light dark:shadow-light dark:text-dark"
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
      >
        {name}
      </motion.div>
    );
  };

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center dark:text-light">Skills</h2>
      <div
        className="w-full h-screen relative flex items-center dark:bg-light
          justify-center rounded-full bg-circularLight dark:bg-circularDark dark:text-light"
      >
        <motion.div
          className="flex items-center justify-center bg-dark text-light
            rounded-full font-semibold shadow-dark p-8 cursor-pointer
            dark:bg-light dark:text-dark dark:shadow-light"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw"/>
        <Skill name="CSS" x="-5vw" y="-10vw"/>
        <Skill name="JavaScript" x="20vw" y="6vw"/>
        <Skill name="ReactJS" x="0vw" y="12vw"/>
        <Skill name="NextJS" x="-20vw" y="-15vw"/>
        <Skill name="ExpressJS" x="15vw" y="-12vw"/>
        <Skill name="NodeJS" x="32vw" y="-5vw"/>
        <Skill name="API's" x="0vw" y="-20vw"/>
        <Skill name="SQL" x="-25vw" y="18vw"/>
        <Skill name="Tailwind" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
