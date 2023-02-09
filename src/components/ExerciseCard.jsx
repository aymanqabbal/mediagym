import React from "react";
import { Link } from "react-router-dom";
// import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const ExerciseCard = ({ exercise }) => {
  const [liked, setLike] = useState(false);
  return (
    <div className="exercise-wrapper  text-black text-center">
      <Link
        className="exercise-card rounded-3xl"
        to={`/exercise/${exercise.id}`}
      >
        <img
          className="rounded-3xl"
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
        />
        <h1 className="text-xl font-shrikhand">{exercise.name}</h1>
        <div className="flex justify-between px-7">
          <h5 className="bg-red-300 p-1 rounded-3xl text-xs">
            {exercise.bodyPart}
          </h5>
          <h5 className="text-xs">{exercise.target}</h5>
        </div>
      </Link>
    </div>
  );
};

export default ExerciseCard;
