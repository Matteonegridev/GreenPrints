import { Link } from "react-router-dom";

type ButtonProps = {
  navigate: string;
};

function ButtonMain({ navigate }: ButtonProps) {
  return (
    <div className="pb-5 xl:w-[15rem] xl:pt-5 md:pt-6 sm:pt-6 ">
      <Link
        className=" block rounded-sm py-2 text-center text-white bg-primary text-xl font-headings uppercase font-medium active:scale-[0.97] transition-transform duration-100 ease-in xl:text-xl  "
        to={navigate}
      >
        Calculate!
      </Link>
    </div>
  );
}

export default ButtonMain;
