import React, { useState } from "react";
import images from "../utils/images";
import { animate, AnimatePresence, motion } from "framer-motion";
export default function Benifits() {
  const [index, set] = useState(0);
  const cardHover = {
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(0,0,0)",
    borderRadius: "10%",
    scale: 1.1,
    opacity: 1,
  };
  const imgs = images.map((i) => (
    <motion.div
      className="h-screen w-screen bg-cover absolute top-0 left-0 z-0 "
      key={i.id}
      initial={{
        opacity: 0,
        scale: 1.1,
        WebkitFilter: "blur(8px)",
        filter: "blur(8px)",
      }}
      animate={{
        backgroundImage: `url(${i.url})`,
        WebkitFilter: "blur(0px)",
        filter: "blur(0px)",
        opacity: 1,
        scale: 1,
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.5,
        WebkitFilter: "blur(8px)",
        filter: "blur(8px)",
      }}
    ></motion.div>
  ));
  return (
    <section
      className="bg-card overflow-hidden bg-black h-screen flex items-center justify-center h-screentext-gray-700 body-font relative snap-start"
      data-scrollreveal="enter left after 0s over 1s"
    >
      {imgs[index]}
      <div className="container px-52 py-24  mx-auto absolute">
        <div className="flex flex-wrap -m-4 text-center">
          <div
            className="p-4 md:w-1/3 sm:w-1/2 w-full "
            data-aos="fade-up"
            id="pushup"
            onMouseOver={() => set(1)}
          >
            <motion.div
              className="h-60 w= opacity-80"
              whileHover={cardHover}
              transition={{ type: "spring", duration: 1 }}
            >
              <h1
                className="capitalize mb-6 text-3xl"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                unlimited classes
              </h1>
              <p
                className="font-light"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                Classes curated and develop ed by the industry's best talent,
                <br></br>bringing results through innovation.
              </p>
            </motion.div>
          </div>
          <div
            className="p-4 md:w-1/3 sm:w-1/2 w-full "
            data-aos="fade-up"
            id="ring-girl"
            onMouseOver={() => set(2)}
          >
            <motion.div
              className="h-60 w= opacity-80"
              whileHover={cardHover}
              transition={{ type: "spring", duration: 1 }}
            >
              <h1
                className="capitalize mb-6 text-3xl"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Studio Pilates
              </h1>
              <p
                className="font-light"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                A purely authentic Pilates experience that strengthens and
                creates balance in the body.
              </p>
            </motion.div>
          </div>
          <div
            className="p-4 md:w-1/3 sm:w-1/2 w-full "
            data-aos="fade-up"
            onMouseOver={() => set(3)}
            id="locker-room"
          >
            <motion.div
              className="h-60 w= opacity-80"
              whileHover={cardHover}
              transition={{ type: "spring", duration: 1 }}
            >
              <h1
                className="capitalize mb-6 text-3xl"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Personal Training
              </h1>
              <p
                className="font-light"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                Performance at its highest level with renowned Personal
                Training.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
