import FooterForm from "../Utils/FooterForm";
import Logo from "../Utils/Logo";
import Wave from "../Utils/Wave";

function Footer() {
  return (
    <footer className="relative mt-10 bg-primary">
      <Wave className="absolute inset-x-0 top-0 -translate-y-1 overflow-hidden" />
      <div className="flex flex-col px-5 pt-16">
        <div className="flex items-center justify-center">
          <Logo
            width="40px"
            height="40px"
            strokeWidth="1"
            stroke="#fff"
            fill="#fff"
          />
          <span className="font-title text-2xl text-white">GreenPrints</span>
        </div>
        <FooterForm />
      </div>
      <div className="py-5 text-center">
        <span className="font-subheading text-sm">
          © 2024 Copyright: GreenPrints{" "}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
