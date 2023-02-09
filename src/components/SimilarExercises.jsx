import React from "react";
// import { Typography, Box, Stack } from '@mui/material';

// import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div className="lg:mt-6">
    <h3 className="mb-12">
      Similar{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Target Muscle
      </span>{" "}
      exercises
    </h3>
    <div className="p2 flex flex-row relative">
      {targetMuscleExercises.length !== 0 ? (
        {
          /* <HorizontalScrollbar data={targetMuscleExercises} /> */
        }
      ) : (
        <Loader />
      )}
    </div>
    <h3 className="mb3">
      Similar{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Equipment
      </span>{" "}
      exercises
    </h3>
    <div className="flex flex-row relative p-2">
      {equipmentExercises.length !== 0 ? (
        {
          /* <HorizontalScrollbar data={equipmentExercises} /> */
        }
      ) : (
        <Loader />
      )}
    </div>
  </div>
);

export default SimilarExercises;
