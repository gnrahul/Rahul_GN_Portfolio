import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Cpu, 
  Database, 
  Wrench, 
  Brain, 
  Users, 
  Target,
  Zap
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/20",
      skills: [
        { name: "Python", level: 90 },
        { name: "C/C++", level: 55 },
        { name: "MATLAB", level: 80 },
        { name: "JavaScript/TypeScript", level: 75 },
        { name: "HTML", level: 90 },
        { name: "SQL", level: 65 }
      ]
    },
    {
      title: "Automation & Robotics",
      icon: Cpu,
      color: "text-accent",
      bgColor: "bg-accent/20",
      skills: [
        { name: "KUKA Robotics", level: 85 },
        { name: "PLC Programming", level: 80 },
        { name: "Industrial IoT", level: 75 },
        { name: "Control Systems", level: 85 },
        { name: "HMI Design", level: 70 },
        { name: "SCADA Systems", level: 65 }
      ]
    },
    {
      title: "Data Analytics & AI",
      icon: Database,
      color: "text-soft-orange",
      bgColor: "bg-soft-orange/20",
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "Data Visualization", level: 85 },
        { name: "TensorFlow", level: 75 },
        { name: "Real-time Analytics", level: 70 },
        { name: "Predictive Modeling", level: 65 },
        { name: "Statistical Analysis", level: 75 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "text-tech-purple",
      bgColor: "bg-tech-purple/20",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Linux", level: 75 },
        { name: "AWS/Cloud", level: 65 },
        { name: "PCB Design", level: 60 },
        { name: "3D Modeling", level: 55 }
      ]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Brain },
    { name: "Team Collaboration", icon: Users },
    { name: "Project Management", icon: Target },
    { name: "Innovation", icon: Zap }
  ];

  const certifications = [
    "Industrial IoT Fundamentals",
    "Machine Learning with Python",
    "Robotics and Control Systems",
    "Digital Transformation Strategies",
    "Data Analytics Certification"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-dark-surface/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical expertise across automation, robotics, and digital innovation
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card/50 border-border hover:shadow-elevated transition-all duration-300 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <Card className="bg-card/50 border-border hover:shadow-elevated transition-all duration-300 animate-fade-in-left">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <skill.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-card/50 border-border hover:shadow-elevated transition-all duration-300 animate-fade-in-right">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Areas of Interest */}
        <Card className="mt-8 bg-card/50 border-border hover:shadow-elevated transition-all duration-300 animate-fade-in">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Areas of Interest</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Industrial Robotics",
                "IoT Integration",
                "Sustainability Technologies",
                "Real-time Data Processing",
                "Machine Learning Applications",
                "Digital Twin Technology",
                "Predictive Maintenance",
                "Process Optimization"
              ].map((interest, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;