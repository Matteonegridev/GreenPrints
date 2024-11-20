import { Link } from "react-router-dom";
import ToggleDark from "../Utils/ToggleDark";

type MenuItemProps = {
  menuItems: { title: string; href: string }[];
};

function NavbarDesktop({ menuItems }: MenuItemProps) {
  return (
    <>
      <header className="md:bg-primary md:p-6">
        <nav className="flex justify-around">
          <ul className="flex flex-row justify-around items-center md:gap-7 ">
            {menuItems.map((links, i) => (
              <li
                key={i}
                className="font-subheading text-2xl md:text-4xl md:font-normal  md:text-white"
              >
                <Link to={links.href}>{links.title}</Link>
              </li>
            ))}
          </ul>
          <ToggleDark />
        </nav>
      </header>
    </>
  );
}

export default NavbarDesktop;
