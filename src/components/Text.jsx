import { motion } from "framer-motion";
import React from "react";

function Text({ text }) {
  const li = text.split("");
  const elements = li.map((c, i) => (
    <motion.span
      className="inline-block"
      initial={{ y: -100, color: "rgb(250,250,250)" }}
      animate={{ y: 0, color: "rgb(0,0,0)" }}
      transition={{
        duration: 1,
        delay: i * 0.2,
        type: "spring",
        stiffness: 300,
      }}
    >
      {c}
    </motion.span>
  ));
  return (
    <motion.div className="text-5xl overflow-hidden">{elements}</motion.div>
  );
}
export default Text;
