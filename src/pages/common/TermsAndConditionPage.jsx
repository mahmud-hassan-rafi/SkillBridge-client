const termsSections = [
  {
    id: 1,
    title: "Acceptance of Terms",
    description:
      "By accessing or using Skillbridge, you agree to follow our platform rules, community standards, and policies. If you do not agree with any part of these terms, you should discontinue using the platform.",
  },
  {
    id: 2,
    title: "Accounts & Responsibilities",
    description:
      "Users are responsible for maintaining the security of their accounts, passwords, and activities performed under their profiles on Skillbridge.",
  },
  {
    id: 3,
    title: "Learning & Creator Content",
    description:
      "Courses, videos, resources, and creator content uploaded to Skillbridge must follow platform guidelines and must not violate copyright or community rules.",
  },
  {
    id: 4,
    title: "Payments & Transactions",
    description:
      "Some platform services, premium courses, or creator monetization features may involve payments. Users agree to provide accurate payment information when required.",
  },
  {
    id: 5,
    title: "Community Guidelines",
    description:
      "Users must avoid abusive behavior, harmful activities, spam, harassment, or misuse of the platform. Skillbridge reserves the right to restrict accounts violating policies.",
  },
  {
    id: 6,
    title: "Platform Availability",
    description:
      "We continuously improve Skillbridge, but we cannot guarantee uninterrupted access at all times due to maintenance, updates, or technical limitations.",
  },
  {
    id: 7,
    title: "Policy Updates",
    description:
      "Skillbridge may update these Terms & Conditions periodically. Continued use of the platform after updates means you accept the revised terms.",
  },
];

import { BsCameraReelsFill } from "react-icons/bs";
import { IoShieldHalfSharp } from "react-icons/io5";
import { FaBalanceScale } from "react-icons/fa";

const highlights = [
  {
    id: 1,
    title: "Fair Platform Usage",
    icon: FaBalanceScale,
  },
  {
    id: 2,
    title: "Safe Community",
    icon: IoShieldHalfSharp,
  },
  {
    id: 3,
    title: "Creator Protection",
    icon: BsCameraReelsFill,
  },
];

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-slate-800">
      {/* Hero Section */}
      <section className="px-4 pt-24 pb-16 sm:px-6 lg:px-8 bg-linear-to-b from-cyan-100/70">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              Terms & Conditions
            </span>

            <h1 className="mx-auto mb-6 max-w-5xl text-home-heading-large font-bold leading-tight text-slate-900">
              Clear Rules For A Better Learning & Creator Experience
            </h1>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              These Terms & Conditions explain the responsibilities, rights, and
              platform guidelines for learners, instructors, creators, and
              communities using Skillbridge.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-3xl border border-white/40 bg-white/70 p-8 text-center shadow-xl "
              >
                <div className="mb-5 flex justify-center text-5xl">
                  <Icon />
                </div>

                <h2 className="text-2xl font-semibold text-slate-900">
                  {item.title}
                </h2>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <aside className="h-fit rounded-4xl border border-white/40 bg-white/70 p-6 shadow-2xl  lg:sticky lg:top-24">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">
              Quick Navigation
            </h3>

            <div className="space-y-3">
              {termsSections.map((section) => (
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

          {/* Terms Sections */}
          <div className="space-y-8">
            {termsSections.map((section) => (
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

            {/* Important Notice */}
            <div className="rounded-4xl bg-linear-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-2xl sm:p-10">
              <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium ">
                Important Notice
              </span>

              <h2 className="mb-5 text-3xl font-bold">
                Respect The Community & Platform Rules
              </h2>

              <p className="max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg">
                Skillbridge is built to create a safe, collaborative, and
                growth-focused ecosystem for learners and creators. Violations
                of platform guidelines may result in warnings, restrictions, or
                account suspension when necessary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-white/40 bg-white/70 px-6 py-16 shadow-2xl  sm:px-10 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
              Need Clarification?
            </span>

            <h2 className="mb-5 font-bold text-slate-900 text-home-heading-large leading-tight">
              Questions About Our Terms & Conditions?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              If you need help understanding our platform policies, creator
              guidelines, or user responsibilities, our support team is ready to
              assist you anytime.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:mahmudhassanrafi12@gmail.com"
                className="w-full rounded-2xl bg-blue-600 px-8 py-4 text-center text-lg font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 sm:w-auto"
              >
                Contact Support
              </a>

              <a
                href="/contact"
                className="w-full rounded-2xl border border-slate-200 bg-white px-8 py-4 text-center text-lg font-semibold text-slate-700 transition hover:bg-slate-100 sm:w-auto"
              >
                Visit Contact Page
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
