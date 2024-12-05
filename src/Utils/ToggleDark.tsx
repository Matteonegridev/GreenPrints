import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialState = () => {
  const dark = sessionStorage.getItem("darkMode");
  return dark ? JSON.parse(dark) : false;
};

const sun = {
  entry: {
    x: ["0%", "15%", "0%"],
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn",
      delay: 0.5,
    },
  },
  exit: {
    x: "50%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const moon = {
  entry: {
    x: ["0%", "15%", "0%"],
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn",
      delay: 0.5,
    },
  },
  exit: {
    x: "-50%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function ToggleDark() {
  const [isDark, setIsDark] = useState(initialState);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) return root.classList.add("dark");
    else return root.classList.remove("dark");
  }, [isDark]);

  useEffect(() => {
    sessionStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <button
        className="w-16 h-16 bg-white rounded-full flex justify-center items-center 2xl:w-12 2xl:h-12"
        onClick={toggleDark}
      >
        <AnimatePresence initial={false}>
          {isDark ? (
            <motion.svg
              key="sun"
              initial="exit"
              animate="entry"
              exit="exit"
              variants={sun}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="45px"
              height="45px"
              className="2xl:w-[30px] 2xl:h-[30px]"
            >
              {" "}
              <motion.path d="M 12 0 C 11.4 0 11 0.4 11 1 L 11 2 C 11 2.6 11.4 3 12 3 C 12.6 3 13 2.6 13 2 L 13 1 C 13 0.4 12.6 0 12 0 z M 4.1992188 3.1992188 C 3.9492188 3.1992187 3.7 3.3 3.5 3.5 C 3.1 3.9 3.1 4.5003906 3.5 4.9003906 L 4.1992188 5.5996094 C 4.5992187 5.9996094 5.1996094 5.9996094 5.5996094 5.5996094 C 5.9996094 5.1996094 5.9996094 4.5992188 5.5996094 4.1992188 L 4.9003906 3.5 C 4.7003906 3.3 4.4492188 3.1992188 4.1992188 3.1992188 z M 19.800781 3.1992188 C 19.550781 3.1992188 19.299609 3.3 19.099609 3.5 L 18.400391 4.1992188 C 18.000391 4.5992187 18.000391 5.1996094 18.400391 5.5996094 C 18.800391 5.9996094 19.400781 5.9996094 19.800781 5.5996094 L 20.5 4.9003906 C 20.9 4.5003906 20.9 3.9 20.5 3.5 C 20.3 3.3 20.050781 3.1992188 19.800781 3.1992188 z M 12 5 A 7 7 0 0 0 5 12 A 7 7 0 0 0 12 19 A 7 7 0 0 0 19 12 A 7 7 0 0 0 12 5 z M 1 11 C 0.4 11 0 11.4 0 12 C 0 12.6 0.4 13 1 13 L 2 13 C 2.6 13 3 12.6 3 12 C 3 11.4 2.6 11 2 11 L 1 11 z M 22 11 C 21.4 11 21 11.4 21 12 C 21 12.6 21.4 13 22 13 L 23 13 C 23.6 13 24 12.6 24 12 C 24 11.4 23.6 11 23 11 L 22 11 z M 4.9003906 18.099609 C 4.6503906 18.099609 4.3992188 18.200391 4.1992188 18.400391 L 3.5 19.099609 C 3.1 19.499609 3.1 20.1 3.5 20.5 C 3.9 20.9 4.5003906 20.9 4.9003906 20.5 L 5.5996094 19.800781 C 5.9996094 19.400781 5.9996094 18.800391 5.5996094 18.400391 C 5.3996094 18.200391 5.1503906 18.099609 4.9003906 18.099609 z M 19.099609 18.099609 C 18.849609 18.099609 18.600391 18.200391 18.400391 18.400391 C 18.000391 18.800391 18.000391 19.400781 18.400391 19.800781 L 19.099609 20.5 C 19.499609 20.9 20.1 20.9 20.5 20.5 C 20.9 20.1 20.9 19.499609 20.5 19.099609 L 19.800781 18.400391 C 19.600781 18.200391 19.349609 18.099609 19.099609 18.099609 z M 12 21 C 11.4 21 11 21.4 11 22 L 11 23 C 11 23.6 11.4 24 12 24 C 12.6 24 13 23.6 13 23 L 13 22 C 13 21.4 12.6 21 12 21 z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="moon"
              initial="exit"
              animate="entry"
              exit="exit"
              variants={moon}
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="2xl:w-[35px] 2xl:h-[35px]"
            >
              <motion.path
                d="M20.9931 13.3127C20.5158 13.435 20.0155 13.5 19.5 13.5C16.1863 13.5 13.5 10.8137 13.5 7.5C13.5 6.98452 13.565 6.48422 13.6873 6.00686C9.9664 6.17045 7 9.2388 7 13C7 16.866 10.134 20 14 20C17.7612 20 20.8295 17.0336 20.9931 13.3127Z"
                fill="#000000"
              />
              <motion.path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.5 8.25C4.77614 8.25 5 8.47386 5 8.75V10.25C5 10.5261 4.77614 10.75 4.5 10.75C4.22386 10.75 4 10.5261 4 10.25V8.75C4 8.47386 4.22386 8.25 4.5 8.25Z"
                fill="#000000"
              />
              <motion.path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.25 9.5C3.25 9.22386 3.47386 9 3.75 9H5.25C5.52614 9 5.75 9.22386 5.75 9.5C5.75 9.77614 5.52614 10 5.25 10H3.75C3.47386 10 3.25 9.77614 3.25 9.5Z"
                fill="#000000"
              />
              <motion.path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.5 3C7.77614 3 8 3.22386 8 3.5V5.5C8 5.77614 7.77614 6 7.5 6C7.22386 6 7 5.77614 7 5.5V3.5C7 3.22386 7.22386 3 7.5 3Z"
                fill="#000000"
              />
              <motion.path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 4.5C6 4.22386 6.22386 4 6.5 4H8.5C8.77614 4 9 4.22386 9 4.5C9 4.77614 8.77614 5 8.5 5H6.5C6.22386 5 6 4.77614 6 4.5Z"
                fill="#000000"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>
    </>
  );
}

export default ToggleDark;
