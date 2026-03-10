import { assets } from "@assets/assets";
import React from "react";
import RadioInput from "./videoExperience/RadioInput";
import VideoExperienceInfo from "./videoExperience/VideoExperienceInfo";

const VideoExperienceOnboarding = () => {
  return (
    <div className=" min-h-[90vh] h-auto w-full p-4 flex flex-col gap-8 ">
      <img
        className="md:hidden w-full max-w-100 object-cover object-center mx-auto"
        src={assets.video_experience_cover}
        alt="teaching_experience_cover"
      />
      <VideoExperienceInfo />
      <div className="flex w-full max-md:flex-col-reverse items-center md:items-start md:gap-24 mt-8">
        <RadioInput />
        <img
          className="hidden md:block w-full max-w-100 object-cover object-center"
          src={assets.video_experience_cover}
          alt="teaching_experience_cover"
        />
      </div>
    </div>
  );
};

export default VideoExperienceOnboarding;
