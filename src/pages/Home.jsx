import React from "react";

import { useState, useRef } from "react";
import { AddressMap } from "../components/AdressMap";
import Hero from "../sections/Hero";
import Benifits from "../sections/Benifits";
import pagevariants from "../utils/pagestart";
import { AnimatePresence, motion } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();
export default function Home() {
  return (
    <AnimatePresence>
      <motion.section
        className="homePage h-screen z-0"
        {...pagevariants}
        transition={{ duration: 1 }}
      >
        <Hero />
        <Benifits key={"benifits component"} />
        <section className="container w-screen h-screen relative snap-start">
          <div className="map-container absolute z-40 text-white">
            <AddressMap />
          </div>
        </section>
      </motion.section>
    </AnimatePresence>
  );
}
