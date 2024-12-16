import { Trans, useTranslation } from "react-i18next";
import ImageMdAbout from "../../Utils/ImageMdAbout";

import InfoAbout from "../InfoAbout";

function About() {
  const { t } = useTranslation("about");

  return (
    <main className="px-4 py-7 sm:pt-32 xl:px-8">
      <h6 className="font-headingsText py-2 text-xl font-semibold capitalize text-gray-500">
        {t("about")}
      </h6>
      <h1 className="font-headingsText py-5 text-4xl font-bold dark:text-white">
        {t("ourMission")}
      </h1>
      <div className="text-balanced my-4 rounded-xl border border-s-4 border-primary p-4 md:grid md:grid-cols-2 2xl:m-auto 2xl:w-[80%] 2xl:border-none dark:border-tertiary dark:text-white">
        <div className="pt-4 xl:pl-12 2xl:pl-2">
          <p className="font-subheading text-base font-semibold text-secondary xl:text-2xl">
            {t("aboutGreenprints")}
          </p>
          <p className="font-textBody hyphens-auto text-pretty pt-3 text-base">
            <Trans i18nKey="mainText" ns="about" />
          </p>
        </div>
        <ImageMdAbout />
      </div>
      <InfoAbout />
    </main>
  );
}

export default About;
