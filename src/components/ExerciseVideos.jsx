import React from "react";
// import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div>
      <h3
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </h3>
      <div className="flex flex-row gap-2 ">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video w-64 h-fit "
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="rounded-t-xl w-64"
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <div>
              <h6 className="text-xs w-64" fontWeight={600}>
                {item.video.title}
              </h6>
              <h3 className="text-xs w-64 text-right font-mono">
                {item.video.channelName}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
