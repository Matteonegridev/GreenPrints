import { easeIn, motion } from "framer-motion";

import { Link } from "react-router-dom";

type ButtonProps = {
  navigate: string;
};

function ButtonMain({ navigate }: ButtonProps) {
  return (
    <button className="pb-5 sm:pt-6 md:pt-6 xl:w-[15rem] xl:pt-5">
      <Link
        className="block rounded-sm border border-green-400 bg-primary py-2 text-center font-headings text-xl font-medium uppercase text-white transition-all ease-in active:scale-[0.97] xl:text-xl 2xl:duration-200 2xl:hover:-translate-y-2 2xl:hover:bg-accent 2xl:hover:text-primary 2xl:hover:shadow-lg 2xl:hover:shadow-primary 2xl:active:shadow-sm 2xl:dark:hover:bg-dark"
        to={navigate}
      >
        Calculate!
      </Link>
    </button>
  );
}

export default ButtonMain;
