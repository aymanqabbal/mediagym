import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Text1({ text }) {
  useEffect(() => console.log("mounted"));
  return (
    <AnimatePresence mode="sync">
      <motion.div
        initial={{ opacity: 0, color: "white" }}
        animate={{ opacity: 1, color: "black" }}
        exit={{ opacity: 0, color: "white" }}
        transition={{ duration: 3 }}
      >
        {text}
      </motion.div>
    </AnimatePresence>
  );
}
