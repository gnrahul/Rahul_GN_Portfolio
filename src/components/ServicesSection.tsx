import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  BarChart3, 
  Wifi, 
  Cog,
  ArrowRight,
  Zap,
  Target,
  Settings
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Robotics & Automation Design",
      icon: Cpu,
      description: "Design and implementation of robotic systems for industrial automation, including KUKA robotic arm programming and integration.",
      features: [
        "Robotic arm programming and simulation",
        "Industrial automation system design",
        "Control system integration",
        "Safety system implementation"
      ],
      color: "text-primary",
      bgColor: "bg-primary/20",
      gradientFrom: "from-primary",
      gradientTo: "to-accent"
    },
    {
      title: "Data Analytics & Reporting",
      icon: BarChart3,
      description: "Advanced data analytics solutions for industrial processes, including real-time monitoring and predictive analytics.",
      features: [
        "Real-time data visualization dashboards",
        "Predictive maintenance analytics",
        "Performance optimization reports",
        "Machine learning model development"
      ],
      color: "text-accent",
      bgColor: "bg-accent/20",
      gradientFrom: "from-accent",
      gradientTo: "to-soft-orange"
    },
    {
      title: "IoT-Based Solutions",
      icon: Wifi,
      description: "Comprehensive IoT solutions for smart manufacturing and industrial digitalization initiatives.",
      features: [
        "Sensor network design and deployment",
        "Wireless communication protocols",
        "Edge computing implementation",
        "Cloud-based data management"
      ],
      color: "text-soft-orange",
      bgColor: "bg-soft-orange/20",
      gradientFrom: "from-soft-orange",
      gradientTo: "to-tech-purple"
    },
    {
      title: "Process Optimization Consulting",
      icon: Cog,
      description: "Student-level consulting services for process optimization and digital transformation strategies.",
      features: [
        "Process analysis and improvement",
        "Workflow optimization strategies",
        "Technology integration planning",
        "Efficiency enhancement recommendations"
      ],
      color: "text-tech-purple",
      bgColor: "bg-tech-purple/20",
      gradientFrom: "from-tech-purple",
      gradientTo: "to-primary"
    }
  ];

  const capabilities = [
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quick development of proof-of-concept solutions"
    },
    {
      icon: Target,
      title: "Problem-Focused Approach",
      description: "Targeted solutions for specific industrial challenges"
    },
    {
      icon: Settings,
      title: "Adaptable Solutions",
      description: "Flexible implementations that grow with your needs"
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services & <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive automation and digitalization services designed to drive innovation and efficiency
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card/50 border-border hover:shadow-elevated transition-all duration-300 hover:border-primary/50 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="bg-card/30 border-border hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {capability.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-secondary border-border animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how automation and digitalization can drive efficiency, 
              reduce costs, and accelerate innovation in your organization.
            </p>
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
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;