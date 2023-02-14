import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export function NotExit() {
  const [show, set] = useState(0);
  const li = [1, 2, 3];
  const ns = li.map((n) => (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        key={n}
        className="w-44 h-44 bg-green-600 rounded-xl"
      >
        {n}
      </motion.div>
    </AnimatePresence>
  ));
  return (
    <div className="relative w-screen h-screen flex flex-col-reverse justify-center items-center">
      <button
        className="bg-purple-600 p-2 rounded"
        onClick={() => {
          show < li.length - 1 ? set(show + 1) : set(0);
          console.log(show);
        }}
      >
        show
      </button>
      {ns[show]}
      {/* <AnimatePresence>
        {show && (
          <motion.div
            className="w-44 h-44 bg-red-500"
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence> */}
      1
    </div>
  );
}
