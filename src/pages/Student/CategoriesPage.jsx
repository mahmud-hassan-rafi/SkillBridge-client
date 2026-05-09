const categories = [
  {
    id: 1,
    title: "Development",
    courses: "320+ Courses",
    icon: "💻",
    description:
      "Web development, mobile apps, backend systems, and modern programming technologies.",
  },
  {
    id: 2,
    title: "Business",
    courses: "180+ Courses",
    icon: "📈",
    description:
      "Entrepreneurship, startups, management, leadership, and business growth strategies.",
  },
  {
    id: 3,
    title: "Finance & Accounting",
    courses: "140+ Courses",
    icon: "💰",
    description:
      "Financial management, accounting principles, investing, and budgeting skills.",
  },
  {
    id: 4,
    title: "IT & Software",
    courses: "250+ Courses",
    icon: "🖥️",
    description:
      "Cloud computing, cybersecurity, networking, DevOps, and enterprise software systems.",
  },
  {
    id: 5,
    title: "Office Productivity",
    courses: "110+ Courses",
    icon: "📂",
    description:
      "Excel, Google Workspace, Microsoft Office, productivity tools, and workflow systems.",
  },
  {
    id: 6,
    title: "Personal Development",
    courses: "170+ Courses",
    icon: "🌱",
    description:
      "Communication, confidence, mindset, time management, and self-growth learning.",
  },
  {
    id: 7,
    title: "Design",
    courses: "210+ Courses",
    icon: "🎨",
    description:
      "UI/UX design, graphic design, branding, Figma, and creative digital experiences.",
  },
  {
    id: 8,
    title: "Marketing",
    courses: "160+ Courses",
    icon: "📣",
    description:
      "Digital marketing, SEO, social media growth, advertising, and audience building.",
  },
  {
    id: 9,
    title: "Lifestyle",
    courses: "90+ Courses",
    icon: "✨",
    description:
      "Daily productivity, wellness, habits, creativity, and modern lifestyle improvement.",
  },
  {
    id: 10,
    title: "Photography",
    courses: "80+ Courses",
    icon: "📷",
    description:
      "Photography techniques, editing, storytelling, videography, and creative visuals.",
  },
  {
    id: 11,
    title: "Health & Fitness",
    courses: "130+ Courses",
    icon: "🏋️",
    description:
      "Fitness training, nutrition, healthy living, wellness, and personal health guidance.",
  },
  {
    id: 12,
    title: "Music",
    courses: "75+ Courses",
    icon: "🎵",
    description:
      "Music production, instruments, vocals, audio editing, and creative sound learning.",
  },
  {
    id: 13,
    title: "Teaching & Academics",
    courses: "150+ Courses",
    icon: "📚",
    description:
      "Teaching methods, academic preparation, online instruction, and educational systems.",
  },
];

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-800">
      {/* Hero Section */}
      <section className="px-4 pt-24 pb-16 sm:px-6 lg:px-8 bg-linear-to-b from-cyan-100/70">
        <div className="mx-auto max-w-7xl text-center">
          <span className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            Explore Categories
          </span>

          <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Discover Skills Across Multiple Learning Categories
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore industry-focused categories designed for learners,
            instructors, creators, and professionals building their future with
            Skillbridge.
          </p>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-linear-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-2xl sm:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium ">
                Learn • Teach • Grow
              </span>

              <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Find The Perfect Learning Path For Your Journey
              </h2>

              <p className="max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
                Whether you want to master development, launch a business,
                improve creativity, or teach others — Skillbridge provides a
                modern ecosystem for growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white/10 p-6 ">
                <h3 className="mb-2 text-4xl font-bold">1500+</h3>

                <p className="text-blue-100">Premium Courses</p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 ">
                <h3 className="mb-2 text-4xl font-bold">20K+</h3>

                <p className="text-blue-100">Active Learners</p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 ">
                <h3 className="mb-2 text-4xl font-bold">5K+</h3>

                <p className="text-blue-100">Creators & Mentors</p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 ">
                <h3 className="mb-2 text-4xl font-bold">40+</h3>

                <p className="text-blue-100">Skill Areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
              Browse Categories
            </span>

            <h2 className="mb-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Explore Popular Categories
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Choose from a wide range of categories built for modern learning,
              career growth, creativity, and digital opportunities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group rounded-4xl border border-white/40 bg-white/70 p-6 shadow-xl  transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl transition group-hover:scale-110">
                  {category.icon}
                </div>

                <div className="mb-4">
                  <h3 className="mb-2 text-2xl font-bold text-slate-900">
                    {category.title}
                  </h3>

                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                    {category.courses}
                  </span>
                </div>

                <p className="mb-6 leading-relaxed text-slate-600">
                  {category.description}
                </p>

                <button className="flex items-center gap-2 text-lg font-semibold text-blue-600 transition hover:gap-3 hover:text-blue-700">
                  Explore Category
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-white/40 bg-white/70 px-6 py-16 shadow-2xl  sm:px-10 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              Start Your Journey
            </span>

            <h2 className="mb-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Learn New Skills & Unlock Opportunities
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Join thousands of learners and creators building their future with
              Skillbridge’s modern learning ecosystem.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="w-full rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 sm:w-auto">
                Explore Courses
              </button>

              <button className="w-full rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition hover:bg-slate-100 sm:w-auto">
                Become a Creator
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
