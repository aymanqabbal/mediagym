import React from "react";
import Slideshow from "../components/Slideshow";
export default function About() {
  return (
    <div className="w-screen h-screen bg-black">
      <Slideshow duration={12} />
    </div>
  );
}
