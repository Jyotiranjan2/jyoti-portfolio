import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";
import profileImage from "@assets/profile pic_1756185264597.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold">
              Jyoti Ranjan <br />
              <span className="gradient-text">Barik</span>
            </h1>
            <p className="text-xl text-primary font-medium">Cybersecurity Enthusiast</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aspiring cybersecurity analyst with expertise in threat detection, vulnerability assessment, and security operations. 
              Certified enthusiast with hands-on experience in modern security frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90"
                data-testid="get-in-touch-button"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('certifications')}
                className="border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-white"
                data-testid="view-certifications-button"
              >
                View Certifications
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-primary glow-blue overflow-hidden">
                <img
                  src={profileImage}
                  alt="Jyoti Ranjan Barik - Cybersecurity Professional"
                  className="w-full h-full object-cover"
                  data-testid="profile-image"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-terminal-green text-white p-3 rounded-full">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="absolute -top-4 -left-4 bg-primary text-white p-3 rounded-full">
                <Shield className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
