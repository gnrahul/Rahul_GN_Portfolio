import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Send,
  User,
  MessageSquare
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gnrahul1941@outlook.com",
      link: "mailto:gnrahul1941@outlook.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+49 015203018317",
      link: "tel:+49015203018317",
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hamburg, Germany",
      link: "https://maps.google.com/?q=Hamburg,Germany",
      color: "text-soft-orange"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://linkedin.com/in/rahul-gudarlahalli",
      color: "text-primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View GitHub Profile",
      link: "https://github.com/rahul-gudarlahalli",
      color: "text-muted-foreground"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      value: "View Full Portfolio",
      link: "https://rahul-portfolio.dev",
      color: "text-accent"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next automation project? Let's discuss how we can innovate together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card/50 border-border hover:shadow-elevated transition-all duration-300 animate-fade-in-left">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/20 transition-colors group"
                    >
                      <div className={`w-10 h-10 bg-${contact.color.split('-')[1]}/20 rounded-lg flex items-center justify-center`}>
                        <contact.icon className={`h-5 w-5 ${contact.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{contact.label}</p>
                        <p className={`text-sm ${contact.color} group-hover:underline`}>
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:shadow-elevated transition-all duration-300 animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Connect Online</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/20 transition-colors group"
                    >
                      <div className={`w-10 h-10 bg-${social.color.split('-')[1]}/20 rounded-lg flex items-center justify-center`}>
                        <social.icon className={`h-5 w-5 ${social.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{social.label}</p>
                        <p className={`text-sm ${social.color} group-hover:underline`}>
                          {social.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-secondary border-border animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Let's Build Something Amazing
                </h4>
                <p className="text-sm text-muted-foreground">
                  Whether it's robotics, IoT, or data analytics, I'm excited to tackle new challenges and create innovative solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 border-border hover:shadow-elevated transition-all duration-300 animate-fade-in-right">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10 bg-secondary/20 border-border focus:border-primary"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 bg-secondary/20 border-border focus:border-primary"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-secondary/20 border-border focus:border-primary"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="pl-10 bg-secondary/20 border-border focus:border-primary min-h-32 resize-none"
                        placeholder="Tell me about your project, ideas, or questions..."
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 Rahul Gudarlahalli Narasimha Reddy. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with passion for automation and innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;