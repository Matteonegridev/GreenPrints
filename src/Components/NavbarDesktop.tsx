import { Link } from "react-router-dom";
import ToggleDark from "../Utils/ToggleDark";

type MenuItemProps = {
  menuItems: { title: string; href: string }[];
};

function NavbarDesktop({ menuItems }: MenuItemProps) {
  return (
    <>
      <header className="md:bg-primary md:p-6 xl:flex xl:justify-between md:flex md:justify-around">
        <nav className="flex justify-around ">
          <ul className="flex flex-row justify-around items-center md:gap-7 ">
            {menuItems.map((links, i) => (
              <li
                key={i}
                className="font-subheading text-2xl md:text-4xl md:font-normal  md:text-white 2xl:text-3xl 2xl:hover:text-clearDark 2xl:hover:transition-all 2xl:hover:duration-200 2xl:hover:ease "
              >
                <Link to={links.href}>{links.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ToggleDark />
      </header>
    </>
  );
}

export default NavbarDesktop;
