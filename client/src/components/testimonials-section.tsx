import { Quote, Star, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Dr. Rajesh Sharma",
    position: "Senior Security Researcher",
    company: "NIT Rourkela",
    content: "Jyoti has demonstrated exceptional skills in Python security analysis during his research internship. His work on automated vulnerability detection using AST and CFG analysis was groundbreaking and showed deep understanding of code security principles.",
    rating: 5,
    avatar: "👨‍🔬",
    category: "Research"
  },
  {
    name: "Priya Patel",
    position: "Cybersecurity Manager", 
    company: "SlashMark IT Solutions",
    content: "During his internship, Jyoti consistently delivered high-quality security assessments and showed remarkable growth in threat analysis. His CEH v13 knowledge was evident in his practical approach to penetration testing scenarios.",
    rating: 5,
    avatar: "👩‍💼",
    category: "Professional"
  },
  {
    name: "Team Lead",
    position: "Smart India Hackathon",
    company: "Government of India",
    content: "As team leader for SAMI18 Pole project, Jyoti demonstrated excellent leadership and technical skills. The smart agriculture monitoring solution showcased innovative IoT security implementations and earned recognition at national level.",
    rating: 5,
    avatar: "🏆",
    category: "Leadership"
  },
  {
    name: "Course Instructor",
    position: "Certified Ethical Hacker Program",
    company: "EC-Council",
    content: "Jyoti completed the CEH v13 certification with outstanding performance. His understanding of ethical hacking methodologies and hands-on practical skills in penetration testing were exemplary throughout the program.",
    rating: 5,
    avatar: "🎓",
    category: "Certification"
  },
  {
    name: "Mentor",
    position: "TryHackMe Community",
    company: "TryHackMe Platform",
    content: "Active contributor to the cybersecurity learning community with consistent progress in practical cybersecurity challenges. Shows strong problem-solving skills and dedication to continuous learning in the field.",
    rating: 5,
    avatar: "💻",
    category: "Community"
  },
  {
    name: "Project Supervisor",
    position: "Malware Analysis Lead",
    company: "GIET University",
    content: "Jyoti's work on the malware identification sharing platform using Wazuh was impressive. His ability to integrate threat detection mechanisms and create comprehensive dashboards showcased advanced cybersecurity knowledge.",
    rating: 5,
    avatar: "🛡️",
    category: "Academic"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Professional Testimonials</h2>
          <p className="text-xl text-muted-foreground">What colleagues and mentors say about my work</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 rounded-xl bg-card border border-border card-hover">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Recommendations</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border card-hover">
            <div className="text-3xl font-bold text-terminal-green mb-2">100%</div>
            <div className="text-muted-foreground">Positive Feedback</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border card-hover">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Organizations</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border card-hover">
            <div className="text-3xl font-bold text-terminal-green mb-2">2+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border card-flashy group relative overflow-hidden"
              data-testid={`testimonial-${index}`}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-primary opacity-30" />
                  <div className="flex items-center text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                    {testimonial.category}
                  </span>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-terminal-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-xl p-8 card-hover max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6">
              Join the growing list of satisfied colleagues and mentors who have experienced my dedication to cybersecurity excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
                data-testid="contact-cta-button"
              >
                <User className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
              <a 
                href="https://www.linkedin.com/in/jyoti-ranjan-barik-131712284/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
                data-testid="linkedin-cta-button"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}