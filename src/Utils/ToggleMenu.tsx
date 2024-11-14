import { motion, MotionConfig } from "framer-motion";

type ToggleMenuProps = {
  onToggle: () => void;
  animate: string | undefined;
};

function ToggleMenu({ onToggle, animate }: ToggleMenuProps) {
  return (
    <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        onClick={onToggle}
        animate={animate}
        className="relative z-10 bg-white w-16 h-16 rounded-full flex justify-center items-center"
      >
        <motion.span
          variants={{
            open: {
              rotate: "45deg",
              top: ["35%", "50%", "50%"],
            },
            closed: {
              top: ["50%", "50%", "50%", "35%"],
            },
          }}
          style={{
            top: "35%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute w-9 h-[3px] bg-black "
        />
        <motion.span
          variants={{
            open: {
              opacity: 0,
            },
          }}
          style={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute w-9 h-[3px] bg-black "
        />
        <motion.span
          variants={{
            open: {
              rotate: "-45deg",
              top: ["65%", "50%", "50%"],
            },
            closed: {
              top: ["50%", "50%", "50%", "65%"],
            },
          }}
          style={{
            top: "65%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute w-9 h-[3px] bg-black "
        />
      </motion.button>
    </MotionConfig>
  );
}

export default ToggleMenu;
