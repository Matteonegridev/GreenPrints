import { Link } from "react-router-dom";

type ButtonProps = {
  navigate: string;
};

function ButtonMain({ navigate }: ButtonProps) {
  return (
    <div className="pb-5 ">
      <Link
        className=" block rounded-sm py-2 text-center text-white bg-primary text-xl font-headings uppercase font-medium active:scale-[0.97] transition-transform duration-100 ease-in"
        to={navigate}
      >
        Calculate!
      </Link>
    </div>
  );
}

export default ButtonMain;
