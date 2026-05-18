import React from "react";

const platformFeatures = [
  {
    id: 1,
    title: "Learn Modern Skills",
    description:
      "Access high-quality courses and practical learning resources from experienced instructors.",
    icon: "📚",
  },
  {
    id: 2,
    title: "Teach & Earn",
    description:
      "Anyone with valuable knowledge can create courses, teach students, and grow their income.",
    icon: "🎥",
  },
  {
    id: 3,
    title: "Build Your Community",
    description:
      "Connect learners, mentors, and creators together in one collaborative ecosystem.",
    icon: "🌍",
  },
  {
    id: 4,
    title: "Career & Freelancing Support",
    description:
      "Help students and creators build portfolios, gain confidence, and explore tech opportunities.",
    icon: "🚀",
  },
];

const AboutPageFeatures = () => {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-course-details-heading-small leading-home-heading-small font-bold text-slate-900">
            What Makes Skillbridge Different?
          </h2>

          <p className="mx-auto max-w-3xl text-base lg:text-lg text-slate-600">
            We are building a platform that benefits both learners and creators
            equally.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {platformFeatures.map((feature) => (
            <div
              key={feature.id}
              className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-lg "
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPageFeatures;
