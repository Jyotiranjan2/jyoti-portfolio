import SkillCard from "./skill-card";
import TerminalWindow from "./terminal-window";
import { portfolioData } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 section-headline">Technical Arsenal</h2>
          <p className="text-xl text-muted-foreground">Advanced cybersecurity tools and technologies</p>
        </div>

        {/* Career Objective Terminal */}
        <div className="mb-16">
          <TerminalWindow title="skills/summary.txt" className="max-w-4xl mx-auto p-6">
            <div className="text-terminal-green mb-2">$ cat career_objective.md</div>
            <div className="text-muted-foreground ml-4">
              <div className="text-primary">Seeking:</div>
              <div className="ml-4 text-muted-foreground">SOC Analyst • Junior Cybersecurity Analyst • Security Intern • Penetration Tester</div>
              <div className="text-primary mt-2">Specialization:</div>
              <div className="ml-4 text-muted-foreground">CEH v13 Trained • Python Security Automation • Vulnerability Assessment</div>
            </div>
          </TerminalWindow>
        </div>

        {/* Security Tools Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 section-headline">Security Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.skills.securityTools.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Programming Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 section-headline">Programming</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.skills.programming.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Operating Systems Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 section-headline">Operating Systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.skills.operatingSystems.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Cybersecurity Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 section-headline">Cybersecurity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {portfolioData.skills.cybersecurity.map((skill, index) => (
              <SkillCard key={index} {...skill} size="sm" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
