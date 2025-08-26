import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Building } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 section-headline">Education</h2>
          <p className="text-xl text-muted-foreground">Academic background and research experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, index) => (
            <Card key={index} className="bg-card border-border card-flashy" data-testid={`education-${index}`}>
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    {edu.degree.includes("Research") ? (
                      <Building className="w-6 h-6 text-white" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-primary mb-2">{edu.degree}</CardTitle>
                    <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
