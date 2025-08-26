import TerminalWindow from "./terminal-window";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">Professional experience and internships</p>
        </div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="max-w-4xl mx-auto">
              <TerminalWindow title={`experience/${exp.company.toLowerCase().replace(/\s+/g, '')}.log`}>
                <div className="text-terminal-green mb-4">$ cat {exp.company.toLowerCase().replace(/\s+/g, '_')}_experience.md</div>
                
                <Card className="bg-black/20 border-0" data-testid={`experience-${index}`}>
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary p-3 rounded-lg">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white mb-2">{exp.title}</CardTitle>
                        <p className="text-white/80 font-medium">{exp.company}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="border-terminal-green text-terminal-green">
                            {exp.type}
                          </Badge>
                          <span className="text-sm text-white/70">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                      <div className="text-terminal-green mb-2">$ echo "Description"</div>
                      <div className="text-white/80 text-xs leading-relaxed">
                        {exp.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TerminalWindow>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
