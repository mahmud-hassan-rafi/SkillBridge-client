import ScrollToTop from "@components/common/ScrollToTop";
import LoginPageLeftSection from "@features/auth/components/LoginPageLeftSection";
import LoginPageRightSection from "@features/auth/components/LoginPageRightSection";
import SignupPageFooter from "@features/auth/components/SignupPageFooter";

export default function Login() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen overflow-hidden bg-linear-to-br from-slate-100 via-slate-200 to-slate-100 relative flex items-center justify-center px-4 py-8">
        {/* Main Container */}
        <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-4xl border border-white/20 bg-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] ">
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE */}
            <LoginPageLeftSection />

            {/* RIGHT SIDE */}
            <LoginPageRightSection />
          </div>
          <SignupPageFooter />
        </div>
      </div>
    </>
  );
}
