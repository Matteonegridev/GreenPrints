import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      mainpage
      <Link
        className="block w-[10rem] py-2 text-center border border-black"
        to={"calculator"}
      >
        Navigate
      </Link>
    </div>
  );
}

export default MainPage;
