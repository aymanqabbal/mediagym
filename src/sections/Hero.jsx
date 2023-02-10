import React from "react";
import images from "../utils/images";
import AnimatedCharacters from "../components/AnimatedCharacters";
import AnimatedLetters from "../components/Banner";
import Text from "../components/Text";
export default function Hero() {
  return (
    <section
      className="hero h-screen w-screen bg-cover "
      style={{
        backgroundImage: `url(${images[2].url})`,
      }}
    >
      <div className="pt-40  pl-32 w-96">
        <Text text={"hello"} />
        <h1 key={"maintext"} className="text-5xl" data-aos="fade-up">
          THE GIFT YOU ACTUALLY WANT
        </h1>

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
    </section>
  );
}
