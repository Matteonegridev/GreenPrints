import { Link } from "react-router-dom";
import ToggleDark from "../Utils/ToggleDark";
import { AnimatePresence, motion } from "framer-motion";

type MenuItemProps = {
  menuItems: { title: string; href: string }[];
};

const lineVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  closed: {
    y: "400%",
    opacity: 0,
    transition: {
      ease: "easeIn",
      duration: 0.2,
      delay: 0.1,
    },
  },
};

const lineBelowVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: 0.2,
    },
  },
  closed: {
    y: "500%",
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

function NavbarDesktop({ menuItems }: MenuItemProps) {
  return (
    <>
      <header className="shadow-sm md:flex md:justify-around md:bg-primary md:p-4 xl:flex xl:justify-between">
        <nav className="flex justify-around">
          <ul className="flex flex-row items-center justify-around md:gap-7">
            <AnimatePresence>
              {menuItems.map((links, i) => (
                <motion.li
                  initial="closed"
                  whileHover="open"
                  animate="closed"
                  key={i}
                  className="2xl:hover:ease relative font-subheading text-2xl md:text-4xl md:font-normal md:text-white 2xl:text-3xl 2xl:hover:text-clearDark 2xl:hover:transition-all 2xl:hover:duration-200"
                >
                  <motion.span
                    style={{
                      top: "38px",
                      left: "0",
                      position: "absolute",
                    }}
                    variants={lineVariants}
                    className="line-effect"
                  ></motion.span>
                  <motion.span
                    style={{
                      top: "44px",
                      left: " 15%",
                      transform: "translate(-50%, -50%)",
                      position: "absolute",
                    }}
                    variants={lineBelowVariants}
                    className="line-below"
                  ></motion.span>
                  <Link to={links.href}>{links.title}</Link>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </nav>
        <ToggleDark />
      </header>
    </>
  );
}

export default NavbarDesktop;
