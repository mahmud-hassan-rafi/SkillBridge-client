import { Link } from "react-router-dom";

const footerLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 4,
    title: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    id: 5,
    title: "Terms of Use",
    path: "/terms-and-conditions",
  },
];

const SignupPageFooter = () => {
  return (
    <div className="border-t border-white/10 bg-white/70 backdrop-blur-md px-6 py-5">
      <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-600">
        {footerLinks.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            className="hover:text-blue-600 cursor-pointer px-2 py-1 rounded-md focus-visible:outline-2 focus-visible:outline-blue-400"
          >
            {link.title}
          </Link>
        ))}

        <span className="text-slate-500">Copyright © 2026 Skillbridge</span>
      </div>
    </div>
  );
};

export default SignupPageFooter;
