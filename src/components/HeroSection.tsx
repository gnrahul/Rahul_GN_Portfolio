import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-robotics.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Robotics and Automation"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <img
              src="/lovable-uploads/bafce9c1-e059-4300-9af9-13d5c1cbd26e.png"
              alt="Rahul Gudarlahalli Narasimha Reddy"
              className="w-full h-full object-cover rounded-full border-4 border-primary/50 shadow-glow animate-glow-pulse"
            />
          </div>
        </div>

        <div className="space-y-6 animate-fade-in stagger-1">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            <span className="text-primary">Rahul</span>{" "}
            <span className="text-accent">G N</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Passionate{" "}
            <span className="text-primary font-semibold">
              Digitalization & Automation
            </span>{" "}
            student crafting the future of{" "}
            <span className="text-accent font-semibold">
              Robotics, IoT, IT Solution and industrial innovation
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity px-8 py-4 text-lg"
              onClick={() => scrollToAbout()}
            >
              Explore My Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown
            className="h-8 w-8 text-primary cursor-pointer hover:text-accent transition-colors"
            onClick={scrollToAbout}
          />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-soft-orange/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default HeroSection;