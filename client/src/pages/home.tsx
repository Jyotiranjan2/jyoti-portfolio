import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import CertificationsSection from "@/components/certifications-section";
import EducationSection from "@/components/education-section";
import AchievementsSection from "@/components/achievements-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import KaliToolsSection from "@/components/kali-tools-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen animated-bg floating-particles text-foreground overflow-x-hidden">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <KaliToolsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CertificationsSection />
        <EducationSection />
        <AchievementsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Jyoti Ranjan Barik</h3>
              <p className="text-gray-400 mb-4">Cybersecurity Enthusiast & Penetration Tester</p>
              <p className="text-gray-400 text-sm">Building secure digital futures through ethical hacking and innovative security solutions.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="https://www.linkedin.com/in/jyoti-ranjan-barik-131712284/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/Jyotiranjan2" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-primary transition-colors">
                  GitHub
                </a>
                <a href="https://tryhackme.com/p/Darkyhunter" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-terminal-green transition-colors">
                  TryHackMe
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#skills" className="block text-gray-400 hover:text-primary transition-colors">Skills</a>
                <a href="#projects" className="block text-gray-400 hover:text-primary transition-colors">Projects</a>
                <a href="#certifications" className="block text-gray-400 hover:text-primary transition-colors">Certifications</a>
                <a href="#contact" className="block text-gray-400 hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Jyoti Ranjan Barik. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
