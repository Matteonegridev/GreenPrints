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
  const mobileSize = window.innerWidth < 756;
  const [isMobile, setIsMobile] = useState(mobileSize);

  // funzione che calcola il resize:
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 756);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    toggleActive(0);
  };

  return (
    <>
      {isMobile ? (
        <header className="p-5 bg-primary flex justify-between items-center">
          <ToggleMenu
            onToggle={() => toggleActive()}
            animate={active ? "open" : "closed"}
          />
          <motion.nav
            initial="closed"
            animate={active ? "open" : "closed"}
            variants={variantsNav}
            className="fixed w-3/4 left-0 -bottom-1 top-0 bg-dark z-10 "
            style={{
              boxShadow: active
                ? "3px 0px 20px 5px rgba(0, 0, 0, 0.3)"
                : "none",
            }}
          >
            <motion.ul
              variants={variantsUl}
              animate={active ? "open" : "closed"}
              className=" flex flex-col gap-12 py-48 px-5"
            >
              {menuItems.map((links, i) => (
                <motion.li
                  key={i}
                  variants={variantsLi}
                  className="w-[10ch] text-white border-b border-white text-5xl font-semibold font-subHeadings pt-6 pb-4"
                >
                  <Link onClick={handleClick} to={links.href} key={i}>
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
