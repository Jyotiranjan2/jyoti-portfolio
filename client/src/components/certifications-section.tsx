import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/lib/data";
import mastercardCert from "@assets/mastercard job simulation_1756185287484.jpg";
import tataCert from "@assets/tata job simulation_1756185287485.jpg";
import slashmarkCert from "@assets/slashmark internship_1756185287478.jpg";
import udacityCert from "@assets/udacity_1756185287479.jpg";

export default function CertificationsSection() {
  const certImages: { [key: string]: string } = {
    "MasterCard": mastercardCert,
    "Tata": tataCert,
    "SlashMark": slashmarkCert,
    "Udacity": udacityCert,
  };

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Certifications & Achievements</h2>
          <p className="text-xl text-muted-foreground">Professional certifications and training completions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <Card key={index} className="bg-card border-border card-hover" data-testid={`certification-${index}`}>
              <CardHeader>
                <CardTitle className="text-primary">{cert.name}</CardTitle>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <Badge variant="secondary">{cert.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                {certImages[cert.issuer] && (
                  <div className="mb-4">
                    <img
                      src={certImages[cert.issuer]}
                      alt={`${cert.name} Certificate`}
                      className="w-full h-64 object-cover rounded-lg"
                      data-testid={`cert-image-${index}`}
                    />
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Completed: {cert.date}</span>
                  <Badge variant="outline" className="border-terminal-green text-terminal-green">
                    Verified
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
