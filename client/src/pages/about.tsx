import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, Shield, FileCheck, Eye, Linkedin, GraduationCap, FlaskConical } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function About() {
  const principles = [
    {
      icon: CheckCircle2,
      title: "Automate only what rules can define",
      description: "Clear rules get automated. Ambiguity gets escalated to human experts."
    },
    {
      icon: Users,
      title: "Keep humans accountable for judgment",
      description: "AI assists. Humans decide. Responsibility is never ambiguous."
    },
    {
      icon: FileCheck,
      title: "Make outcomes provable",
      description: "Every decision has cryptographic proof that can be verified."
    },
    {
      icon: Shield,
      title: "Design for audits, not demos",
      description: "Built for regulators and real-world scrutiny, not impressive presentations."
    }
  ];

  const howWeWork = [
    "Small, senior teams",
    "Architecture before implementation",
    "No black boxes",
    "No compliance theatre"
  ];

  const team = [
    {
      name: "Bharath Shivaram",
      role: "Founder & Platform Architect",
      description: "Leads Defantra's platform architecture and technical direction, with a focus on building accountable AI systems for complex, real-world domains. His work spans AI/ML systems, human-in-the-loop design, and verifiable decision infrastructure.",
      linkedin: "https://www.linkedin.com/in/bharathshivaram/"
    }
  ];

  const rdTeam = [
    {
      name: "Rinold",
      role: "AI Researcher | MSc FinTech Student"
    },
    {
      name: "Sri Nidhi",
      role: "Blockchain Researcher | MSc AI Student"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-primary text-lg font-medium mb-4 uppercase tracking-wider" data-testid="text-about-eyebrow">
            About Defantra
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight" data-testid="text-about-headline">
            Built for Verifiable Trust and Compliance Intelligence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subheadline">
            Defantra was founded on a single observation: Most AI systems fail not because the models are weak, 
            but because responsibility is unclear. We design systems where responsibility is explicit.
          </p>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="text-principles-headline">
            Our Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="p-8" data-testid={`card-principle-${index}`}>
                <principle.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" data-testid="text-howwework-headline">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map((item, index) => (
              <Card key={index} className="p-6 text-center" data-testid={`card-howwework-${index}`}>
                <p className="font-medium">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="text-team-headline">
            Team
          </h2>
          
          {/* Founder */}
          {team.map((member, index) => (
            <Card key={index} className="p-8 mb-12" data-testid={`card-team-${index}`}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1" data-testid={`text-member-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4" data-testid={`text-member-role-${index}`}>
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-member-description-${index}`}>
                    {member.description}
                  </p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                    data-testid={`link-member-linkedin-${index}`}
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </Card>
          ))}

          {/* R&D Team */}
          <h3 className="text-2xl font-bold mb-6" data-testid="text-rd-team-headline">
            Research & Development Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {rdTeam.map((member, index) => (
              <Card key={index} className="p-6" data-testid={`card-rd-${index}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Partnerships */}
      <section id="partnerships" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FlaskConical className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4" data-testid="text-partnerships-headline">
              R&D Partnerships
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-partnerships-subheadline">
              We partner with Scottish universities through Interface to collaborate on cutting-edge 
              research and development projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6" data-testid="card-partnership-1">
              <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground leading-relaxed">
                Leveraging Innovate UK grants, we co-develop innovative solutions that push the 
                boundaries of AI, blockchain, and fintech.
              </p>
            </Card>
            <Card className="p-6" data-testid="card-partnership-2">
              <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground leading-relaxed">
                Our R&D partnerships connect academic expertise with real-world challenges, 
                delivering impactful, mission-critical technologies.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" data-testid="text-location-headline">
            Location
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-location-description">
            Based at University of Stirling Innovation Park, UK, working with UK and global organisations.
          </p>
        </div>
      </section>

      {/* Closing Thought */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-3xl font-bold mb-6 leading-relaxed" data-testid="text-closing-thought">
            "AI does not remove responsibility.<br />
            <span className="text-primary">It concentrates it.</span>"
          </blockquote>
          <p className="text-xl text-muted-foreground" data-testid="text-closing-tagline">
            Defantra builds systems that can carry that weight.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight" data-testid="text-about-cta-headline">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8" data-testid="text-about-cta-subheadline">
            Let's discuss how we can help build your accountable AI systems.
          </p>
          <Button
            variant="cta"
            size="xl"
            onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
            data-testid="button-about-cta-contact"
          >
            Get in Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
