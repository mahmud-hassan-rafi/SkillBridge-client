import React, { useState } from "react";

const radioOptions = [
  {
    label: "In Person, informally",
    value: "in-person-informal",
  },
  {
    label: "In Person, Professionally",
    value: "in-person-professional",
  },
  {
    label: "online",
    value: "online",
  },
  {
    label: "Others",
    value: "others",
  },
];

const RadioInput = () => {
  const [teachingExperience, setTeachingExperience] = useState("");
  console.log(teachingExperience);

  return (
    <div className="flex flex-col gap-3 w-full sm:w-[75%] md:w-1/3 min-w-75 ">
      {radioOptions.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-3 p-3 rounded outline outline-gray-900/70 cursor-pointer hover:bg-gray-200/15 has-checked:outline-purple-600 has-checked:outline-2"
        >
          <input
            type="radio"
            name="teaching-experience"
            value={option.value}
            className="hidden peer "
            onChange={(event) => setTeachingExperience(event.target.value)}
          />

          <div className="w-3.5 h-3.5 p-0.5 rounded-full border-2 border-white outline outline-gray-600 peer-checked:bg-purple-600 transition-all"></div>

          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioInput;
