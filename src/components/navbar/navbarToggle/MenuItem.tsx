import * as React from "react";

import { motion } from "framer-motion";

import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

//@ts-ignore
export const MenuItem = ({ i, toggle }) => {
  return (
    <>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="m-auto 
        mb-5 w-min cursor-pointer whitespace-nowrap"
      >
        <div className="group relative mb-3" onClick={toggle}>
          <Link
            href="/"
            className="mb-1 inline-block text-body-1 font-normal leading-normal text-black-80 no-underline"
          >
            HOME
            <span className="absolute bottom-0 left-0 h-1 w-0 rounded bg-black-80 transition-all duration-[400ms] group-hover:w-full"></span>
          </Link>
        </div>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="m-auto
        mb-5 w-min cursor-pointer whitespace-nowrap"
      >
        <div className="group relative mb-3" onClick={toggle}>
          <Link
            href="/#case-study"
            className="mb-1 inline-block text-body-1 font-normal leading-normal text-black-80 no-underline"
          >
            CASE STUDY
            <span className="absolute bottom-0 left-0 h-1 w-0 rounded bg-black-80 transition-all duration-[400ms] group-hover:w-full"></span>
          </Link>
        </div>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="m-auto w-min cursor-pointer whitespace-nowrap"
      >
        <div className="group relative mb-3" onClick={toggle}>
          <Link
            href="/#contact"
            className="mb-1 inline-block text-body-1 font-normal leading-normal text-black-80 no-underline"
          >
            CONTACT
            <span className="absolute bottom-0 left-0 h-1 w-0 rounded bg-black-80 transition-all duration-[400ms] group-hover:w-full"></span>
          </Link>
        </div>
      </motion.li>
    </>
  );
};
