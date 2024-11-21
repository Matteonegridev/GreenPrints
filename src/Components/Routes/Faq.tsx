import { Link } from "react-router-dom";
import FaqQuestion from "../FaqQuestion";

const faq = [
  {
    id: 1,
    question: "What is a carbon footprint?",
    answer:
      "A carbon footprint measures the total greenhouse gases (GHGs) you emit directly or indirectly, typically expressed in carbon dioxide equivalent (CO2e). It includes activities like driving, using electricity, and consuming goods and services.",
  },
  {
    id: 2,
    question: "Why should I calculate my footprint?",
    answer:
      "Understanding your footprint helps you identify areas where you can reduce emissions, contribute to combating climate change, and adopt a more sustainable lifestyle.",
  },
  {
    id: 3,
    question: "Is the data I provide safe and private?",
    answer:
      "Yes, your data is securely stored and only used for calculating your footprint. We adhere to strict data privacy standards and do not share your information with third parties.",
  },
  {
    id: 4,
    question: "What’s the average carbon footprint per person?",
    answer:
      "The global average is about 4.5 tons of CO2e per year, but it varies widely by country. For example, the U.S. average is approximately 16 tons, while some countries are under 1 ton.",
  },
  {
    id: 5,
    question: "How does reducing my footprint help the planet?",
    answer:
      "Reducing your footprint decreases the amount of GHGs released into the atmosphere, helping to mitigate climate change, preserve ecosystems, and improve air quality.",
  },
  {
    id: 6,
    question: "What’s the difference between carbon-neutral and net-zero?",
    answer:
      "Carbon-neutral: Balancing emissions with offsets. Net-zero: Minimizing emissions as much as possible and offsetting the rest.",
  },
  {
    id: 7,
    question: "What is Carbon Insetting?",
    answer:
      "Insetting refers to the financing of climate protection projects along a company’s own value chain that demonstrably reduce or sequester emissions and thereby achieve a positive impact on the communities, landscapes and ecosystems associated with the value chain.",
  },
  {
    id: 8,
    question: "What footprint result should I be aiming for?",
    answer:
      "To avoid the worst impacts of climate change, we need to keep global warming below 1.5°C. If everyone on the planet were allocated a ‘fair share’ of global carbon emissions, each person should have a footprint of around 1 tonne by the year 2050 – as the “government spend” is already more than twice this level it is obviously not possible yet to get to this level.",
  },
  {
    id: 9,
    question: "What is climate change?",
    answer:
      "Climate change refers to long-term shifts in temperatures and weather patterns, primarily caused by human activities like burning fossil fuels, deforestation, and industrial processes, which increase greenhouse gas emissions.",
  },
  {
    id: 10,
    question: "How does my carbon footprint affect climate change?",
    answer:
      "Every activity contributing to your carbon footprint releases greenhouse gases into the atmosphere, trapping heat and causing global temperatures to rise. Reducing your emissions helps mitigate these effects.",
  },
];

function Faq() {
  return (
    <main className="px-2 pt-32">
      <h1 className="text-center font-headings font-black pt-5 text-3xl dark:text-white xl:text-4xl xl:pb-6">
        Frequently Asked Question
      </h1>
      <div className="pl-3 pt-8 flex justify-start gap-3 [&>*]:dark:text-tertiary [&>*]:text-secondary">
        <Link to={"/calculator"}>
          <i className="fa-solid fa-chevron-left text-xl xl:text-3xl"></i>
          <span className="font-subheading uppercase text-2xl font-semibold ml-3 xl:text-3xl">
            Calculate!
          </span>
        </Link>
      </div>
      <section className=" dark:text-white px-4 py-4">
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
