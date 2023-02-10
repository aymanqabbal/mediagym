import React from "react";
import mainImg from "../assets/images/pushup.jpg";
import ringGirl from "../assets/images/ring girl.jpg";
import pushup from "../assets/images/pushup.jpg";
import lockerRoom from "../assets/images/locker room.jpg";
import { useState, useRef } from "react";
import { AddressMap } from "../components/AdressMap";
import Hero from "../sections/Hero";
import Benifits from "../sections/Benifits";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();
export default function Home() {
  const [background, setBackground] = useState(mainImg);
  const backgroundImg = useRef(null);
  return (
    <section className="homePage h-screen z-0">
      <Hero />
      <Benifits />
      <section className="container w-screen h-screen relative snap-start">
        <div className="map-container absolute z-40 text-white">
          <AddressMap />
        </div>
      </section>
    </section>
  );
}
