import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type ResultProps = {
  totalFootprint: number;
  isCalculated: boolean;
};

const variantsDiv = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  closed: {
    opacity: 0,
    y: "-30%",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

function Result({ totalFootprint, isCalculated }: ResultProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isCalculated && scrollRef.current) {
      scrollRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [isCalculated]);

  return (
    <motion.div
      variants={variantsDiv}
      animate={isCalculated ? "open" : "closed"}
      initial="closed"
      className="text-center py-6"
    >
      <div className="">
        <h3 className="text-2xl font-bold uppercase font-headings">
          selected flight result:
        </h3>
      </div>
      <p ref={scrollRef} className="font-subheading font-medium text-2xl pt-3">
        Estimated Footprint:{" "}
        <span className="dark:text-tertiary text-secondary font-bold">
          {totalFootprint} tonnes
        </span>{" "}
        CO2e
      </p>
    </motion.div>
  );
}

export default Result;
