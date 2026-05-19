import ScrollToTop from "@components/common/ScrollToTop";
import SignupPageFooter from "@features/auth/components/SignupPageFooter";
import SignupPageLeftSection from "@features/auth/components/SignupPageLeftSection";
import SignupPageRightSection from "@features/auth/components/SignupPageRightSection";
import React from "react";

export default function Signup() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen overflow-hidden bg-slate-200 relative flex items-center justify-center px-4 py-10">
        {/* Main Card */}
        <div className="relative z-10 w-full max-w-4xl rounded-[30px] overflow-hidden border border-white/20 bg-white/10  shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <SignupPageLeftSection />

            {/* RIGHT SIDE */}
            <SignupPageRightSection />
          </div>

          {/* FOOTER */}
          <SignupPageFooter />
        </div>
      </div>
    </>
  );
}
