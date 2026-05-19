import { infoNotify } from "@utils/toast-notify/toastify";
import ContactForm from "./ContactForm";

const faqs = [
  {
    id: 1,
    question: "How can I become an instructor?",
    answer:
      "You can apply as an instructor and start publishing your own courses after verification.",
  },
  {
    id: 2,
    question: "Does Skillbridge support creators?",
    answer:
      "Yes! Creators can teach, build communities, and earn through premium content.",
  },
  {
    id: 3,
    question: "Can students access courses anytime?",
    answer:
      "Absolutely. Students can learn anytime from any device at their own pace.",
  },
];

const ContactPageContactSection = () => {
  return (
    <section className="px-4 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px]">
        {/* Form */}
        <ContactForm />

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Support Card */}
          <div className="rounded-lg sm:rounded-4xl border border-white/40 bg-linear-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-2xl">
            <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium">
              Need Quick Help?
            </span>

            <h3 className="mb-4 text-3xl font-bold leading-tight">
              Our Team Is Ready To Support You
            </h3>

            <p className="mb-8 leading-relaxed text-blue-100">
              Whether you are a student, instructor, or creator — we are here to
              help you grow with Skillbridge.
            </p>

            <button
              onClick={() => infoNotify("in the maintenance")}
              className="w-full rounded-2xl bg-white px-6 py-4 text-lg font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              Live Chat Support
            </button>
          </div>

          {/* FAQ */}
          <div className="rounded-lg sm:rounded-4xl border border-white/40 bg-white/70 p-8 shadow-xl">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h3>

            <div className="space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-100 bg-white p-5"
                >
                  <h4 className="mb-2 text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h4>

                  <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageContactSection;
