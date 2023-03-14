import React from "react";
import { motion } from "framer-motion";
import images from "../utils/images";
export default function Slideshow(props) {
  let animation = [];
  const imgs = images.map((i, index) => (
    <div
      className="w-full h-full  bg-purple-800"
      key={index}
      style={{ backgroundImage: `url(${i.url})` }}
    >
      {animation.push(`${-1 * index * 100}vh`)}
      {animation.push(`${-1 * index * 100}vh`)}
    </div>
  ));
  console.log("cock");
  return (
    <div className="h-screen w-screen overflow-hidden">
      <motion.div
        className="w-1/2 h-full"
        initial={{ y: "0vh" }}
        animate={{ y: [...animation, "0vh"] }}
        transition={{
          repeat: Infinity,
          duration: props.duration,
          stiffness: 4,
        }}
      >
        {imgs}
      </motion.div>
    </div>
  );
}
