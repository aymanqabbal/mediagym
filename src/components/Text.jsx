import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";
import { useEffect } from "react";
import { RendersContext } from "../RendersContext";
function Text({ text, delay, k, tdelay }) {
  const li = text.split("");

  const elements = li.map((c, i) => (
    <AnimatePresence key={i}>
      <motion.span
        className="inline-block"
        initial={{
          y: 100,
          opacity: 0,
          transition: { duration: 1 },
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: delay + i * 0.2,
        }}
        key={k + ":" + c + i}
      >
        {c}
      </motion.span>
    </AnimatePresence>
  ));
  return (
    <AnimatePresence key={"animate" + k + "wrapper"}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: tdelay }}
        className="xsm:text-4xl  overflow-hidden sd"
        // key={text + "text" + k}
      >
        <AnimatePresence key={"animate" + k}>{elements}</AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
export default Text;
