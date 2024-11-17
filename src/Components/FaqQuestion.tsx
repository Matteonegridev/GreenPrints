import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

function FaqQuestion({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black dark:border-b dark:border-white">
      <div className="flex justify-between items-center pt-6 gap-2 relative">
        <h1
          className={` w-[27ch] font-headings font-bold text-faq pb-2 ${
            isOpen
              ? "text-tertiary transition-all duration-200 ease-linear"
              : "transition-all duration-200 ease-linear"
          }`}
        >
          {question}
        </h1>
        <div onClick={() => setIsOpen(!isOpen)}>
          <motion.span
            style={{
              top: "65%",
              right: "0%",
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
            animate={isOpen ? "open" : "closed"}
            className="absolute rotate-90  w-6 h-[1px]  dark:bg-white bg-black "
          ></motion.span>
        </div>
      </div>

      {isOpen && (
        <motion.div className="py-3">
          <p className="text-body text-base">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}

export default FaqQuestion;
