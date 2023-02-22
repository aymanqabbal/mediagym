import React, { useContext } from "react";
import { motion } from "framer-motion";
import { BenifitsContext } from "../BenifitsContext";
export default function Card({ h1, p, id }) {
  const { active, set } = useContext(BenifitsContext);
  const cardHover = {
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(0,0,0)",
    borderRadius: "10%",
    scale: 1.05,
    opacity: 1,
    transition: { duration: 0.7 },
  };
  const cardTap = {
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(0,0,0)",
    borderRadius: "10%",
    scale: 1.1,
    opacity: 1,
    transition: { duration: 0.7 },
  };
  return (
    <motion.div
      className="xsm:h-fit w-80 mx-auto    opacity-80 px-8 pb-10 pt-2"
      whileHover={cardHover}
      onMouseOver={() => {
        set(id);
      }}
      animate={active == id ? cardHover : {}}
      onClick={() => set(id)}
      transition={{ duration: 0.7 }}
      //   initial={{ transition: { duration: 0.7 } }}
      //   animate={{ transition: { duration: 0.7 } }}
    >
      <h1
        className="capitalize mb-6 xsm:text-2xl text-3xl"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {h1}
      </h1>
      <p className="font-light" data-aos="fade-up" data-aos-duration="2500">
        {p}
      </p>
    </motion.div>
  );
}
