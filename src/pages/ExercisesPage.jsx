import React, { useState } from "react";
// import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
// import SearchExercises from "../components/SearchExercises";
// import HeroBanner from "../components/HeroBanner";
// import Navbar from "../components/Navbar";
const Home = () => {
  const [exercises, setExercises] = useState(new Array());
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <section className="bg-black w-screen h-screen pt-6 overflow-x-hidden">
      {/* <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      /> */}
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </section>
  );
};
export default Home;
