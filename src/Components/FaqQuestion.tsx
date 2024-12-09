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
      <div className="flex justify-between items-center pt-6 relative ">
        <h1
          className={` w-[25ch] lg:w-[40ch] md:w-[55ch] font-headings font-bold text-faq pb-2 xl:text-faq2x ${
            isOpen
              ? "text-tertiary transition-all duration-200 ease-linear"
              : "transition-all duration-200 ease-linear"
          }`}
        >
          {question}
        </h1>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="xl:p-4 xl:cursor-pointer "
        >
          <motion.span
            style={{
              top: "65%",
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
            className="absolute w-6 h-[1px] dark:bg-white bg-black "
          ></motion.span>
          <motion.span
            style={{
              top: "65%",
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
            className="absolute rotate-90  w-6 h-[1px]  dark:bg-white bg-black "
          ></motion.span>
        </div>
      </div>
      <motion.div
        variants={variantsDiv}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="py-2 overflow-hidden"
      >
        <p className="text-body text-base xl:text-xl xl:pr-6 2xl:pr-10 2xl:text-base">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default FaqQuestion;
