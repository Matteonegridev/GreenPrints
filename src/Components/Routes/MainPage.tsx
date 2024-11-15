import { Link } from "react-router-dom";
import MainPageImage from "../../Utils/MainPageImage";
import Logo from "../../Utils/Logo";

function MainPage() {
  return (
    <div className="pt-8 pr-4 pl-4 h-[100dvh]">
      <div className="flex gap-3 items-center p-1 justify-center ">
        <div className="">
          <Logo stroke="#50D890" height="75px" width="75px" strokeWidth="3" />
        </div>
        <h1 className="font-headings font-extrabold uppercase  text-4xl ">
          Footprint calculator
        </h1>
      </div>
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
      <div className="pb-2">
        <Link
          className="block rounded-md py-2 text-center text-white bg-primary text-xl font-headings uppercase font-bold"
          to={"calculator"}
        >
          Calculate!
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
