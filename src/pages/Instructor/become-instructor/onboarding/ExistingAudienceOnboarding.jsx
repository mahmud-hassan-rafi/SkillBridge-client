import { assets } from "@assets/assets";
import React from "react";
import RadioInput from "./existingAudience/RadioInput";
import ExistingAudienceInfo from "./existingAudience/ExistingAudienceInfo";

const ExistingAudienceOnboarding = () => {
  return (
    <div className=" min-h-[90vh] h-auto w-full p-4 flex flex-col gap-8 ">
      <img
        loading="lazy"
        className="md:hidden w-full max-w-100 object-cover object-center mx-auto"
        src={assets.existing_audience_cover}
        alt="teaching_experience_cover"
      />
      <ExistingAudienceInfo />
      <div className="flex w-full max-md:flex-col-reverse items-center md:items-start md:gap-24 mt-8">
        <RadioInput />
        <img
          loading="lazy"
          className="hidden md:block w-full max-w-100 object-cover object-center"
          src={assets.existing_audience_cover}
          alt="teaching_experience_cover"
        />
      </div>
    </div>
  );
};

export default ExistingAudienceOnboarding;
