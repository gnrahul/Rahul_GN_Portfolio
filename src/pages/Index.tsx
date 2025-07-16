import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    // Apply dark theme by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Index;
