import React from "react";
import mainImg from "../assets/images/pushup.jpg";
import ringGirl from "../assets/images/ring girl.jpg";
import pushup from "../assets/images/pushup.jpg";
import lockerRoom from "../assets/images/locker room.jpg";
import { useState, useRef } from "react";
import { AddressMap } from "../components/AdressMap";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();
export default function Home() {
  const [background, setBackground] = useState(mainImg);
  const backgroundImg = useRef(null);
  return (
    <section className="homePage h-screen z-0">
      <section className="hero h-screen bg-slate-900 snap-start relative">
        <img
          src={mainImg}
          alt="main image"
          className="object-cover h-screen w-screen zoom-out"
        ></img>
        <div className="absolute top-40  left-32 w-96">
          <h1 className="text-5xl" data-aos="fade-up">
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

      <section
        className="bg-card bg-black h-screen flex items-center justify-center h-screentext-gray-700 body-font relative snap-start"
        data-scrollreveal="enter left after 0s over 1s"
      >
        <img
          src={background}
          ref={backgroundImg}
          alt="main image"
          className="object-cover h-screen w-screen animate-loading img-transition"
        ></img>
        <div className="container px-52 py-24  mx-auto absolute">
          <div className="flex flex-wrap -m-4 text-center">
            <div
              className="p-4 md:w-1/3 sm:w-1/2 w-full "
              data-aos="fade-up"
              id="pushup"
              onMouseOver={() => {
                setBackground(pushup);
              }}
            >
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-125 hover:text-yellow-500">
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
              </div>
            </div>
            <div
              className="p-4 md:w-1/3 sm:w-1/2 w-full "
              data-aos="fade-up"
              id="ring-girl"
              onMouseOver={() => {
                setBackground(ringGirl);
              }}
            >
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-125 hover:text-yellow-500">
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
              </div>
            </div>
            <div
              className="p-4 md:w-1/3 sm:w-1/2 w-full "
              data-aos="fade-up"
              onMouseOver={() => {
                setBackground(lockerRoom);
              }}
              id="locker-room"
            >
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-125 hover:text-amber-600">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container w-screen h-screen relative snap-start">
        <div className="map-container absolute z-40 text-white">
          <AddressMap />
        </div>
      </section>
    </section>
  );
}
