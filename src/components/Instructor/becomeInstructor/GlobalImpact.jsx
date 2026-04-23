import React from "react";

const GlobalImpact = () => {
  const repeatedContent = [
    {
      number: "10K",
      title: "Students",
    },
    {
      number: "7+",
      title: "Languages",
    },
    {
      number: "25K",
      title: "Enrollments",
    },
    {
      number: "8+",
      title: "Countries",
    },
    {
      number: "15+",
      title: "Enterprise customers",
    },
  ];

  return (
    <div className="w-full flex md:justify-between justify-center lg:p-16 md:p-12 p-6 px-0 flex-wrap gap-3 sm:gap-5  md:gap-10 bg-[#5022c3] text-white">
      {repeatedContent.map((content, idx) => (
        <span key={idx} className="p-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-center">
            {content.number}
          </h1>
          <p className="text-center">{content.title}</p>
        </span>
      ))}
    </div>
  );
};

export default GlobalImpact;
