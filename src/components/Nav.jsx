import React, { useContext, useState } from "react";
import { animate, AnimatePresence, motion, useCycle } from "framer-motion";
import { NavContext } from "../navContext";
import menuIcon from "./menuIcon.svg";
import MenuButton from "./MenuButton";
const links = [
  { name: "Home", to: "/" },
  { name: "Exercises", to: "/exercises" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];
const buttonVariant = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};
const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};
const sideVariants = {
  closed: {
    height: 0,
    transition: {
      staggerChildren: 0.4,
      staggerDirection: -1,
    },
  },
  open: {
    height: 200,
    transition: {
      staggerChildren: 0.4,
      staggerDirection: 1,
    },
  },
};
export default function App() {
  const [open, cycleOpen] = useCycle(false, true);
  const { nav, setNav } = useContext(NavContext);

  return (
    <div
      className={`flex text-center ${
        open && "flex-col"
      }  md:flex-row justify-between items-center  md:justify-around absolute xsm:bg-black md:bg-transparent z-50 top-0 w-screen  xsm:py-3 xsm:px-20 md:p-0`}
    >
      <a href="/" s>
        MEDIAGYM
      </a>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, width: 0 }}
            animate={{
              height: 600,
              width: "auto",
              transition: { duration: 0.7 },
            }}
            exit={{
              height: 0,
              width: 0,
              transition: { duration: 2 },
            }}
            className="md:hidden flex justify-center items-center   w-full"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to }, id) => (
                <motion.a
                  className={`block mx-auto my-5 ${
                    nav == id && "text-yellow-400"
                  }`}
                  onClick={() => {
                    setNav(id), console.log("id", id, "nav", nav);
                  }}
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="xsm:hidden md:flex justify-center items-center gap-10 xsm:bg-black md:bg-transparent h-20">
        {links.map(({ name, to }, id) => (
          <a
            className={`${nav == id && "text-yellow-400"}`}
            key={id}
            href={to}
            onClick={() => setNav(id)}
          >
            {console.log(nav, "name")}
            {name}
          </a>
        ))}
      </div>

      <div className="md:hidden " onClick={cycleOpen}>
        <motion.svg
          animate={open ? { y: -200 } : { y: 0 }}
          transition={{ duration: 1, bounce: 100 }}
          id="Layer_1 "
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 370.53 306.47"
          width="20px"
        >
          <motion.rect
            className="cls-1 fill-white stroke-red-300"
            style={{
              x: 0.5,
              y: 0.5,
              width: 380,
              height: 68.98,
              rx: 29.69,
            }}
            animate={open ? { rotate: "45deg", y: 100 } : { rotate: "0deg" }}
            transition={{
              duration: 1,
              stiffness: 100,
              bounce: 1000,
              delay: 0.5,
            }}
          />
          <motion.rect
            className="cls-1 fill-white stroke-red-300"
            style={{
              x: 0.5,
              y: 118.01,
              width: 380,
              height: 68.98,
              rx: 29.69,
            }}
            animate={open ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.rect
            className="cls-1 fill-white stroke-red-300"
            style={{
              x: 0.5,
              y: 236.99,
              width: 380,
              height: 68.98,
              rx: 29.69,
            }}
            animate={open ? { rotate: "-45deg", y: 100 } : { rotate: "0deg" }}
            transition={{
              duration: 1,
              stiffness: 100,
              delay: 0.5,
            }}
          />
        </motion.svg>
      </div>
      {/* <motion.button
        className="md:hidden"
        onClick={cycleOpen}
        {...buttonVariant}
      >
        {open ? "close" : "open"}
      </motion.button> */}
    </div>
  );
}
