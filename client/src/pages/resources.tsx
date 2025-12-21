import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Layers, BookOpen, Lightbulb, Users, Shield, Building2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Resources() {
  const resourceCategories = [
    {
      id: "frameworks",
      icon: Layers,
      title: "GRC Frameworks",
      description: "Structured approaches to governance, risk, and compliance for AI systems.",
      items: [
        "Regulated AI System Design Framework",
        "Compliance-First Architecture Patterns",
        "Risk Assessment Methodologies"
      ]
    },
    {
      id: "patterns",
      icon: FileText,
      title: "Architecture Patterns",
      description: "Proven patterns for human-in-the-loop systems and verifiable AI.",
      items: [
        "Human-in-the-Loop Design Patterns",
        "Blockchain Audit Trail Architecture",
        "Confidence Scoring Implementation"
      ]
    },
    {
      id: "case-studies",
      icon: Building2,
      title: "Case Studies",
      description: "Real-world implementations from customs, trade, and compliance domains.",
      items: [
        "Automated Classification Systems",
        "Regulatory Change Management",
        "Multi-Party Compliance Coordination"
      ]
    },
    {
      id: "research",
      icon: Lightbulb,
      title: "Research & Insights",
      description: "Practical approaches to AI auditability and responsible automation.",
      items: [
        "Explainable AI for Regulated Industries",
        "Deterministic vs Probabilistic Systems",
        "Accountability in Automated Decisions"
      ]
    }
  ];

  const targetAudience = [
    { icon: Users, label: "CTOs and Architects" },
    { icon: Shield, label: "Policy and Compliance Leaders" },
    { icon: Building2, label: "Engineering Teams in Regulated Sectors" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-primary text-lg font-medium mb-4 uppercase tracking-wider" data-testid="text-resources-eyebrow">
            Resources
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight" data-testid="text-resources-headline">
            Thinking in Systems, Not Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-resources-subheadline">
            Defantra resources focus on how regulated AI systems should be designed, not vendor hype. 
            Our goal is simple: raise the standard of how AI systems are built where failure is not an option.
          </p>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" data-testid="text-audience-headline">
            Who It's For
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-3 rounded-lg bg-secondary/50" data-testid={`badge-audience-${index}`}>
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="text-categories-headline">
            What We Share
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resourceCategories.map((category) => (
              <Card 
                key={category.id}
                id={category.id}
                className="p-8 hover:border-primary/50 transition-all duration-300"
                data-testid={`card-resource-${category.id}`}
              >
                <category.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3" data-testid={`text-resource-title-${category.id}`}>
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`text-resource-description-${category.id}`}>
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm">
                      <span className="text-primary">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4" data-testid="text-coming-soon-headline">
            Resource Library Coming Soon
          </h2>
          <p className="text-muted-foreground mb-8" data-testid="text-coming-soon-description">
            We're building a comprehensive library of frameworks, patterns, and case studies. 
            Get notified when new resources are published.
          </p>
          <Button
            variant="cta"
            size="lg"
            onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
            data-testid="button-resources-notify"
          >
            Get Notified
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight" data-testid="text-resources-cta-headline">
            Need Custom Guidance?
          </h2>
          <p className="text-xl text-muted-foreground mb-8" data-testid="text-resources-cta-subheadline">
            Our team can provide tailored advisory for your specific GRC challenges.
          </p>
          <Button
            variant="cta"
            size="xl"
            onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
            data-testid="button-resources-cta-contact"
          >
            Talk to Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
