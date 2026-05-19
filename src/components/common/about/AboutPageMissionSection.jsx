import React from "react";

const AboutPageMissionSection = () => {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-[40px] border border-white/40 bg-white/70 p-10 shadow-2xl  md:p-16">
        <div className="text-center">
          <span className="mb-4 inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
            Our Mission
          </span>

          <h2 className="mb-6 text-course-details-heading-small leading-tight font-bold text-slate-900">
            Making Tech Education More Accessible For Everyone
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-slate-600">
            We believe talent exists everywhere. Skillbridge was created to give
            students, teachers, freelancers, and creators a single place where
            they can share knowledge, build opportunities, and grow together
            regardless of their background or location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPageMissionSection;
