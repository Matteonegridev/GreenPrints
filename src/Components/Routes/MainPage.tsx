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
    <div className="pt-8 px-4 py-6 h-[100dvh] dark:text-white ">
      <motion.div
        variants={variantsDiv}
        animate="entry"
        className="flex items-center justify-around pt-24 md:justify-center md:pt-3 "
      >
        <Logo stroke="#50D890" height="70.5px" width="50.2px" strokeWidth="1" />
        <h1
          className="font-title font-medium uppercase text-4xl md:text-6xl md:leading-none 
        bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent md:ml-2 "
        >
          GreenPrints
        </h1>
      </motion.div>
      <motion.div
        variants={variantsSubH}
        animate="entry"
        className="text-center pt-3"
      >
        <h3 className="font-subheading font-medium text-2xl text-gray-500 xl:text-3xl">
          A step towards a better future
        </h3>
      </motion.div>

      <div className="pt-8 pb-8 xl:grid xl:grid-cols-2 xl:pt-24 xl:p-2 2xl:p-7 2xl:pt-14">
        <MainPageImage />
        <div className="xl:order-1 xl:place-content-center ">
          <h1 className="font-subheading font-extrabold uppercase text-2xl pr-2 pl-2 md:text-4xl xl:mb-7 xl:text-5xl">
            How heavy is your <span className="text-primary">footprint</span>?
          </h1>
          <p className="font-body text-base text-pretty pt-2 pr-2 pl-2 md:text-xl md:pt-4">
            Flying has a <strong>huge</strong> impact on our planet, producing
            more emissions in a few hours than other activities do in days.
            <br /> <br /> With our flight <strong>footprint</strong> calculator,
            you’ll get a clear view of the carbon cost of each trip, helping you
            make informed decisions for a greener future. Discover the real cost
            of your air travel—and take action to help{" "}
            <strong className="text-primary">protect</strong> our planet.
          </p>
        </div>
      </div>
      <ButtonMain navigate="calculator" />
    </div>
  );
}

export default MainPage;
