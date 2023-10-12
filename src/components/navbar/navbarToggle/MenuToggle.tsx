import * as React from "react";
import { motion } from "framer-motion";

//@ts-ignore
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsla(0, 0%, 32%, 1)"
    strokeLinecap="round"
    {...props}
  />
);
//@ts-ignore
export const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    className="bg-transparent relative z-10 ms-auto block h-[50px] w-[50px] cursor-pointer rounded border-none bg-white-10 outline-none"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);