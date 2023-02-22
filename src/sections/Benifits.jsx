import React, { useContext } from "react";
import images from "../utils/images";
import { motion } from "framer-motion";
import Card from "./Card";
import { BenifitsContext } from "../BenifitsContext";
export default function Benifits() {
  const { active, set } = useContext(BenifitsContext);

  const imgs = images.map((i, index) => (
    <motion.div
      className="h-screen w-screen bg-cover absolute top-0 left-0 z-0 "
      key={i.id + i + "images" + index}
      initial={{
        opacity: 0,
        scale: 1.1,
        WebkitFilter: "blur(8px)",
        filter: "blur(8px)",
        transition: { duration: 0.7 },
      }}
      animate={{
        backgroundImage: `url(${i.url})`,
        WebkitFilter: "blur(0px)",
        filter: "blur(0px)",
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.7 } }}
      transition={{
        duration: 0.7,
        WebkitFilter: "blur(8px)",
        filter: "blur(8px)",
      }}
    ></motion.div>
  ));
  const cards = [
    {
      h1: "unlimited classes",
      p: "Classes curated and develop ed by the industry's best talent, bringing results through innovation.",
    },
    {
      h1: "Studio Pilatess",
      p: "A purely authentic Pilates experience that strengthens and creates balance in the body.",
    },
    {
      h1: "Personal Training",
      p: " Performance at its highest level with renowned Personal Training.",
    },
  ];
  const cardElements = cards.map((c, i) => (
    <div
      className="lg:p-4 md:w-1/3 sm:w-1/2 w-full mt-10 "
      data-aos="fade-up"
      id="pushup"
      key={c + i + "card-wrapper"}
    >
      <Card key={i + c.h1} h1={c.h1} p={c.p} id={i + 1} />
    </div>
  ));
  return (
    <section
      className="bg-card overflow-hidden bg-black h-screen flex items-center justify-center body-font relative snap-start"
      data-scrollreveal="enter left after 0s over 1s"
      key={"benifits-section"}
    >
      {imgs[active]}
      <div
        key="benifits"
        className="py-10 w-fit flex xsm:overflow-scroll lg:overflow-x-hidden -m-4 text-center"
      >
        {cardElements}
      </div>
    </section>
  );
}
