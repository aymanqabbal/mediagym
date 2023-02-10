import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import useInterval from "react-useinterval";
import images from "../utils/images";
export default function App() {
  const [index, set] = useState(0);
  const increment = () => {
    set((state) => (state + 1) % images.length);
  };
  useInterval(increment, 1000);

  return (
    <motion.div
      className="w-full h-full "
      initial={{
        backgroundImage: `url(${images[index].url})`,
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        backgroundImage: `url(${images[index].url})`,
        scale: 1,
        transition: { duration: 5 },
      }}
      transition={{ duration: 5 }}
      exit={{ opacity: 0, scale: 1.1 }}
    ></motion.div>
  );
}
