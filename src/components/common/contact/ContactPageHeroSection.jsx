import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const contactMethods = [
  {
    id: 1,
    title: "Email Us",
    value: "mahmudhassanrafi12@gmail.com", // it's my personal email address which I am using for testing purpose. If I convert it into real SaaS, then I will update it with the real one.
    href: "mailto:mahmudhassanrafi12@gmail.com",
    description: "Get support and platform related help anytime.",
    icon: AiOutlineMail,
  },
  {
    id: 2,
    title: "Whatsapp/Call Us",
    value: "+880 1234-567890", // I am using a dummy phone number here. If I convert it into real SaaS, then I will update it with the real one.
    href: "https://wa.me/8801234567890",
    rel: "noopener noreferrer",
    target: "_blank",
    description: "Speak directly with our support team.",
    icon: MdOutlineCall,
  },
  {
    id: 3,
    title: "Location",
    value: "Dhaka, Bangladesh",
    href: "https://www.google.com/maps/place/Dhaka,+Bangladesh",
    rel: "noopener noreferrer",
    target: "_blank",
    description: "Building opportunities through technology & education.",
    icon: IoLocationOutline,
  },
];

const ContactPageHeroSection = () => {
  return (
    <section className="flex flex-col gap-8 sm:gap-12 md:gap-16 px-4 pt-12 sm:pt-16 md:pt-24 md:pb-16 sm:px-8 bg-linear-to-b from-cyan-100/70">
      {/* hero */}
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            Contact Skillbridge
          </span>

          <h1 className="mx-auto mb-6 max-w-4xl text-home-heading-large font-bold leading-tight text-slate-900">
            Let’s Build Something Amazing Together
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Have questions, feedback, partnership ideas, or need support? We’d
            love to hear from you. Our team is always ready to help learners,
            creators, and communities grow.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {contactMethods.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={item?.href ? item.href : "#"}
              rel={item?.rel ? item.rel : undefined}
              target={item?.target ? item.target : undefined}
              className={`${item?.href ? "cursor-pointer" : "cursor-default"} rounded-3xl border border-white/40 bg-white/70 p-8 shadow-xl`}
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                <Icon className="text-blue-600" />
              </div>

              <h2 className="mb-2 text-2xl font-semibold text-slate-900">
                {item.title}
              </h2>

              <p className="mb-3 wrap-break-word text-lg font-medium text-blue-600">
                {item.value}
              </p>

              <p className="leading-relaxed text-slate-600">
                {item.description}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ContactPageHeroSection;
