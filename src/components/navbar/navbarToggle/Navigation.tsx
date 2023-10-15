import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

//@ts-ignore
export const Navigation = ({ toggle, isWhite }) => (
  <motion.ul
    variants={variants}
    className="absolute left-1/2 top-12 z-10 -translate-x-1/2 list-none px-0"
  >
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} toggle={toggle} isWhite={isWhite} />
    ))}
  </motion.ul>
);

const itemIds = [0];
