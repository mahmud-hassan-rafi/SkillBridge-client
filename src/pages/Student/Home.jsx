import CallToActions from "@components/Student/CallToActions";
import Companies from "@components/Student/Companies";
import CoursesSection from "@components/Student/CoursesSection";
import Footer from "@components/Student/Footer";
import Hero from "@components/Student/Hero";
import TestimonialSection from "@components/Student/TestimonialsSection";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies />
      <CoursesSection />
      <TestimonialSection />
      <CallToActions />
      <Footer />
    </div>
  );
};

export default Home;
