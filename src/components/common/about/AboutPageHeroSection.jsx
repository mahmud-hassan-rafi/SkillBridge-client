import { assets } from "@assets/assets";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPageHeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 pt-16 pb-24 bg-linear-to-b from-cyan-100/70">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* info / text */}
        <div>
          <span className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            About Skillbridge
          </span>

          <h1 className="mb-6 text-home-heading-large font-bold leading-tight text-slate-900">
            A Platform Where People Learn, Teach & Grow Together
          </h1>

          <p className="mb-8 text-base md:text-lg leading-relaxed text-slate-600">
            Skillbridge is more than just an online learning platform. We are
            building a modern ecosystem where students can learn valuable
            skills, creators can teach and earn, and communities can grow
            through technology and education.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="rounded bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 text-sm md:text-base"
              onClick={() => navigate("/home")}
            >
              Explore Platform
            </button>

            <button
              className="rounded border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100 text-sm md:text-base"
              onClick={() => navigate("/become-instructor")}
            >
              Become an Instructor
            </button>
          </div>
        </div>

        {/* image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[36px] border border-white/40 bg-white/60 sm:p-4 shadow-2xl ">
            <img
              src={assets.about_page_hero_section_bg}
              draggable={false}
              alt="Skillbridge community"
              className="h-130 w-full rounded-[28px] object-cover"
            />
          </div>

          <div className="absolute max-sm:-bottom-10 sm:-bottom-6 max-sm:left-10 sm:left-6 rounded-3xl bg-white px-6 py-5 shadow-xl">
            <h3 className="text-home-heading-small font-bold text-blue-600">
              Empowering
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Learners, Mentors & Creators
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageHeroSection;
