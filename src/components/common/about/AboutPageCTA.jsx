import React from "react";
import { Link } from "react-router-dom";

const AboutPageCTA = () => {
  return (
    <section className="px-6 pt-10 pb-24">
      <div className="mx-auto max-w-6xl rounded-xl md:rounded-[40px] bg-linear-to-r from-blue-600 to-indigo-700 px-5 md:px-8 py-12 md:py-20 text-center text-white shadow-2xl">
        <h2 className="mb-5 text-course-details-heading-small leading-tight font-bold">
          Start Learning, Teaching & Building Today
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-base md:text-lg text-blue-100">
          Join Skillbridge and become part of a growing tech community built for
          learners, instructors, and creators.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to={"/register"}
            className="rounded-xl md:rounded-2xl bg-white px-8 py-4 text-base md:text-lg font-semibold text-blue-700 transition hover:bg-slate-100"
          >
            Join as Student
          </Link>

          <Link
            to={"/become-instructor"}
            className="rounded-xl md:rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-base md:text-lg font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Become a Creator
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPageCTA;
