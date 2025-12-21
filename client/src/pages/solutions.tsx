import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Shield, Layers, CheckCircle2, Users, FileText, Brain, Lock } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Solutions() {
  const solutions = [
    {
      icon: Zap,
      category: "LLM Optimization",
      title: "Lightning-Fast LLM Performance",
      description: "Transform your AI systems with enterprise-grade optimization techniques that deliver measurable results.",
      features: [
        "Model quantization (INT8, INT4) without accuracy loss",
        "Distributed inference across GPU clusters",
        "CUDA kernel optimization for 60%+ latency reduction",
        "Token-level caching and batching strategies",
        "Cost analysis and ROI optimization"
      ],
      outcomes: "65% latency reduction | 50% cost savings | 10x throughput"
    },
    {
      icon: Layers,
      category: "Solution Architecture",
      title: "Enterprise AI Infrastructure",
      description: "Build scalable, maintainable AI systems that grow with your business from prototype to production.",
      features: [
        "End-to-end AI pipeline architecture",
        "Multi-model orchestration and versioning",
        "Hybrid cloud and on-premise deployments",
        "CI/CD for ML models and data pipelines",
        "Technical debt reduction and modernization"
      ],
      outcomes: "$1M+ enterprise projects | 15+ years experience"
    },
    {
      icon: Shield,
      category: "AI Security",
      title: "Adversarial-Resistant Systems",
      description: "Protect your AI infrastructure from emerging threats with research-backed security hardening.",
      features: [
        "Red team assessments and penetration testing",
        "Jailbreak prevention and prompt injection defense",
        "Model robustness testing against adversarial attacks",
        "Security monitoring and incident response",
        "Threat modeling for LLM applications"
      ],
      outcomes: "40% robustness improvement | Published research | FCA-ready"
    },
    {
      icon: CheckCircle2,
      category: "Compliance & Governance",
      title: "Regulation-Proof AI",
      description: "Navigate complex regulatory landscapes with compliance solutions that don't compromise performance.",
      features: [
        "FCA, GDPR, and EU AI Act compliance audits",
        "Privacy-preserving AI (federated learning, differential privacy)",
        "Explainable AI (XAI) implementations",
        "Data governance and model documentation",
        "Regulatory reporting and audit trails"
      ],
      outcomes: "GDPR/HIPAA compliant | ICO-ready | Zero breaches"
    },
    {
      icon: Brain,
      category: "Custom AI Development",
      title: "Tailored AI Solutions",
      description: "Build custom AI capabilities that solve your unique business challenges with precision.",
      features: [
        "Custom model training and fine-tuning",
        "Reinforcement Learning (RL) implementations",
        "Personalization and recommendation systems",
        "Multi-modal AI (text, vision, audio)",
        "Domain-specific model adaptation"
      ],
      outcomes: "20%+ efficiency gains | Custom solutions | Production-ready"
    },
    {
      icon: Lock,
      category: "Data Privacy",
      title: "Privacy-First AI",
      description: "Deploy AI that respects user privacy while maintaining high performance and accuracy.",
      features: [
        "Federated learning across multiple sites",
        "Differential privacy implementations",
        "Secure multi-party computation (SMPC)",
        "Homomorphic encryption for AI",
        "Data minimization strategies"
      ],
      outcomes: "HIPAA-ready | Multi-site collaboration | Privacy guaranteed"
    },
    {
      icon: Users,
      category: "Training & Advisory",
      title: "AI Leadership & Upskilling",
      description: "Build internal AI capabilities with expert training and fractional leadership.",
      features: [
        "Fractional AI Lead / LLM Architect services",
        "Team training on LLMs and AI security",
        "Technical workshops and bootcamps",
        "Ongoing advisory and mentorship",
        "Knowledge transfer programs"
      ],
      outcomes: "Team enablement | Reduced dependency | Long-term success"
    },
    {
      icon: FileText,
      category: "Audits & Assessments",
      title: "Comprehensive AI Audits",
      description: "Get expert insights into your AI infrastructure with detailed assessments and actionable recommendations.",
      features: [
        "LLM cost and performance analysis",
        "Security vulnerability assessments",
        "Architecture review and recommendations",
        "Compliance gap analysis",
        "Technical debt identification"
      ],
      outcomes: "3-6 week delivery | Actionable insights | ROI analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" data-testid="heading-solutions">
            AI Solutions Built for
            <span className="block text-primary mt-2">Enterprise Reality</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-solutions-intro">
            From optimization to security, compliance to custom development—we deliver AI solutions
            that solve real problems with measurable outcomes
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-8 hover-elevate" data-testid={`card-solution-${index}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <solution.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1" data-testid={`text-category-${index}`}>
                      {solution.category}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight" data-testid={`heading-solution-${index}`}>
                      {solution.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`text-description-${index}`}>
                  {solution.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm" data-testid={`text-feature-${index}-${idx}`}>
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-primary" data-testid={`text-outcomes-${index}`}>
                    {solution.outcomes}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6" data-testid="heading-cta">
            Ready to Transform Your AI Infrastructure?
          </h2>
          <p className="text-xl text-muted-foreground mb-8" data-testid="text-cta">
            Book a free 30-minute consultation to discuss your specific needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
              data-testid="link-book-audit"
            >
              Book Free Audit
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
              data-testid="link-contact"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
