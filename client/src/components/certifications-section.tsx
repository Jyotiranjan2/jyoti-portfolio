import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/lib/data";
import mastercardCert from "@assets/mastercard job simulation_1756185287484.jpg";
import tataCert from "@assets/tata job simulation_1756185287485.jpg";
import slashmarkCert from "@assets/slashmark internship_1756185287478.jpg";
import udacityCert from "@assets/udacity_1756185287479.jpg";
import googleCert from "@assets/google foundation_1756185287482.jpg";
import ciscoCert from "@assets/Introduction_to_Cybersecurity_Badge20230927-28-txcca6_1756185287488.jpg";
import adventCert from "@assets/advent of cyber_1756185287480.jpg";
import cyberweekCert from "@assets/cyberweek_1756185287486.jpg";
import hackersMeetupCert from "@assets/hackers meetup_1756185287481.jpg";
import iitJammuCert from "@assets/iit jammu ctf_1756185300330.jpg";
import skillfrontCert from "@assets/SkillFront-SFE016ba8c24d047-76826926278532_1756185287490.jpg";
import eccCert from "@assets/ECC-Evaluation-Certificate_1756185287491.jpg";

export default function CertificationsSection() {
  const certImages: { [key: string]: string } = {
    "MasterCard": mastercardCert,
    "Tata": tataCert,
    "SlashMark": slashmarkCert,
    "Udacity": udacityCert,
    "Google x Coursera": googleCert,
    "Cisco Networking Academy": ciscoCert,
    "TryHackMe": adventCert,
    "CyberWeek Platform": cyberweekCert,
    "Local Cybersecurity Community": hackersMeetupCert,
    "IIT Jammu": iitJammuCert,
    "SkillFront": skillfrontCert,
    "ECC Council": eccCert,
  };

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 section-headline">Certifications & Achievements</h2>
          <p className="text-xl text-muted-foreground">Professional certifications and training completions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <Card key={index} className="bg-card border-border card-flashy" data-testid={`certification-${index}`}>
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
