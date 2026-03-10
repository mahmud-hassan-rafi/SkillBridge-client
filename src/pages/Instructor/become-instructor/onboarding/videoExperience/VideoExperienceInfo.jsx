import React from "react";

const VideoExperienceInfo = () => {
  return (
    <div className="md:mt-4 flex flex-col gap-6">
      <h1 className="text-[clamp(24px,2vw+0.5rem,36px)] font-medium text-gray-900">
        Tell us about your video experience
      </h1>

      <p className="text-gray-900 text-base md:text-lg font-light">
        Most SkillBridge courses are built using video lessons. Tell us about
        your experience with recording videos so we can recommend the best tools
        and resources to help you create engaging learning experiences for your
        students.
      </p>
    </div>
  );
};

export default VideoExperienceInfo;
