import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bot, Link2, Users, Eye, CheckCircle2, ArrowRight, Shield, FileCheck, Zap, Lock } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Platform() {
  const features = [
    {
      id: "ai-agents",
      icon: Bot,
      title: "AI Agents for GRC",
      subtitle: "Intelligent Automation for Governance, Risk & Compliance",
      description: "Deterministic AI agents that classify, assess, and route decisions with machine speed while maintaining human accountability.",
      capabilities: [
        "Rule-based classification logic at machine speed",
        "Confidence scoring flags ambiguity automatically",
        "Human experts resolve edge cases",
        "Final decisions recorded as verifiable compliance artefacts"
      ],
      outcomes: [
        "Faster processing without shortcuts",
        "Fewer misclassifications and penalties",
        "Decisions that stand up to audit"
      ]
    },
    {
      id: "blockchain",
      icon: Link2,
      title: "Blockchain Audit Trail",
      subtitle: "Immutable, Legally Defensible Records",
      description: "Every decision, classification, and human override is recorded immutably on blockchain. Cryptographically verifiable proof for regulators, auditors, and dispute resolution.",
      capabilities: [
        "Immutable audit trails for all regulated decisions",
        "Data provenance and compliance proofs",
        "Multi-party coordination architectures",
        "Blockchain where verification is required—not as decoration"
      ],
      outcomes: [
        "Legally defensible decision records",
        "Transparent audit history",
        "Dispute resolution with cryptographic proof"
      ]
    },
    {
      id: "human-loop",
      icon: Users,
      title: "Human-in-the-Loop",
      subtitle: "Expert Oversight for Edge Cases",
      description: "AI handles what rules can define. Humans handle what requires judgment. Clear escalation workflows ensure accountability is never ambiguous.",
      capabilities: [
        "Automatic escalation for low-confidence decisions",
        "Expert review workflows with full context",
        "Override logic with mandatory reasoning",
        "Complete audit trail of human decisions"
      ],
      outcomes: [
        "Clear separation of machine vs human responsibility",
        "Accountability that regulators can verify",
        "Expertise focused where it matters most"
      ]
    },
    {
      id: "confidence",
      icon: Eye,
      title: "Confidence Scoring",
      subtitle: "Transparent Decision Intelligence",
      description: "Every AI decision includes confidence metrics. Deterministic outputs, not probabilistic guesses. Explainability by design, not as an afterthought.",
      capabilities: [
        "Confidence thresholds trigger human review",
        "Explainable AI outputs for every decision",
        "Risk scoring and anomaly detection",
        "Full traceability from input to outcome"
      ],
      outcomes: [
        "No black boxes in regulated decisions",
        "Audit-ready explanations on demand",
        "Risk visibility across operations"
      ]
    }
  ];

  const designPrinciples = [
    {
      icon: Zap,
      title: "Deterministic Outputs",
      description: "Rule-based logic, not probabilistic guesses"
    },
    {
      icon: Eye,
      title: "Explainability by Design",
      description: "Every decision can be traced and explained"
    },
    {
      icon: FileCheck,
      title: "Audit-Ready from Day One",
      description: "Built for regulators, not retrofitted"
    },
    {
      icon: Lock,
      title: "Verifiable Compliance",
      description: "Cryptographic proof for every record"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-primary text-lg font-medium mb-4 uppercase tracking-wider" data-testid="text-platform-eyebrow">
            Defantra Platform
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight" data-testid="text-platform-headline">
            AI-Native GRC Intelligence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-platform-subheadline">
            A single compliance intelligence layer combining Specialised AI Agents for deterministic logic, 
            Human-in-the-loop workflows for edge cases, and Immutable blockchain records for audit and dispute resolution.
          </p>
          <Button
            variant="cta"
            size="xl"
            onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
            data-testid="button-platform-demo"
          >
            Request Demo
          </Button>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-design-principles">
            Designed for Regulated Scale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPrinciples.map((principle, index) => (
              <Card key={index} className="p-6 text-center" data-testid={`card-design-${index}`}>
                <principle.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <section 
          key={feature.id}
          id={feature.id}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-secondary/30' : ''}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <feature.icon className="w-16 h-16 text-primary mb-6" data-testid={`icon-feature-${feature.id}`} />
                <h2 className="text-4xl font-bold mb-4 tracking-tight" data-testid={`text-feature-title-${feature.id}`}>
                  {feature.title}
                </h2>
                <p className="text-xl text-primary font-medium mb-4" data-testid={`text-feature-subtitle-${feature.id}`}>
                  {feature.subtitle}
                </p>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed" data-testid={`text-feature-description-${feature.id}`}>
                  {feature.description}
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
                  data-testid={`button-feature-contact-${feature.id}`}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <Card className="p-8" data-testid={`card-feature-details-${feature.id}`}>
                  <h3 className="font-bold text-lg mb-4">How It Works</h3>
                  <ul className="space-y-3 mb-8">
                    {feature.capabilities.map((cap, capIndex) => (
                      <li key={capIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{cap}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="font-bold text-lg mb-4">Outcomes</h3>
                  <ul className="space-y-2">
                    {feature.outcomes.map((outcome, outIndex) => (
                      <li key={outIndex} className="flex items-center gap-2 text-primary font-medium">
                        <span>→</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight" data-testid="text-platform-cta-headline">
            Ready to see the platform in action?
          </h2>
          <p className="text-xl text-muted-foreground mb-8" data-testid="text-platform-cta-subheadline">
            Schedule a demo to see how Defantra can transform your GRC operations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="cta"
              size="xl"
              onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
              data-testid="button-platform-cta-demo"
            >
              Request Demo
            </Button>
            <Button variant="outline" size="xl" asChild data-testid="link-platform-services">
              <Link href="/services">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
