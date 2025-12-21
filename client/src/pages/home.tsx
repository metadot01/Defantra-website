import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Layers, CheckCircle2, Building2, Truck, Package, Globe, Bot, Link2, Eye, FileCheck, Lock, Users } from "lucide-react";
import NeuralNetworkBackground from "@/components/neural-network-background";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  const coreCapabilities = [
    {
      icon: Bot,
      title: "AI Agents for GRC",
      headline: "Intelligent Automation for Compliance",
      body: "Deterministic AI agents that handle governance, risk assessment, and compliance workflows with confidence scoring and human escalation.",
      proof: "Rule-based logic | Explainable decisions | Audit-ready"
    },
    {
      icon: Link2,
      title: "Blockchain Audit Trail",
      headline: "Legally Defensible Records",
      body: "Every decision, classification, and override is recorded immutably. Cryptographically verifiable proof for regulators and audits.",
      proof: "Immutable records | Dispute resolution | Regulatory compliance"
    },
    {
      icon: Users,
      title: "Human-in-the-Loop",
      headline: "Expert Oversight Where It Matters",
      body: "AI handles rule-based decisions at machine speed. Humans resolve ambiguity and edge cases with full accountability.",
      proof: "Escalation workflows | Expert review | Clear responsibility"
    },
    {
      icon: Eye,
      title: "Confidence Scoring",
      headline: "Transparent Decision Intelligence",
      body: "Every AI decision includes confidence metrics. Low confidence triggers human review, ensuring quality without blind automation.",
      proof: "Deterministic outputs | No black boxes | Full traceability"
    }
  ];

  const painPoints = [
    {
      problem: "Manual, repetitive compliance work",
      solution: "AI agents automate routine decisions"
    },
    {
      problem: "Unclear audit trails",
      solution: "Blockchain ensures verifiable records"
    },
    {
      problem: "Regulatory change management",
      solution: "Continuous monitoring and flagging"
    },
    {
      problem: "Risk decisions with audit exposure",
      solution: "Transparent scoring and accountability"
    },
    {
      problem: "Disconnected systems",
      solution: "Unified compliance intelligence layer"
    },
    {
      problem: "Shortage of compliance experts",
      solution: "AI handles routine, experts focus on judgment"
    }
  ];

  const principles = [
    {
      icon: CheckCircle2,
      title: "Automate What Rules Define",
      description: "Clear rules get automated. Ambiguity gets escalated."
    },
    {
      icon: Users,
      title: "Humans Accountable for Judgment",
      description: "AI assists. Humans decide. Responsibility is explicit."
    },
    {
      icon: FileCheck,
      title: "Make Outcomes Provable",
      description: "Every decision has cryptographic proof."
    },
    {
      icon: Shield,
      title: "Design for Audits",
      description: "Built for regulators, not demos."
    }
  ];

  const targetAudiences = [
    {
      icon: Building2,
      name: "Regulated Enterprises",
      description: "Financial services, healthcare, and industries with audit exposure"
    },
    {
      icon: Truck,
      name: "Customs & Trade",
      description: "Brokers, forwarders, and global logistics operations"
    },
    {
      icon: Package,
      name: "Government Programmes",
      description: "Public sector compliance and regulatory bodies"
    },
    {
      icon: Globe,
      name: "Global Operations",
      description: "Multi-jurisdiction compliance and cross-border coordination"
    },
    {
      icon: Lock,
      name: "High-Stakes Decisions",
      description: "Organizations where compliance failure is not an option"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <NeuralNetworkBackground />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-lg font-medium mb-4 uppercase tracking-wider" data-testid="text-hero-eyebrow">
            GRC Platform powered by AI Agents and Blockchain
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight" data-testid="text-hero-headline">
            Verifiable Trust for
            <br />
            <span className="text-primary">
              Governance, Risk & Compliance
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subheadline">
            AI Agents automate what rules can define. Blockchain creates legally defensible, 
            transparent, and auditable records. Humans remain accountable for judgment.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              variant="cta"
              size="xl"
              onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
              data-testid="button-request-demo-hero"
            >
              Request Demo
            </Button>
            <Button variant="outline" size="xl" asChild data-testid="link-explore-platform">
              <Link href="/platform">
                Explore Platform
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2" data-testid="badge-audit-ready">
              <span className="text-primary">●</span>
              <span>Audit-Ready by Design</span>
            </div>
            <div className="flex items-center gap-2" data-testid="badge-blockchain">
              <span className="text-primary">●</span>
              <span>Blockchain Verified</span>
            </div>
            <div className="flex items-center gap-2" data-testid="badge-human-oversight">
              <span className="text-primary">●</span>
              <span>Human Oversight</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Problem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" data-testid="text-problem-headline">
              Why GRC Systems Fail
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-problem-subheadline">
              Most AI systems fail not because the models are weak, but because responsibility is unclear. 
              We design systems where responsibility is explicit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <Card key={index} className="p-6" data-testid={`card-painpoint-${index}`}>
                <p className="text-muted-foreground text-sm mb-3 line-through opacity-60" data-testid={`text-problem-${index}`}>
                  {point.problem}
                </p>
                <p className="text-foreground font-medium flex items-center gap-2" data-testid={`text-solution-${index}`}>
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {point.solution}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" data-testid="text-capabilities-headline">
              <span className="text-primary">Platform Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-capabilities-subheadline">
              Designed for regulated scale. Built for verifiable trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreCapabilities.map((capability, index) => (
              <Card 
                key={index}
                className="p-8 hover:border-primary/50 transition-all duration-300"
                data-testid={`card-capability-${index}`}
              >
                <capability.icon className="w-12 h-12 text-primary mb-4" data-testid={`icon-capability-${index}`} />
                <h3 className="text-2xl font-bold mb-3 tracking-tight" data-testid={`text-capability-headline-${index}`}>{capability.headline}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-capability-body-${index}`}>
                  {capability.body}
                </p>
                <p className="text-sm text-primary font-semibold" data-testid={`text-capability-proof-${index}`}>
                  {capability.proof}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" data-testid="text-principles-headline">
              Our Principles
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-principles-subheadline">
              AI does not remove responsibility. It concentrates it. We build systems that can carry that weight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="p-6 text-center" data-testid={`card-principle-${index}`}>
                <principle.icon className="w-10 h-10 text-primary mx-auto mb-4" data-testid={`icon-principle-${index}`} />
                <h3 className="text-lg font-bold mb-2 tracking-tight" data-testid={`text-principle-title-${index}`}>{principle.title}</h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-principle-description-${index}`}>{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" data-testid="text-howwework-headline">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <Card className="p-6" data-testid="card-work-teams">
              <p className="text-4xl font-bold text-primary mb-2" data-testid="text-work-teams-icon">👥</p>
              <p className="font-medium" data-testid="text-work-teams-label">Small, Senior Teams</p>
            </Card>
            <Card className="p-6" data-testid="card-work-architecture">
              <p className="text-4xl font-bold text-primary mb-2" data-testid="text-work-architecture-icon">📐</p>
              <p className="font-medium" data-testid="text-work-architecture-label">Architecture First</p>
            </Card>
            <Card className="p-6" data-testid="card-work-transparency">
              <p className="text-4xl font-bold text-primary mb-2" data-testid="text-work-transparency-icon">🔍</p>
              <p className="font-medium" data-testid="text-work-transparency-label">No Black Boxes</p>
            </Card>
            <Card className="p-6" data-testid="card-work-compliance">
              <p className="text-4xl font-bold text-primary mb-2" data-testid="text-work-compliance-icon">✅</p>
              <p className="font-medium" data-testid="text-work-compliance-label">No Compliance Theatre</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" data-testid="text-audiences-headline">
              Who It's For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {targetAudiences.map((audience, index) => (
              <Card key={index} className="p-6 text-center hover:border-primary/50 transition-all duration-300" data-testid={`card-audience-${index}`}>
                <audience.icon className="w-12 h-12 text-primary mx-auto mb-3" data-testid={`icon-audience-${index}`} />
                <h3 className="text-lg font-bold mb-2 tracking-tight" data-testid={`text-audience-name-${index}`}>{audience.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-audience-description-${index}`}>{audience.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" data-testid="text-final-cta-headline">
            Ready for <span className="text-primary">Verifiable Compliance?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed" data-testid="text-final-cta-subheadline">
            Modernise your GRC operations without increasing risk.<br />
            AI Agents. Blockchain records. Human accountability.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              variant="cta"
              size="xl"
              onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
              data-testid="button-request-demo-final"
            >
              Request Demo
            </Button>
            <Button variant="outline" size="xl" asChild data-testid="link-learn-more">
              <Link href="/platform">
                Learn More
              </Link>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground space-y-2">
            <p data-testid="text-contact-info">University of Stirling Innovation Park, UK | contact@defantra.com</p>
            <p data-testid="text-response-info">Response time: &lt;24 hours | Outside IR35 Available</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
