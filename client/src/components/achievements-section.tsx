import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, FileText } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Achievements</h2>
          <p className="text-xl text-muted-foreground">Recognition and accomplishments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.achievements.map((achievement, index) => (
            <Card key={index} className="bg-card border-border card-hover" data-testid={`achievement-${index}`}>
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="bg-terminal-green p-3 rounded-lg">
                    {achievement.type === "Competition" ? (
                      <Trophy className="w-6 h-6 text-white" />
                    ) : (
                      <FileText className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-primary mb-2">{achievement.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{achievement.type}</Badge>
                      <span className="text-sm text-muted-foreground">{achievement.year}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
