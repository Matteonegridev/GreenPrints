import { Link } from "react-router-dom";
import ToggleDark from "../Utils/ToggleDark";

function Navbar() {
  return (
    <>
      <header className="p-4">
        <nav>
          <ToggleDark />
          <Link to={"/"}>Main</Link>
          <Link to={"calculator"}>Calculator</Link>
          <Link to={"faq"}>About</Link>
          <Link to={"about"}>FAQ</Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
