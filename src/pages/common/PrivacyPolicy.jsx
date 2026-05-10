const privacySections = [
  {
    id: 1,
    title: "Information We Collect",
    description:
      "We may collect personal information such as your name, email address, account details, payment information, and learning activity to improve your experience on Skillbridge.",
  },
  {
    id: 2,
    title: "How We Use Your Information",
    description:
      "Your information helps us provide better learning experiences, improve platform security, personalize content, process payments, and communicate important updates.",
  },
  {
    id: 3,
    title: "Creator & Instructor Content",
    description:
      "Courses, materials, and uploaded content shared by creators and instructors remain protected under our platform policies and intellectual property guidelines.",
  },
  {
    id: 4,
    title: "Cookies & Analytics",
    description:
      "Skillbridge uses cookies and analytics tools to understand platform usage, improve performance, and enhance user experience across devices.",
  },
  {
    id: 5,
    title: "Data Security",
    description:
      "We use modern security practices and technologies to help protect user data, account access, and platform activities from unauthorized access.",
  },
  {
    id: 6,
    title: "Third-Party Services",
    description:
      "Some services such as payments, authentication, analytics, or embedded content may be powered by trusted third-party providers.",
  },
];

import { GoSearch } from "react-icons/go";
import { MdLockPerson } from "react-icons/md";
import { IoShieldHalfSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const policyHighlights = [
  {
    id: 1,
    title: "Transparent Policies",
    icon: GoSearch,
    iconCss: "stroke-2 text-gray-800",
  },
  {
    id: 2,
    title: "Secure Platform",
    icon: MdLockPerson,
    iconCss: "text-gray-800",
  },
  {
    id: 3,
    title: "User Privacy First",
    icon: IoShieldHalfSharp,
    iconCss: "text-gray-800",
  },
];

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-slate-800">
      {/* Hero Section */}
      <section className=" px-4 pt-24 pb-16 sm:px-6 lg:px-8 bg-linear-to-b from-cyan-100/70">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              Privacy Policy
            </span>

            <h1 className="mx-auto mb-6 max-w-4xl font-bold leading-tight text-slate-900 text-home-heading-large">
              Your Privacy Matters At Skillbridge
            </h1>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We are committed to protecting the privacy, security, and trust of
              learners, creators, instructors, and communities using the
              Skillbridge platform.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:gap-10 md:gap-14 md:grid-cols-3">
          {policyHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-3xl border border-white/40 bg-white/70 p-8 text-center shadow-xl "
              >
                <div className="mb-5 flex justify-center text-5xl">
                  <Icon className={item.iconCss} />
                </div>

                <h2 className="text-2xl font-semibold text-slate-900">
                  {item.title}
                </h2>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="h-fit rounded-4xl border border-white/40 bg-white/70 p-6 shadow-2xl  lg:sticky lg:top-24">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">
              Quick Navigation
            </h3>

            <div className="space-y-3">
              {privacySections.map((section) => (
                <a
                  key={section.id}
                  href={`#section-${section.id}`}
                  className="block rounded-2xl border border-transparent bg-white px-4 py-3 text-slate-700 transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </aside>

          {/* Policy Sections */}
          <div className="space-y-8">
            {privacySections.map((section) => (
              <div
                key={section.id}
                id={`section-${section.id}`}
                className="rounded-4xl border border-white/40 bg-white/70 p-6 shadow-xl  sm:p-8 lg:p-10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-700">
                  {section.id}
                </div>

                <h2 className="mb-4 text-3xl font-bold text-slate-900">
                  {section.title}
                </h2>

                <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                  {section.description}
                </p>
              </div>
            ))}

            {/* Additional Notice */}
            <div className="rounded-4xl bg-linear-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-2xl sm:p-10">
              <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium ">
                Important Notice
              </span>

              <h2 className="mb-5 text-3xl font-bold">
                We Continuously Improve Our Policies
              </h2>

              <p className="max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg">
                Skillbridge may update this Privacy Policy over time to reflect
                platform improvements, legal requirements, and user protection
                enhancements. Continued use of the platform means you agree to
                the latest version of our policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-white/40 bg-white/70 px-6 py-16 shadow-2xl  sm:px-10 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
              Need Help?
            </span>

            <h2 className="mb-5 text-home-heading-large font-bold text-slate-900 leading-tight">
              Questions About Our Privacy Policy?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              If you have any questions regarding your privacy, account data, or
              platform security, feel free to contact our support team anytime.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to={"/about"}
                className="w-full rounded-2xl bg-blue-600 px-8 py-4 text-center text-lg font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 sm:w-auto"
              >
                About us
              </Link>

              <Link
                to="/contact"
                className="w-full rounded-2xl border border-slate-200 bg-white px-8 py-4 text-center text-lg font-semibold text-slate-700 transition hover:bg-slate-100 sm:w-auto"
              >
                Visit Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
