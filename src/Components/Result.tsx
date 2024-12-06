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
        // senza il block scrolla tutto verso l'elemento
        block: "center",
      });
    }
  }, [isCalculated]);

  return (
    <motion.div
      variants={variantsDiv}
      animate={isCalculated ? "open" : "closed"}
      initial="closed"
      className="py-6 text-center"
    >
      <h3 className="font-headings text-2xl font-bold uppercase 2xl:text-4xl">
        selected flight result:
      </h3>
      <p
        ref={scrollRef}
        className="pt-3 font-subheading text-2xl font-medium 2xl:text-3xl"
      >
        Estimated Footprint:{" "}
        <span className="font-bold text-secondary dark:text-tertiary">
          {totalFootprint} tonnes
        </span>{" "}
        CO2e
      </p>
    </motion.div>
  );
}

export default Result;
