import React from "react";
import { useEffect, useState } from "react";
// import Pagination from "@mui/material/Pagination";
// import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import SearchExercises from "./SearchExercises";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  let numOfPages = Math.ceil(exercises.length / exercisesPerPage);
  let pages = [];
  let j = 0;
  for (let i = currentPage; i <= numOfPages; i++) {
    j++;
    if (j < 5) {
      pages.push(
        <li
          onClick={() => setCurrentPage(i)}
          class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {i}
        </li>
      );
    } else {
      break;
    }
  }
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div className="mt-5" id="exercises">
      {/* <h3 className="mb-6">Showing Results</h3> */}
      <div className="flex flex-row flex-wrap justify-center gap-7">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div>
        {exercises.length > 9 && (
          <nav
            aria-label="Pagination"
            className="w-screen flex justify-center my-10"
          >
            <ul className="inline-flex -space-x-px">
              <li
                onClick={() => setCurrentPage(1)}
                href="#"
                class="px-3 py-2  leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                back
              </li>
              {pages}
              <li
                onClick={() => setCurrentPage(currentPage + 1)}
                href="#"
                class="px-3 py-2  leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Exercises;
