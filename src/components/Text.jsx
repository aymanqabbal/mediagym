import React from "react";

function Text({ text }) {
  return (
    <div className="bg-green-400 relative">
      <h1 className="textclip w- text-9xl  bg-red-500 font-modak flex border-spacing-5 absolute z-50 top-10">
        media<br></br>gym
      </h1>
      <h1 className="text-9xl text-red-500 font-modak absolute z-0 left-1 top-11">
        media<br></br>gym
      </h1>
    </div>
  );
}
export default Text;
