import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Droplets, 
  Bot, 
  Cog, 
  Shield,
  Eye,
  ArrowRight
} from "lucide-react";

import iotWaterImage from "@/assets/project-iot-water.jpg";
import kukaArmImage from "@/assets/project-kuka-arm.jpg";
import gantryImage from "@/assets/project-gantry.jpg";
import twitterDetectionImage from "@/assets/project-twitter-detection.jpg";
import currencyRecognitionImage from "@/assets/project-currency-recognition.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      title: "IoT Water Level Management System",
      description: "Advanced IoT-based water level monitoring and management system with real-time data collection, automated alerts, and predictive analytics for optimal resource utilization.",
      image: iotWaterImage,
      icon: Droplets,
      technologies: ["Arduino", "IoT Sensors", "Python", "Real-time Analytics", "Cloud Integration"],
      features: [
        "Real-time water level monitoring",
        "Automated alert system",
        "Predictive analytics for usage patterns",
        "Mobile app integration",
        "Cloud-based data storage"
      ],
      category: "IoT Solutions",
      status: "Completed"
    },
    {
      title: "KUKA Robotic Arm Simulation",
      description: "Comprehensive simulation environment for KUKA robotic arm programming, including path planning, collision detection, and industrial automation workflows.",
      image: kukaArmImage,
      icon: Bot,
      technologies: ["KUKA Robotics", "ROS", "C++", "Simulation", "Industrial Automation"],
      features: [
        "Advanced path planning algorithms",
        "Collision detection system",
        "Real-time simulation environment",
        "Integration with industrial protocols",
        "Safety system implementation"
      ],
      category: "Robotics",
      status: "Completed"
    },
    {
      title: "3-Axis Linear Gantry System",
      description: "Precision 3-axis linear gantry system for automated manufacturing processes, featuring high-accuracy positioning and flexible control interfaces.",
      image: gantryImage,
      icon: Cog,
      technologies: ["Mechanical Design", "Control Systems", "Stepper Motors", "PLC", "LabVIEW"],
      features: [
        "High-precision positioning control",
        "Flexible automation workflows",
        "Safety interlocks and monitoring",
        "Modular design architecture",
        "Real-time feedback systems"
      ],
      category: "Automation",
      status: "Completed"
    },
    {
      title: "Fake Twitter Account Detection",
      description: "Machine learning-based system for detecting fake Twitter accounts using advanced NLP techniques and behavioral analysis patterns.",
      image: twitterDetectionImage,
      icon: Shield,
      technologies: ["Python", "Machine Learning", "NLP", "Scikit-learn", "Data Analysis"],
      features: [
        "Advanced NLP processing",
        "Behavioral pattern analysis",
        "Real-time detection capabilities",
        "High accuracy classification",
        "Comprehensive reporting dashboard"
      ],
      category: "Data Analytics",
      status: "Completed"
    },
    {
      title: "MATLAB Currency Recognition",
      description: "Computer vision-based currency recognition system using MATLAB, featuring image processing algorithms and pattern recognition techniques.",
      image: currencyRecognitionImage,
      icon: Eye,
      technologies: ["MATLAB", "Computer Vision", "Image Processing", "Pattern Recognition", "GUI"],
      features: [
        "Advanced image processing",
        "Multi-currency support",
        "Real-time recognition",
        "User-friendly interface",
        "High accuracy detection"
      ],
      category: "Computer Vision",
      status: "Completed"
    }
  ];

  const categories = ["All", "IoT Solutions", "Robotics", "Automation", "Data Analytics", "Computer Vision"];

  return (
    <section id="portfolio" className="py-20 px-4 bg-dark-surface/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions in automation, robotics, IoT, and data analytics
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={`${
                index === 0 
                  ? "bg-primary text-primary-foreground" 
                  : "border-primary/30 text-primary hover:bg-primary/10"
              } transition-all`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card/50 border-border hover:shadow-elevated transition-all duration-300 hover:border-primary/50 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{project.category}</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-medium text-foreground mb-2">Key Features:</p>
                    <div className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio CTA */}
        <Card className="mt-16 bg-gradient-secondary border-border animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Interested in My Work?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These projects represent my passion for innovation and problem-solving. 
              I'm always excited to discuss new challenges and collaborative opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Collaborate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Full Portfolio
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PortfolioSection;