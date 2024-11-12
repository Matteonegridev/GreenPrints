import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <nav>
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
