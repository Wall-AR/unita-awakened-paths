
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PathsSection from "@/components/PathsSection";
import MastersSection from "@/components/MastersSection";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <FeaturesSection />
        <CoursesSection />
        <PathsSection />
        <MastersSection />
        <TestimonialSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
