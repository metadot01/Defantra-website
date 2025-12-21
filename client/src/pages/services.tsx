import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bot, Link2, Shield, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Services() {
  const services = [
    {
      id: "ai-ml",
      icon: Bot,
      title: "AI / ML Architecture",
      description: "Design and implementation of deterministic and hybrid AI systems for regulated environments.",
      capabilities: [
        "Design of deterministic and hybrid AI systems",
        "SLM and ML model orchestration",
        "Human-in-the-loop workflows",
        "Explainability, confidence scoring, and override logic"
      ]
    },
    {
      id: "blockchain",
      icon: Link2,
      title: "Blockchain & Verifiable Systems",
      description: "Immutable audit trails and verifiable records for regulated decisions and compliance proofs.",
      capabilities: [
        "Immutable audit trails for regulated decisions",
        "Data provenance and compliance proofs",
        "Multi-party coordination architectures",
        "Blockchain where verification is required—not as decoration"
      ]
    },
    {
      id: "regulated",
      icon: Shield,
      title: "Regulated Systems Engineering",
      description: "Engineering solutions for policy-to-code translation, regulatory monitoring, and secure integration.",
      capabilities: [
        "Policy-to-code translation",
        "Regulatory change monitoring architectures",
        "Risk scoring and anomaly detection pipelines",
        "Secure integration across fragmented systems"
      ]
    },
    {
      id: "advisory",
      icon: Lightbulb,
      title: "Advisory & Training",
      description: "Strategic guidance and enterprise training for building accountable AI systems.",
      capabilities: [
        "Architecture-first delivery approach",
        "Enterprise AI training and upskilling",
        "Outcome-aligned milestone planning",
        "Best practices for regulated AI deployment"
      ]
    }
  ];

  const engagementModel = [
    { label: "Engagement Type", value: "Outside IR35 Only" },
    { label: "Team Composition", value: "Senior, Hands-On Contributors" },
    { label: "Approach", value: "Architecture-First Delivery" },
    { label: "Alignment", value: "Outcome-Aligned Milestones" }
  ];

  const whoIsItFor = [
    "Regulated enterprises",
    "Government-backed programmes",
    "Customs, trade, and compliance platforms",
    "Organisations with audit, legal, or safety exposure"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-primary text-lg font-medium mb-4 uppercase tracking-wider" data-testid="text-services-eyebrow">
            Specialist Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight" data-testid="text-services-headline">
            AI / ML / Blockchain Specialists
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-services-subheadline">
            Defantra provides outside-IR35 specialist services to enterprises and public-sector 
            organisations building regulated AI, data, and compliance infrastructure.
          </p>
          <p className="text-lg text-primary font-medium" data-testid="text-services-tagline">
            Our services exist for one reason: critical systems cannot be built by generalists.
          </p>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-engagement-headline">
            Engagement Model
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModel.map((item, index) => (
              <Card key={index} className="p-6 text-center" data-testid={`card-engagement-${index}`}>
                <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                <p className="font-bold text-primary">{item.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="text-capabilities-headline">
            Core Capabilities
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id}
                id={service.id}
                className="p-8 hover:border-primary/50 transition-all duration-300"
                data-testid={`card-service-${service.id}`}
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3" data-testid={`text-service-title-${service.id}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`text-service-description-${service.id}`}>
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.capabilities.map((cap, capIndex) => (
                    <li key={capIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{cap}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" data-testid="text-for-headline">
            Who This Is For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoIsItFor.map((item, index) => (
              <Card key={index} className="p-6 flex items-center gap-4" data-testid={`card-for-${index}`}>
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-lg font-medium">{item}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight" data-testid="text-services-cta-headline">
            Ready to build accountable AI systems?
          </h2>
          <p className="text-xl text-muted-foreground mb-8" data-testid="text-services-cta-subheadline">
            Tell us about your project. We'll assess fit and propose an engagement model.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="cta"
              size="xl"
              onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
              data-testid="button-services-cta-contact"
            >
              Get in Touch
            </Button>
            <Button variant="outline" size="xl" asChild data-testid="link-services-platform">
              <Link href="/platform">
                View Platform
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
