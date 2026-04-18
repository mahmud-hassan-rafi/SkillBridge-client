import React from "react";
import CallToActions from "@components/Student/CallToActions";
import Companies from "@components/Student/Companies";
import CoursesSection from "@components/Student/CoursesSection";
import Footer from "@components/Student/Footer";
import Hero from "@components/Student/Hero";
import TestimonialSection from "@components/Student/TestimonialsSection";
import GlobalImpact from "@components/Instructor/becomeInstructor/GlobalImpact";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies />
      <CoursesSection />
      <TestimonialSection />
      <div className="w-full">
        <GlobalImpact />
        <CallToActions />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
