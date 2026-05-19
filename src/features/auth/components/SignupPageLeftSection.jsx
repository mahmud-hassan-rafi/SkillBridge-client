import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { errorNotify, successNotify } from "@utils/toast-notify/toastify.js";
import { useRegisterMutation } from "@features/auth/authApi.js";
import { assets } from "@assets/assets";
import {
  LuCheck,
  LuEye,
  LuEyeOff,
  LuLock,
  LuMail,
  LuUser,
} from "react-icons/lu";
import SignupPageSectionDivider from "./SignupPageSectionDivider";
import ContinueWithGoogleButton from "./ContinueWithGoogleButton";
import ContinueWithGithubButton from "./ContinueWithGithubButton.jsx";
import { useAppContext } from "@hooks/ContextHook";

const SignupPageLeftSection = () => {
  const navigate = useNavigate();
  const [registerStudent, { isLoading }] = useRegisterMutation();
  const { capitalize } = useAppContext();

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const [userData, setUserData] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    gender: "",
    role: "student",
  });

  const isPasswordMatchWithConfirm =
    userData?.password?.length > 0 &&
    confirmPassword.length > 0 &&
    userData.password === confirmPassword
      ? true
      : false;

  const handleOnChange = useCallback((e) => {
    const { name, value } = e.target;

    // fullname.firstname -> ["fullname", "firstname"]
    const keys = name.split(".");

    setUserData((prev) => {
      // normal field
      if (keys.length === 1) {
        return { ...prev, [name]: value };
      }

      // nested field
      return {
        ...prev,
        [keys[0]]: {
          ...prev[keys[0]],
          [keys[1]]: value,
        },
      };
    });
  }, []);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log("on handle submit function");
    if (!isPasswordMatchWithConfirm) {
      errorNotify("password not matched with confirm password");
      return;
    }
    if (!isTermsChecked) {
      errorNotify("please checked the terms and conditions");
      return;
    }

    try {
      const res = await registerStudent({
        ...userData,
        imageUrl:
          userData.gender === "male" ? assets?.male_user : assets?.female_user,
      }).unwrap();
      successNotify(res?.message);

      setUserData({
        fullname: {
          firstname: "",
          lastname: "",
        },
        email: "",
        password: "",
        gender: "",
        role: "student",
      });
      navigate("/");
    } catch (error) {
      if (error?.data?.errors) {
        error?.data?.errors.map((err) => {
          errorNotify(err?.msg);
        });
      } else {
        errorNotify(
          error?.data?.message || error?.error || error?.message || error,
        );
      }
    }
  };

  return (
    <div className="bg-white px-6 sm:px-10 py-10 flex flex-col justify-center">
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
        <h2 className="text-2xl font-bold text-slate-900 leading-tight">
          Create Your Account
        </h2>

        <p className="text-slate-500 mt-3 text-sm sm:text-base">
          Unlock personalized learning and advanced tools.
        </p>

        <p className="text-sm text-slate-500 mt-1">
          Already have an account?{" "}
          <Link
            className="text-blue-600 font-medium cursor-pointer hover:underline focus-visible:outline-2 focus-visible:outline-blue-500 p-1"
            to={"/login"}
          >
            Login
          </Link>
        </p>
      </div>

      {/* FORM */}
      <form className="space-y-4" onSubmit={handleOnSubmit}>
        {/* Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div className="relative">
            <LuUser
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              name="fullname.firstname"
              value={userData?.fullname?.firstname}
              onChange={handleOnChange}
              required
              placeholder="First Name"
              className="w-full h-10 rounded border border-slate-300 bg-white pl-12 pr-4 outline-none transition-all focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div className="relative">
            <LuUser
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              name="fullname.lastname"
              value={userData?.fullname?.lastname}
              onChange={handleOnChange}
              required
              placeholder="Last Name"
              className="w-full h-10 rounded border border-slate-300 bg-white pl-12 pr-4 outline-none transition-all focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

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
            required
            placeholder="Email"
            className="w-full h-10 rounded border border-slate-300 bg-white pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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
            required
            placeholder="Password"
            className="w-full h-10 rounded border border-slate-300 bg-white pl-12 pr-14 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer"
          >
            {showPassword ? <LuEyeOff size={18} /> : <LuEye size={18} />}
          </button>
        </div>

        {/* Confirm Password */}
        <div>
          <span className="relative">
            <LuLock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm Password"
              className={`w-full h-10 rounded border bg-white pl-12 pr-14 outline-none transition-all ${confirmPassword.length > 0 && !isPasswordMatchWithConfirm ? "border-red-500" : "border-slate-300 focus:ring-2 focus:ring-blue-500"}`}
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer"
            >
              {showConfirmPassword ? (
                <LuEyeOff size={18} />
              ) : (
                <LuEye size={18} />
              )}
            </button>
          </span>
          {confirmPassword && !isPasswordMatchWithConfirm && (
            <p className="text-red-500 text-sm my-1">password not matched</p>
          )}
        </div>

        {/* gender */}
        <div className="space-y-2 flex flex-col gap-0.5">
          <label className="text-lg font-medium text-slate-700">Gender</label>
          <div className="grid grid-cols-3 gap-3">
            {["Male", "Female", "Other"].map((gender) => (
              <label
                key={gender}
                className={`flex items-center justify-center h-10 rounded border cursor-pointer transition-all select-none
  has-focus-visible:outline-2
  has-focus-visible:outline-blue-400
  ${
    capitalize(userData.gender) === gender
      ? "border-blue-500 bg-blue-50 text-blue-600"
      : "border-slate-300 bg-white text-slate-600 hover:border-blue-400"
  }`}
              >
                <input
                  type="radio"
                  name="gender"
                  required
                  value={gender.toLowerCase()}
                  checked={capitalize(userData.gender) === gender}
                  onChange={handleOnChange}
                  className="sr-only"
                />

                <span className="text-sm font-medium">{gender}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Terms and condition */}
        <label className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer select-none">
          <div className="relative">
            <input
              type="checkbox"
              className="peer sr-only"
              onChange={(e) => {
                e.stopPropagation();
                setIsTermsChecked(e.target.checked);
              }}
            />

            <div className="w-5 h-5 rounded-md border border-slate-300 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-all">
              <LuCheck size={14} className="text-white" />
            </div>
          </div>

          <span className="inline-block">
            Terms and Conditions and{" "}
            <span className="text-blue-600 hover:underline">
              Privacy Policy
            </span>
          </span>
        </label>

        {/* Button */}
        <button className="w-full h-10 rounded bg-blue-600 text-white font-semibold shadow-lg cursor-pointer focus-visible:bg-white focus-visible:text-gray-700 focus-visible:outline-blue-500 focus-visible:outline-2 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all">
          {isLoading ? "Creating Account..." : "Create Account"}
        </button>

        {/* Divider */}
        <SignupPageSectionDivider />

        {/* Google */}
        <ContinueWithGoogleButton />

        {/* Github */}
        <ContinueWithGithubButton />
      </form>
    </div>
  );
};

export default SignupPageLeftSection;
