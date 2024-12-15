import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

function FaqQuestion({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const variantsDiv = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="border-b border-black dark:border-b dark:border-white">
      <div className="relative flex items-center justify-between pt-6">
        <h1
          className={`w-[25ch] pb-2 font-headings text-faq font-bold md:w-[55ch] lg:w-[40ch] xl:text-faq2x ${
            isOpen
              ? "text-tertiary transition-all duration-200 ease-linear"
              : "transition-all duration-200 ease-linear"
          }`}
        >
          {question}
        </h1>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-[52px] w-[52px] items-center justify-center p-4 xl:cursor-pointer"
        >
          <motion.span
            style={{
              top: "50%",
              right: "0%",
              x: "-25%",
              y: "-25%",
            }}
            variants={{
              open: {
                rotate: "-45deg",
                transition: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
              },
              closed: {
                rotate: "0",
                transition: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
              },
            }}
            animate={isOpen ? "open" : "closed"}
            className="absolute h-[1px] w-6 bg-black dark:bg-white"
          ></motion.span>
          <motion.span
            style={{
              top: "50%",
              right: "0%",
              x: "-25%",
              y: "-25%",
            }}
            variants={{
              open: {
                rotate: "45deg",
                transition: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
              },
              closed: {
                rotate: "90deg",
                transition: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
              },
            }}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="absolute h-[1px] w-6 rotate-90 bg-black dark:bg-white"
          ></motion.span>
        </div>
      </div>
      <motion.div
        variants={variantsDiv}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="overflow-hidden py-2"
      >
        <p className="text-body text-base xl:pr-6 xl:text-xl 2xl:pr-10 2xl:text-base">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default FaqQuestion;
