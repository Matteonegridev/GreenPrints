import { useTranslation } from "react-i18next";

function InfoAbout() {
  const { t } = useTranslation("about");

  const infoUsers = [
    {
      id: 0,

      stat: "12,345+",
      small: t("stats.first"),
    },
    {
      id: 1,

      stat: "150,000+ kg of CO₂",
      small: t("stats.second"),
    },
    {
      id: 2,

      stat: "25,678+",
      small: t("stats.third"),
    },
    {
      id: 3,

      stat: "70%",
      small: t("stats.fourth"),
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-4 px-4 md:place-items-center md:gap-6 xl:flex xl:justify-evenly">
      {infoUsers.map((info) => (
        <div
          className="flex flex-col gap-2 rounded-lg bg-white p-2 text-center shadow-md transition-all duration-200 ease-in-out md:min-h-[120px] md:w-[300px] xl:p-1 2xl:cursor-pointer 2xl:hover:-translate-y-1 2xl:hover:shadow-xl dark:bg-clearDark"
          key={info.id}
        >
          <h1 className="font-titleText text-xl text-primary md:pt-2 xl:text-2xl dark:text-tertiary">
            {info.stat}
          </h1>
          <small className="font-textBody mt-auto flex-grow-0 text-clearDark md:flex-grow md:place-content-center md:leading-none dark:text-white">
            {info.small}
          </small>
        </div>
      ))}
    </section>
  );
}

export default InfoAbout;
