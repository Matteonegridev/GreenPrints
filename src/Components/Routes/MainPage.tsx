import MainPageImage from "../../Utils/MainPageImage";
import Logo from "../../Utils/Logo";
import ButtonMain from "../../Utils/ButtonMain";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";

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
  const { t } = useTranslation("main");

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
        <h3 className="font-subHeadings text-2xl font-medium text-gray-500 xl:text-3xl 2xl:text-2xl">
          {t("entranceMessage")}
        </h3>
      </motion.div>

      <div className="pb-8 pt-8 xl:grid xl:grid-cols-2 xl:p-2 xl:pt-24 2xl:p-7 2xl:pt-14">
        <MainPageImage />
        <div className="xl:order-1 xl:place-content-center 2xl:pl-20">
          <h1 className="mb-1 pl-2 pr-2 font-headings text-2xl font-extrabold uppercase md:text-4xl xl:text-5xl 2xl:text-6xl">
            <Trans
              i18nKey="mainTitle"
              components={{
                span: <span className="text-primary" />,
              }}
            />
          </h1>
          <p className="text-pretty pl-2 pr-2 font-body text-base md:pt-4 md:text-xl 2xl:text-base">
            <Trans
              i18nKey="mainParagraph"
              components={{
                b: <strong className="text-primary" />,
              }}
            />
          </p>
          <ButtonMain navigate="calculator" />
        </div>
      </div>
    </main>
  );
}

export default MainPage;
