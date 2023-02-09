import React from "react";
// import Register from "./Register";
import gif from "../assets/giphy.gif";
export default function Contact() {
  return (
    <section className="contact text-white w-screen h-screen lg:pt-24 ">
      <div className="py-8 lg:py-16 px-2 mt-20 mx-auto max-w-screen-lg flex items-center justify-center ">
        <div className="lg:w-1/2">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
        </div>
        <form
          action="#"
          className="lg:w-1/2 space-y-8 p-6 text-center text-black"
        >
          <div>
            <input
              name="fullName"
              className="ml-6 w-full mb-6 py-2 px-2"
              placeholder="Full Name"
            ></input>
            <input
              name="email"
              placeholder="Email"
              className="ml-6 w-full mb-6 py-2 px-2"
            ></input>
            <textarea
              name="message"
              placeholder="Message"
              className="ml-6 w
              -full h-48 px-2"
            ></textarea>
          </div>
        </form>
      </div>
      {/* <Register /> */}
    </section>
  );
}
