import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, ChevronRight } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Automation Engineering Intern",
      company: "Industrial Technology Solutions",
      location: "Hamburg, Germany",
      period: "Jul 2024 - Present",
      type: "Internship",
      description: [
        "Developed and implemented IoT-based monitoring systems for industrial equipment",
        "Collaborated on robotics automation projects using KUKA robotic arms",
        "Created data analytics dashboards for real-time production monitoring",
        "Assisted in digital transformation initiatives for manufacturing processes"
      ],
      technologies: ["KUKA Robotics", "Industrial IoT", "Data Analytics", "Python", "LabVIEW"]
    },
    {
      title: "Research Assistant",
      company: "Hamburg University of Applied Sciences",
      location: "Hamburg, Germany",
      period: "Jan 2024 - Jun 2024",
      type: "Research",
      description: [
        "Conducted research on advanced automation systems for sustainable manufacturing",
        "Developed machine learning models for predictive maintenance",
        "Collaborated with industry partners on digitalization projects",
        "Published research findings on IoT applications in industrial settings"
      ],
      technologies: ["Machine Learning", "Predictive Analytics", "IoT", "MATLAB", "TensorFlow"]
    },
    {
      title: "Junior Automation Engineer",
      company: "Tech Solutions Pvt. Ltd.",
      location: "India",
      period: "Jun 2023 - Dec 2023",
      type: "Full-time",
      description: [
        "Designed and implemented automated control systems for manufacturing lines",
        "Programmed PLCs and HMIs for various industrial applications",
        "Conducted system integration and troubleshooting activities",
        "Collaborated with cross-functional teams on process optimization"
      ],
      technologies: ["PLC Programming", "HMI Design", "SCADA", "Industrial Networks", "C++"]
    },
    {
      title: "Electronics Engineering Intern",
      company: "Innovation Labs",
      location: "India",
      period: "May 2022 - Aug 2022",
      type: "Internship",
      description: [
        "Developed embedded systems for IoT applications",
        "Designed and tested electronic circuits and PCBs",
        "Worked on sensor integration and data acquisition systems",
        "Participated in product development lifecycle"
      ],
      technologies: ["Embedded Systems", "PCB Design", "Sensors", "Arduino", "Embedded C"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-primary/20 text-primary";
      case "Research":
        return "bg-accent/20 text-accent";
      case "Full-time":
        return "bg-soft-orange/20 text-soft-orange";
      default:
        return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience in automation, robotics, and digital innovation
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-soft-orange"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark-bg shadow-glow z-10"></div>

                {/* Content Card */}
                <Card className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                } md:w-1/2 bg-card/50 border-border hover:shadow-elevated transition-all duration-300 hover:border-primary/50 animate-fade-in`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <Badge className={`text-xs ${getTypeColor(exp.type)}`}>
                            {exp.type}
                          </Badge>
                        </div>
                        
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          {exp.description.map((desc, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {desc}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;