import { useEffect, useState } from "react";
import FooterForm from "../Utils/FooterForm";
import Logo from "../Utils/Logo";
import Wave from "../Utils/Wave";

function Footer() {
  const measures = window.innerWidth > 1405;
  const [isWindow, setIsWindow] = useState(measures);

  useEffect(() => {
    const handleResize = () => setIsWindow(window.innerWidth > 1405);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="relative mt-10 bg-primary xl:h-96 2xl:h-fit">
      <Wave className="absolute inset-x-0 top-0 -translate-y-1 overflow-hidden" />
      <div className="flex flex-col px-5 pt-16 xl:flex-row xl:justify-around xl:pt-24 2xl:pt-44">
        <div className="flex items-center justify-center">
          <Logo
            width={isWindow ? "65px" : "40px"}
            height={isWindow ? "65px" : "40px"}
            strokeWidth="1"
            stroke="#fff"
            fill="#fff"
          />
          <span className="font-title text-2xl text-white xl:text-4xl 2xl:text-5xl">
            GREENPRINTS
          </span>
        </div>
        <FooterForm />
      </div>
      <div className="py-5 text-center text-gray-600 xl:mt-24 xl:py-0 2xl:py-5">
        <span className="font-subheading text-sm 2xl:text-base">
          © 2024 Copyright: GreenPrints{" "}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
