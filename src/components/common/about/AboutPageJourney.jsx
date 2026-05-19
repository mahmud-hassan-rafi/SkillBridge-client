import React from "react";

const journeySteps = [
  {
    id: 1,
    title: "Create an Account",
    description:
      "Join Skillbridge as a learner, mentor, or creator in just a few steps.",
  },
  {
    id: 2,
    title: "Learn or Publish",
    description:
      "Start learning new skills or share your expertise through premium courses.",
  },
  {
    id: 3,
    title: "Grow Together",
    description:
      "Build your career, audience, and opportunities with the Skillbridge community.",
  },
];

const AboutPageJourney = () => {
  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-course-details-heading-small leading-home-heading-small font-bold text-slate-900">
            How Skillbridge Works
          </h2>

          <p className="mx-auto max-w-2xl text-base md:text-lg text-slate-600">
            A simple and modern experience for learners and creators.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {journeySteps.map((step) => (
            <div
              key={step.id}
              className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-lg "
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                {step.id}
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPageJourney;
