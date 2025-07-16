import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Target } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      degree: "Master of Science",
      field: "Digitalization & Automation",
      institution: "PFH University of Applied Sciences",
      location: "Stade, Lower Saxony, Germany",
      period: "October 2023 – September 2025 (Expected)",
      highlights: [
        "Specialized in automation systems, robotics, and industrial data analysis",
"Completed projects on KUKA robotic simulation, 3-axis linear gantry, and IoT-based monitoring systems",
"Gained hands-on experience in Python, Simulink, and control systems",
"Focused on real-world industrial applications of digital technologies",
"Collaborated in multi-national teams on sustainability-driven engineering problems"
      ]
    },
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "BNM Institution of Technology",
      location: "Bangalore, India",
      period: "September 2018 – January 2022",
      highlights: [
        "Built strong foundations in programming, databases, and system design",

"Led project on Fake Account Detection on Twitter using ML techniques",
"Developed a Currency Recognition System using MATLAB and image processing",
"Engaged in team-based development using PHP, MySQL, and data visualization tools",
"Participated in national-level tech fests and workshops on AI and automation"
      ]
    }
  ];

  const interests = [
    "Robotics & Automation",
    "Industrial IoT",
    "Data Analytics",
    "Sustainability Tech",
    "AI/ML Applications",
    "Real-time Systems"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-dark-surface/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aspiring robotics and automation engineer with a strong foundation in computer engineering. Passionate about creating smart, innovative systems to drive digital transformation and industry advancement.


          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6 animate-fade-in-left">
            <Card className="bg-card/50 border-border hover:shadow-elevated transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Personal Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I’m a curious and driven student of Digitalization and Automation based in Hamburg, with a strong interest in robotics, IoT, and intelligent systems. I love applying technology to real-world industrial challenges—whether it's optimizing workflows, automating tasks, or building smarter solutions. I’m always eager to learn, improve, and create impact through innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:shadow-elevated transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Location & Flexibility</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Currently based in Hamburg, Germany, I bring flexibility and adaptability 
                  to every project. My multicultural background and international experience 
                  allow me to work effectively across diverse teams and environments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:shadow-elevated transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-soft-orange/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-soft-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Areas of Interest</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-6">Education</h3>
            
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-card/50 border-border hover:shadow-elevated transition-all duration-300 hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium mb-2">{edu.field}</p>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Key Coursework:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs border-primary/30 text-primary"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
