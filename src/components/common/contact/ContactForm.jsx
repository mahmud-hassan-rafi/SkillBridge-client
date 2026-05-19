import { infoNotify } from "@utils/toast-notify/toastify";

const ContactForm = () => {
  return (
    <div className="rounded-lg sm:rounded-4xl border border-white/40 bg-white/70 p-6 shadow-2xl sm:p-8 lg:p-10">
      <div className="mb-10">
        <span className="mb-4 inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
          Send Message
        </span>

        <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Get In Touch With Us
        </h2>

        <p className="max-w-2xl leading-relaxed text-slate-600">
          Fill out the form below and our team will get back to you as soon as
          possible.
        </p>
      </div>

      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          infoNotify("We got the query. reply you soon");
          e.target.reset();
        }}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              required
              placeholder="Enter your name"
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              required
              placeholder="Enter your email"
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Subject
          </label>

          <input
            type="text"
            required
            placeholder="Write subject"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Message
          </label>

          <textarea
            rows="6"
            required
            placeholder="Write your message..."
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
