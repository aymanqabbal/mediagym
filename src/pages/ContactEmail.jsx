import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import video from "./video.mp4";
import { motion } from "framer-motion";
import Test from "../components/Test";

export const ContactUs = () => {
  const form = useRef();
  const videoRef = useRef();
  const [sucess, set] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zx5f4la",
        "template_lcypffq",
        form.current,
        "rWgFncj80VfhO-xsF"
      )
      .then(
        (result) => {
          set(true);
        },
        (error) => {
          console.log(error.text);
          set(false);
        }
      );
  };
  return sucess ? (
    <div className="h-screen w-screen flex flex-col justify-center items-center flex-wrap text-center gap-10">
      your message has been sent successfully :)
      <Test words={["thanks", "gracias", "شكرا", "merci"]} />
    </div>
  ) : (
    <div className="container flex xsm:flex-col md:flex-row w-screen h-screen gap-20 pl-24 relative justify-center items-center">
      <div className="xsm:h-auto w-screen md:h-screen mr-5">
        <video src={video} autoPlay loop className="md:h-screen" ref={videoRef}>
          <source type="video/mp4" src="video" />
        </video>
      </div>
      <div className="flex justify-center items-center xsm:w-screen md:w-1/2 xsm:px-20 md:px-0 ">
        <form
          className="flex flex-row flex-wrap justify-center items-center  mx-auto w-full gap-10"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            className=" w-full py-2 px-2 bg-transparent"
            placeholder="full name"
            type="text"
            name="to_name"
          />

          <input
            className="w-full py-2 px-2 bg-transparent"
            placeholder="email"
            type="email"
            name="from_name"
          />
          <textarea
            className=" w-full py-2 px-2 bg-transparent"
            placeholder="message"
            name="message"
          />

          <motion.input
            className="cursor-pointer w-full py-2 px-2 bg-white text-black"
            type="submit"
            value="Send"
            initial={{ y: 0 }}
            whileHover={{
              y: -20,
              // boxShadow: "rgb(250, 250, 250) 0px 7px 29px 0px;",
            }}
            transition={{ duration: 0.5 }}
          />
        </form>
      </div>
    </div>
  );
};
