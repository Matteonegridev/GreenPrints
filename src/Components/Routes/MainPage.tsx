import MainPageImage from "../../Utils/MainPageImage";
import Logo from "../../Utils/Logo";
import ButtonMain from "../../Utils/ButtonMain";
import { motion } from "framer-motion";

const variantsDiv = {
  entry: {
    opacity: [0, 0, 0, 1],
    x: ["-100%", "0%"],
    delay: 1.2,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function MainPage() {
  return (
    <div className="pt-8 pr-4 pl-4 h-[100dvh] dark:text-white">
      <motion.div
        variants={variantsDiv}
        animate="entry"
        className="flex gap-3 items-center justify-center pl-2"
      >
        <div>
          <Logo stroke="#50D890" height="70px" width="70px" strokeWidth="3" />
        </div>
        <h1 className="font-headings font-medium uppercase text-4xl ">
          Footprint calculator
        </h1>
      </motion.div>
      <div className="pt-8 pb-8 ">
        <MainPageImage />
        <h1 className="font-subHeadings font-extrabold uppercase italic text-xl pr-2 pl-2 ">
          How heavy is your <span className="text-primary">footprint</span>?
        </h1>
        <p className="font-body text-base text-pretty pt-2 pr-2 pl-2">
          Flying has a <strong>huge</strong> impact on our planet, producing
          more emissions in a few hours than other activities do in days.
          <br /> <br /> With our flight <strong>footprint</strong> calculator,
          you’ll get a clear view of the carbon cost of each trip, helping you
          make informed decisions for a greener future. Discover the real cost
          of your air travel—and take action to help{" "}
          <strong className="text-primary">protect</strong> our planet.
        </p>
      </div>
      <ButtonMain navigate="calculator" />
    </div>
  );
}

export default MainPage;
