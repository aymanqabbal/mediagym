import React from "react";
import images from "../utils/images";
import AnimatedCharacters from "../components/AnimatedCharacters";
import AnimatedLetters from "../components/Banner";
import useInterval from "react-useinterval";
import Text1 from "../components/Text1";
import Test from "../components/Test";
import { animate, AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Text from "../components/Text";
export default function Hero() {
  const [word, set] = useState(0);
  const words = ["WANT", "NEED", "LOVE", "DESIRE", "DESERVE"];
  const interval = useInterval(() => {
    word == words.length - 1 ? set(0) : set(word + 1);
  }, 2000);
  const herotxt = `THE GIFT YOU ACTUALLY`;
  const li = herotxt.split(" ").map((w, i) => (
    <AnimatePresence key={"herotext" + i + w + "animate"}>
      <motion.div
        initial={{ opacity: 0, transition: { duration: 1 } }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        key={"herotext" + i}
      >
        <Text
          key={"text" + w + i}
          k={"text" + w + i}
          text={w}
          tdelay={i / 2}
          delay={i / 2}
        />
      </motion.div>
    </AnimatePresence>
  ));
  const last = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, transition: { duration: 1 } }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        key={"herotext1"}
      >
        <Text key={word} text={words[word]} tdelay={1} delay={0.2} />
      </motion.div>
    </AnimatePresence>
  );
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
      className="hero h-screen w-screen bg-right bg-cover xsm:flex sm:block justify-center items-center"
      style={{
        backgroundImage: `url(${images[0].url})`,
      }}
      key={"text-wrapper-motion"}
    >
      <div className="xsm:pt-16 xsm:pl-8 sm:pt-32 sm:pl-32 ">
        <div className="main-text w-max " key={"text-wrapper"}>
          {li}
          {/* {last} */}
          <Test words={words} />
        </div>
        <h1 className="capitalize font-light mt-20" data-aos="fade-up">
          Join Now With $0 Initiation. Offer Ends Soon.
        </h1>
        <div data-aos="fade-up" data-aos-duration="4000">
          <motion.button
            initial={{
              backgroundColor: "rgb(250,250,250)",
              color: "rgb(0,0,0)",
            }}
            whileHover={{
              scale: 1,
              backgroundColor: "rgb(0,0,0)",
              color: "rgb(250,250,250)",
              transition: { duration: 0.5 },
            }}
            whileTap={{
              scale: 1.1,
              backgroundColor: "rgb(0,0,0)",
              color: "rgb(250,250,250)",
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 0.5 }}
            href="#"
            // text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80
            className="font-medium rounded-lg text-sm px-10 py-2.5 text-center w-60 h-16 mt-6  mr-2 mb-2 "
          >
            join now
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
