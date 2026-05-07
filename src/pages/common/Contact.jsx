import ContactPageContactSection from "@components/common/contact/ContactPageContactSection";
import ContactPageCTA from "@components/common/contact/ContactPageCTA";
import ContactPageHeroSection from "@components/common/contact/ContactPageHeroSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-slate-800">
      {/* Hero Section */}
      <ContactPageHeroSection />

      {/* Contact Form Section */}
      <ContactPageContactSection />

      {/* CTA Section */}
      <ContactPageCTA />
    </div>
  );
};

export default ContactPage;
