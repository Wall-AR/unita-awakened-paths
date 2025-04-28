
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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeaturesSection />
          <CoursesSection />
          <PathsSection />
          <MastersSection />
          <TestimonialSection />
          <CallToAction />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
