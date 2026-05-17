import { Link } from "react-router-dom";

const ContactPageCTA = () => {
  return (
    <section className="px-4 pb-24 sm:px-8">
      <div className="mx-auto max-w-7xl rounded-lg sm:rounded-[40px] bg-linear-to-r from-blue-600 to-indigo-700 px-6 py-16 text-center text-white shadow-2xl sm:px-10 sm:py-20">
        <h2 className="mx-auto mb-5 max-w-4xl  font-bold leading-tight text-home-heading-large">
          Join The Future Of Learning & Tech Opportunities
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg">
          Skillbridge connects learners, creators, and mentors together in one
          powerful ecosystem built for growth.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to={"/course-list"}
            className="w-full rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-blue-700 transition hover:bg-slate-100 sm:w-auto"
          >
            Explore Courses
          </Link>

          <Link
            to={"/become-instructor"}
            className="w-full rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/20 sm:w-auto"
          >
            Become a Creator
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactPageCTA;
