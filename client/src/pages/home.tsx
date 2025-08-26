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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
        <AchievementsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Jyoti Ranjan Barik. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-400 hover:text-blue-500 transition-colors">
                Privacy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-blue-500 transition-colors">
                Terms
              </a>
              <a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
