import { Link } from "react-router-dom";
import ToggleDark from "../Utils/ToggleDark";
import ToggleMenu from "../Utils/ToggleMenu";
import { motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";

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
const variantsNav = {
  open: {
    x: "0",
    transition: { duration: 0.5, when: "beforeChildren" },
  },
  closed: {
    x: "-100%",
    transition: { duration: 0.5, when: "afterChildren", delay: 0.5 },
  },
};

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.4 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const variantsLi = {
  open: { opacity: 1, x: "0", transition: { duration: 0.5 } },
  closed: { opacity: 0, y: "20px", transition: { duration: 0.5 } },
};

function Navbar() {
  const [active, toggleActive] = useCycle(false, true);
  const mobileSize = window.innerWidth < 768;
  const [isMobile, setIsMobile] = useState(mobileSize);

  // funzione che calcola il resize:
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    toggleActive(0);
  };

  return (
    <>
      {isMobile ? (
        <header className="fixed left-0 right-0 z-10 flex items-center justify-between bg-primary p-5">
          <ToggleMenu
            onToggle={() => toggleActive()}
            animate={active ? "open" : "closed"}
          />
          <motion.nav
            initial="closed"
            animate={active ? "open" : "closed"}
            variants={variantsNav}
            className="font-subHeadings fixed -bottom-1 left-0 top-0 z-10 w-3/4 bg-primary"
            style={{
              boxShadow: active
                ? "3px 0px 20px 5px rgba(0, 0, 0, 0.3)"
                : "none",
            }}
          >
            <motion.ul
              variants={variantsUl}
              animate={active ? "open" : "closed"}
              className="flex flex-col gap-12 px-5 py-48"
            >
              {menuItems.map((links, i) => (
                <motion.li
                  key={i}
                  variants={variantsLi}
                  className="border-b border-white py-6 text-5xl font-semibold text-white"
                >
                  <Link
                    onClick={handleClick}
                    to={links.href}
                    key={i}
                    className="block w-[10ch]"
                  >
                    {links.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
          <ToggleDark />
        </header>
      ) : (
        <NavbarDesktop menuItems={menuItems} />
      )}
    </>
  );
}

export default Navbar;
