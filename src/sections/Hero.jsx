import React from "react";
import images from "../utils/images";
import AnimatedCharacters from "../components/AnimatedCharacters";
import AnimatedLetters from "../components/Banner";
import useInterval from "react-useinterval";
import Text1 from "../components/Text1";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Text from "../components/Text";
export default function Hero() {
  const [word, set] = useState(0);
  const words = ["WANT", "NEED", "LOVE", "DESIRE", "DESERVE"];
  const interval = useInterval(() => {
    word == words.length - 1 ? set(0) : set(word + 1);
    console.log(word);
  }, 2000);
  const last = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, type: "tween" }}
      className="overflow-hidden"
    >
      <Text key={word} text={words[word]} delay={0.2} />
    </motion.div>
  );
  const herotxt = `THE GIFT YOU ACTUALLY `;
  const li = herotxt
    .split(" ")
    .map((w, i) => <Text key={i} text={w} delay={i / 2} />);
  return (
    <motion.section
      initial={{
        // scale: 2,
        opacity: 0,
      }}
      animate={{
        //  scale: 1,
        opacity: 1,
      }}
      transition={{ duration: 0.3 }}
      className="hero h-screen w-screen bg-cover "
      style={{
        backgroundImage: `url(${images[2].url})`,
      }}
    >
      <div className="pt-40  pl-32 w-96">
        <div className="main-text w-max ">
          {li}
          {last}
        </div>
        <h1 className="capitalize mt-5 font-light" data-aos="fade-up">
          Join Now With $0 Initiation. Offer Ends Soon.
        </h1>
        <div data-aos="fade-up" data-aos-duration="4000">
          <button
            href="#"
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center w-60 h-16 mt-6  mr-2 mb-2"
          >
            join now
          </button>
        </div>
      </div>
    </motion.section>
  );
}
