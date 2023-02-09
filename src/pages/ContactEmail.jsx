import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Text from "../components/Text";
import gif from "../assets/giphy.gif";

export const ContactUs = () => {
  const form = useRef();

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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="flex flex-row-reverse
    "
    >
      <form
        className="flex flex-row flex-wrap w-14 justify-center items-center mt-16 mx-auto"
        ref={form}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input className="text-black" type="text" name="to_name" />
        <label>Email</label>
        <input className="text-black" type="email" name="from_name" />
        <label>Message</label>
        <textarea className="text-black" name="message" />
        <input className="cursor-pointer" type="submit" value="Send" />
      </form>
    </div>
  );
};
