import AboutPageCTA from "@components/common/about/AboutPageCTA";
import AboutPageFeatures from "@components/common/about/AboutPageFeatures";
import AboutPageHeroSection from "@components/common/about/AboutPageHeroSection";
import AboutPageJourney from "@components/common/about/AboutPageJourney";
import AboutPageMissionSection from "@components/common/about/AboutPageMissionSection";
import AboutPageStats from "@components/common/about/AboutPageStats";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-800">
      {/* Hero Section */}
      <AboutPageHeroSection />

      {/* Stats */}
      <AboutPageStats />

      {/* Mission Section */}
      <AboutPageMissionSection />

      {/* Features */}
      <AboutPageFeatures />

      {/* Journey */}
      <AboutPageJourney />

      {/* CTA */}
      <AboutPageCTA />
    </div>
  );
};

export default AboutPage;
