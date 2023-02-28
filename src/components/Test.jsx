import React from "react";
import { motion, useCycle } from "framer-motion";
import { useState } from "react";

export default function Test(props) {
  const nums = props.words;
  const animate = [];
  const [active, set] = useState(false);
  for (let n in nums) {
    animate.push(-n * 2.5 + "rem");
  }
  animate.push("0rem");
  console.log(animate);
  return (
    <motion.div
      className="container overflow-hidden  text-4xl w-min "
      initial={{ height: "0rem", opacity: 0 }}
      animate={{ height: "2.5rem", opacity: 1 }}
      transition={{ duration: 1, delay: 3 }}
    >
      <motion.div
        className="words relative"
        animate={!active ? { y: animate, scale: 1 } : {}}
        transition={!active && { repeat: Infinity, duration: 8 }}
        onMouseOver={() => set(true)}
        onMouseOut={() => set(false)}
      >
        {nums.map((n) => (
          <motion.h1
            whileHover={{
              backgroundColor: "black",
            }}
          >
            {n}
          </motion.h1>
        ))}
      </motion.div>
    </motion.div>
  );
}
