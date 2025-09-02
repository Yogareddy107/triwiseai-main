import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <WhyChooseSection />
      <FeaturesSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;