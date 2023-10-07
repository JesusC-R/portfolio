"use client";

import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      {/* Primary Background */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%", opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"], opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      />

      {/* Secondary Background */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%", opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />

      {/* Tertiary Background */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%", opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
