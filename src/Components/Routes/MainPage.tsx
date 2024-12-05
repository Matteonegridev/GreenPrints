import MainPageImage from "../../Utils/MainPageImage";
import Logo from "../../Utils/Logo";
import ButtonMain from "../../Utils/ButtonMain";
import { motion } from "framer-motion";

const variantsDiv = {
  entry: {
    opacity: [0, 0, 0, 0, 1],
    x: ["-100%", "0%"],
    delay: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
const variantsSubH = {
  entry: {
    opacity: [0, 0, 0, 0, 1],
    y: ["-80%", "0%"],
    delay: 1,
    transition: {
      duration: 2.3,
      ease: "linear",
    },
  },
};

function MainPage() {
  return (
    <main className="px-4 py-6 pt-8 dark:text-white">
      <motion.div
        variants={variantsDiv}
        animate="entry"
        className="flex items-center justify-around pt-24 md:justify-center md:pt-3"
      >
        <Logo
          stroke="#50D890"
          height="70.5px"
          width="50.2px"
          strokeWidth="1"
          fill="#50D890"
        />
        <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-title text-4xl font-medium uppercase text-transparent md:ml-2 md:text-6xl md:leading-none 2xl:text-5xl">
          GreenPrints
        </h1>
      </motion.div>
      <motion.div
        variants={variantsSubH}
        animate="entry"
        className="text-center"
      >
        <h3 className="font-subheading text-2xl font-medium text-gray-500 xl:text-3xl 2xl:text-2xl">
          A step towards a better future
        </h3>
      </motion.div>

      <div className="pb-8 pt-8 xl:grid xl:grid-cols-2 xl:p-2 xl:pt-24 2xl:p-7 2xl:pt-14">
        <MainPageImage />
        <div className="xl:order-1 xl:place-content-center 2xl:pl-20">
          <h1 className="mb-1 pl-2 pr-2 font-headings text-2xl font-extrabold uppercase md:text-4xl xl:text-5xl 2xl:text-6xl">
            How heavy is your <span className="text-primary">footprint</span>?
          </h1>
          <p className="text-pretty pl-2 pr-2 font-body text-base md:pt-4 md:text-xl 2xl:text-base">
            Flying has a <strong>huge</strong> impact on our planet, producing
            more emissions in a few hours than other activities do in days.
            <br /> <br /> With our flight <strong>footprint</strong> calculator,
            you’ll get a clear view of the carbon cost of each trip, helping you
            make informed decisions for a greener future. Discover the real cost
            of your air travel—and take action to help{" "}
            <strong className="text-primary">protect</strong> our planet.
          </p>
          <ButtonMain navigate="calculator" />
        </div>
      </div>
    </main>
  );
}

export default MainPage;
