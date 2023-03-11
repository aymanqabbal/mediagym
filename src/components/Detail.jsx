import React from "react";
// import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
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

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: parts[bodyPart],
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="flex xsm:flex-col lg:flex-row justify-center items-center mt-6 p-14">
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="detail-image xsm:w-full  sm:w-1/2 h-fit rounded-3xl "
      />
      <div className="p-5 text-center">
        <h1 className="font-shrikhand text-7xl text-red-500">{name}</h1>
        <h3>
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </h3>
        <div className="extradetails flex justify-center  gap-10 mt-8">
          {extraDetail?.map((item, i) => (
            <div key={i}>
              <button
                sx={{
                  background: "#FFF2DB",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ width: "50px", height: "50px" }}
                />
              </button>
              <h1 className="capitalize">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
