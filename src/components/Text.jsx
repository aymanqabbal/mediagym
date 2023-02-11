import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
function Text({ text, delay }) {
  const li = text.split("");
  useEffect(() => {
    return console.log("dismounted");
  });
  const elements = li.map((c, i) => (
    <AnimatePresence mode="wait">
      <motion.span
        className="inline-block"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{
          duration: 0.3,
          delay: delay + i * 0.1,
        }}
      >
        {c}
      </motion.span>
    </AnimatePresence>
  ));
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: delay }}
        className="xsm:text-4xl sm:text-5xl overflow-hidden"
      >
        {elements}
      </motion.div>
    </AnimatePresence>
  );
}
export default Text;
