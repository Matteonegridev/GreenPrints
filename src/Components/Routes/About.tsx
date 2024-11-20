import ImageMdAbout from "../../Utils/ImageMdAbout";

import InfoAbout from "../InfoAbout";

function About() {
  return (
    <main className="px-4 py-7 sm:pt-32">
      <h6 className="py-2 text-xl font-headings capitalize font-semibold text-gray-500">
        about us
      </h6>
      <h1 className="font-bold text-4xl py-5 font-headings dark:text-white">
        Our Mission:
      </h1>
      <div className="border border-s-4 dark:border-tertiary border-primary rounded-xl p-4 text-balanced my-4 dark:text-white md:grid md:grid-cols-2">
        <div className="xl:pl-12 pt-4">
          <p className="text-secondary font-subheading text-base font-semibold xl:text-2xl ">
            About GreenPrints
          </p>
          <p className="text-base font-body hyphens-auto pt-3 xl:text-xl  ">
            At <strong>GreenPrints</strong>, we are committed to empowering
            individuals and organizations to make informed, sustainable choices.
            Our mission is to shine a light on the environmental impact of air
            travel by providing accurate CO₂ emissions calculations based on
            flight routes. Whether you're a frequent traveler or planning a
            one-time trip, our easy-to-use platform helps you understand the
            carbon footprint of your journey.
          </p>
        </div>
        <ImageMdAbout />
      </div>
      <InfoAbout />
    </main>
  );
}

export default About;
