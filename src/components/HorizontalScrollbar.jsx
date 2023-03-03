import React, { useContext, useEffect, useRef, useState } from "react";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { motion } from "framer-motion";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <h1 onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </h1>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <h1 onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </h1>
//   );
// };

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const containerRef = useRef();
  return (
    <div className="xsm:w-72 msm:w-full">
      <div
        className="flex justify-start items-center  overflow-scroll scroll-smooth m-auto"
        ref={containerRef}
      >
        {/* <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}> */}
        {data.map((item) => (
          <motion.div
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            className="mx-0 my-4 "
            initial={{ x: 0, scroll }}
          >
            {bodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </motion.div>
        ))}
      </div>
      <div className="arrows flex justify-end gap-4">
        <motion.img
          src={LeftArrowIcon}
          alt="right"
          animate={{ y: 0 }}
          whileHover={{ y: -10 }}
          className="cursor-pointer"
          onMouseDown={() => {
            containerRef.current.scrollLeft =
              containerRef.current.scrollLeft - 200;
          }}
        ></motion.img>
        <motion.img
          animate={{ y: 0 }}
          whileHover={{ y: -10 }}
          src={RightArrowIcon}
          alt="right"
          onMouseDown={() => {
            containerRef.current.scrollLeft =
              containerRef.current.scrollLeft + 200;
          }}
          className="cursor-pointer"
        ></motion.img>
      </div>
      {/* </ScrollMenu> */}
    </div>
  );
};

export default HorizontalScrollbar;
