import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuArrowRight, LuEye, LuEyeOff, LuLock, LuMail } from "react-icons/lu";
import { assets } from "@assets/assets";
import { useLoginMutation } from "../authApi";
import { errorNotify } from "@utils/toast-notify/toastify";
import SignupPageSectionDivider from "./SignupPageSectionDivider";
import ContinueWithGoogleButton from "./ContinueWithGoogleButton";
import ContinueWithGithubButton from "./ContinueWithGithubButton";

const LoginPageLeftSection = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const handleOnChange = useCallback((e) => {
    const { name, value } = e.target;

    setUserData((pre) => ({ ...pre, [name]: value }));
  }, []);

  const handleOnSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await login({ ...userData, role: "student" }).unwrap(); // unwrap()
        setUserData({ email: "", password: "" });
      } catch (err) {
        errorNotify(err?.data?.message || err?.error || err?.message || err);
      }
    },
    [setUserData, userData, login],
  );

  return (
    <div className="bg-white px-6 sm:px-8 lg:px-10 py-10 sm:py-12 flex flex-col justify-center">
      {/* Logo */}
      <img
        draggable={false}
        src={assets.logo}
        onClick={() => navigate("/")}
        alt="logo"
        className="w-40 h-10 sm:w-50 sm:h-15 object-cover -ml-6 mb-5 cursor-pointer"
      />

      {/* Heading */}
      <div className="mb-8">
        <p className="text-sm font-medium text-blue-600 bg-blue-50 rounded-xl mb-3 inline-block px-3 py-1">
          WELCOME BACK
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
          Continue Your Learning Journey
        </h2>

        <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
          Access your dashboard, continue your enrolled courses, and manage your
          instructor tools.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleOnSubmit}>
        {/* Email */}
        <div className="relative">
          <LuMail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleOnChange}
            placeholder="Email Address"
            autoComplete="email"
            required
            className="w-full h-10 rounded border border-slate-300 bg-white pl-12 pr-4 outline-none transition-all focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <LuLock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={userData.password}
            onChange={handleOnChange}
            placeholder="Password"
            autoComplete="current-password"
            required
            className="w-full h-10 rounded border border-slate-300 bg-white pl-12 pr-14 outline-none transition-all focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showPassword ? <LuEyeOff size={18} /> : <LuEye size={18} />}
          </button>
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer text-slate-600 select-none">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            Remember me
          </label>

          <button
            type="button"
            className="text-blue-600 hover:underline font-medium"
          >
            Forgot password?
          </button>
        </div>

        {/* Login Button */}
        <button className="w-full h-10 rounded bg-blue-600 text-white font-semibold shadow-lg transition-all hover:bg-blue-700 flex items-center justify-center gap-2">
          {isLoading ? (
            "Checking..."
          ) : (
            <>
              Login
              <LuArrowRight size={18} className="" />
            </>
          )}
        </button>

        {/* Divider */}
        <SignupPageSectionDivider />

        {/* Google */}
        <ContinueWithGoogleButton />

        {/* Github */}
        <ContinueWithGithubButton />
      </form>

      {/* Bottom */}
      <p className="text-sm text-slate-500 mt-8 text-center">
        Don’t have an account?{" "}
        <Link
          to={"/register"}
          className="text-blue-600 font-medium hover:underline cursor-pointer"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
};

export default LoginPageLeftSection;
