import { Link } from "react-router-dom";
import FaqQuestion from "../FaqQuestion";
import { useTranslation } from "react-i18next";

function Faq() {
  const { t } = useTranslation("faq");

  const faq = [
    {
      id: 1,
      question: t("one.question"),
      answer: t("one.answer"),
    },
    {
      id: 2,
      question: t("two.question"),
      answer: t("two.answer"),
    },
    {
      id: 3,
      question: t("three.question"),
      answer: t("three.answer"),
    },
    {
      id: 4,
      question: t("four.question"),
      answer: t("four.answer"),
    },
    {
      id: 5,
      question: t("five.question"),
      answer: t("five.answer"),
    },
    {
      id: 6,
      question: t("six.question"),
      answer: t("six.answer"),
    },
    {
      id: 7,
      question: t("seven.question"),
      answer: t("seven.answer"),
    },
    {
      id: 8,
      question: t("eight.question"),
      answer: t("eight.answer"),
    },
    {
      id: 9,
      question: t("nine.question"),
      answer: t("nine.answer"),
    },
    {
      id: 10,
      question: t("ten.question"),
      answer: t("ten.answer"),
    },
  ];

  return (
    <main className="px-2 pt-32">
      <h1 className="pt-5 text-center font-headings text-3xl font-black xl:pb-6 xl:text-4xl dark:text-white">
        {t("titleFaq")}
      </h1>
      <div className="flex justify-start gap-3 pl-3 pt-8 [&>*]:text-secondary [&>*]:dark:text-tertiary">
        <Link to={"/calculator"}>
          <i className="fa-solid fa-chevron-left text-xl xl:text-3xl"></i>
          <span className="font-subHeadings ml-3 text-2xl font-semibold uppercase xl:text-3xl">
            {t("calcButtonFaq")}
          </span>
        </Link>
      </div>
      <section className="px-4 py-4 dark:text-white">
        {faq.map((faq) => (
          <FaqQuestion
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </section>
    </main>
  );
}

export default Faq;
