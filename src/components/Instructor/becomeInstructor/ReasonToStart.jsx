import { assets } from "@assets/assets";
import React from "react";

const ReasonToStart = () => {
  const contentStore = [
    {
      image: assets.value_prop_teach,
      title: "Teach your way",
      desc: "Publish the course you want, in the way you want, and always have control of your own content.",
    },
    {
      image: assets.value_prop_inspire,
      title: "Inspire learners",
      desc: "Teach what you know and help learners explore their interests, gain new skills, and advance their careers.",
    },
    {
      image: assets.value_prop_get_rewarded,
      title: "Get rewarded",
      desc: "Expand your professional network, build your expertise, and earn money on each paid enrollment.",
    },
  ];

  return (
    <div className="lg:p-16 md:p-8 p-4">
      <h1 className="md:text-[clamp(1.5rem,3vw+1rem,3.5rem)] text-home-heading-small text-center mb-8 font-medium">
        So many reasons to start
      </h1>
      <div className="flex justify-between max-md:flex-col max-md:gap-4">
        {contentStore.map((content, idx) => (
          <div
            key={idx}
            className="lg:w-1/4 md:w-[30%] flex items-center flex-col gap-1 "
          >
            <img
              src={content.image}
              alt={content.title}
              className="size-[clamp(100px,10vw+1rem,120px)]"
            />
            <h2 className="font-semibold text-lg">{content.title}</h2>
            <p className="text-center font-light"> {content.desc} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonToStart;
