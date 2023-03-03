import React from "react";
// import Icon from "../assets/icons/gym.png";
import leg from "../assets/parts/leg.png";
import all from "../assets/parts/all.png";
import back from "../assets/parts/back.png";
import chest from "../assets/parts/chest.png";
import forearm from "../assets/parts/forearm.png";
import calves from "../assets/parts/calves.png";
import cardio from "../assets/parts/cardio.png";
import neck from "../assets/parts/neck.png";
import shoulder from "../assets/parts/shoulder.png";
import biceps from "../assets/parts/biceps.png";
import abs from "../assets/parts/abs.png";
const parts = {
  all: all,
  back: back,
  cardio: cardio,
  chest: chest,
  "lower arms": forearm,
  "lower legs": calves,
  neck: neck,
  shoulders: shoulder,
  "upper arms": biceps,
  "upper legs": leg,
  waist: abs,
};
const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <div
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card cursor-pointer w-44 border border-black"
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img
      src={parts[item]}
      alt="dumbbell"
      height="64px"
      width="64px"
      className="object-cover m-auto"
    />
    <h1 className="text-red-500 text-xl border border-black text-center capitalize  w-full">
      {item}
    </h1>
  </div>
);

export default BodyPart;
