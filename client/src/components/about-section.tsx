import TerminalWindow from "./terminal-window";
import { portfolioData } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">Dedicated to securing digital infrastructure and protecting organizations</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">Cybersecurity Analyst & Security Researcher</h3>
            <p className="text-muted-foreground leading-relaxed">
              Final year Computer Science Engineering student at GIET University with a passion for cybersecurity. 
              Research Intern at NIT Rourkela, specializing in Python application security and automated vulnerability 
              detection. Through hands-on projects and industry certifications, I'm developing expertise in malware 
              analysis, ethical hacking, and security tool development as an aspiring cybersecurity enthusiast.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <TerminalWindow title="stats.sh" className="p-4">
                <div className="text-4xl font-bold text-primary mb-2">{portfolioData.stats.certifications}</div>
                <div className="text-terminal-green text-sm">$ echo "Certifications"</div>
              </TerminalWindow>
              
              <TerminalWindow title="exp.sh" className="p-4">
                <div className="text-4xl font-bold text-primary mb-2">{portfolioData.stats.projects}</div>
                <div className="text-terminal-green text-sm">$ echo "Projects Completed"</div>
              </TerminalWindow>
            </div>
            
            <div className="flex space-x-4">
              <a href={`https://${portfolioData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors" data-testid="linkedin-link">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href={`https://${portfolioData.personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors" data-testid="github-link">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Cybersecurity workspace with multiple monitors showing security dashboards"
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="workspace-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
