import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

interface LiIconProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const LiIcon: React.FC<LiIconProps> = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const { scrollYProgress } = useScroll({
    target: svgRef,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
        ref={svgRef}
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="animate-pulse stroke-[5px] fill-light dark:fill-dark/75"
          style={{ pathLength: scrollYProgress }}
        />
        <circle cx="75" cy="50" r="10" className="stroke-1 fill-primary" />
      </svg>
    </figure>
  );
};

export default LiIcon;
