import React from "react";

const stats = [
  {
    id: 1,
    value: "20K+",
    label: "Learners Joined",
  },
  {
    id: 2,
    value: "150+",
    label: "Courses Published",
  },
  {
    id: 3,
    value: "5K+",
    label: "Creators & Mentors",
  },
  {
    id: 4,
    value: "40+",
    label: "Skill Categories",
  },
];

const AboutPageStats = () => {
  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="rounded-3xl border border-white/40 bg-white/70 p-8 text-center shadow-lg "
          >
            <h2 className="mb-2 text-4xl font-bold text-blue-600">
              {stat.value}
            </h2>

            <p className="text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPageStats;
