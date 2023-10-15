"use client";

// React
import * as React from "react";
import { useRef } from "react";

// Framer motion
import { motion, useCycle } from "framer-motion";

// Components
import { useDimensions } from "./useDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const NavbarToggle = ({ isWhite = false }: NavbarTypes) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="w-full"
    >
      <motion.div
        className={`absolute bottom-0 right-0 top-0 z-[2] h-screen w-screen ${
          isWhite ? "bg-black-80" : "bg-white-10"
        }`}
        variants={sidebar}
      ></motion.div>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <Navigation toggle={() => toggleOpen()} isWhite={isWhite} />
      </div>
      <MenuToggle toggle={() => toggleOpen()} isWhite={isWhite} />
    </motion.nav>
  );
};
