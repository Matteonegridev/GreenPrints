import { Link } from "react-router-dom";
import ToggleDark from "../Utils/ToggleDark";

type MenuItemProps = {
  menuItems: { title: string; href: string }[];
};

function NavbarDesktop({ menuItems }: MenuItemProps) {
  return (
    <>
      <header>
        <nav className="flex justify-around">
          <ul className="flex flex-row justify-around items-center">
            {menuItems.map((links, i) => (
              <li className="font-subHeadings text-2xl">
                <Link to={links.href} key={i}>
                  {links.title}
                </Link>
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
