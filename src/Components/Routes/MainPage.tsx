import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="pt-8 pr-4 pl-4">
      <div className="w-[38ch] text-pretty">
        <h1 className="font-headings font-bold italic uppercase text-5xl ">
          How heavy is your <span className="text-primary">footprint</span>?
        </h1>
      </div>
      <div className="pt-8 pb-16  ">
        <p className="font-body text-base text-pretty ">
          Flying has a huge impact on our planet, often producing more emissions
          in a few hours than other activities do in days.
          <br /> With our flight footprint calculator, you’ll get a clear view
          of the carbon cost of each trip, helping you make informed decisions
          for a greener future. Whether you’re a frequent flyer or planning a
          one-time journey, understanding your travel footprint is a powerful
          first step in reducing your impact. Discover the real cost of your air
          travel—and take action to help protect our planet.
        </p>
      </div>

      <Link
        className="block rounded-md py-2 text-center text-white bg-primary text-xl font-headings uppercase font-bold"
        to={"calculator"}
      >
        Calculate!
      </Link>
    </div>
  );
}

export default MainPage;
