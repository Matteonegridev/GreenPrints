import { Link } from "react-router-dom";
import ToggleDark from "../Utils/ToggleDark";
import ToggleMenu from "../Utils/ToggleMenu";
import { useCycle } from "framer-motion";
import { useState } from "react";

const menuItems = [
  {
    title: "Main Page",
    href: "/",
  },
  {
    title: "About Us",
    href: "about",
  },
  {
    title: "FAQ",
    href: "faq",
  },
];

function Navbar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const [active, setActive] = useState(false);
  return (
    <>
      <header className="p-4 min-h-[100vh] w-3/4 bg-slate-500">
        <ToggleDark />
        <nav>
          <ToggleMenu
            onToggle={() => {
              setActive((prev) => !prev);
              toggleMobileNav();
            }}
            animate={active ? "open" : "closed"}
          />
          <ul className="flex flex-col gap-4 p-10">
            {menuItems.map((links, i) => (
              <li className="text-xl">
                <Link to={links.href} key={i}>
                  {links.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
