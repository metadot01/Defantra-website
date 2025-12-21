import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import defantraLogo from "@/assets/defantra-logo.png";
import { Shield, Zap, Layers, CheckCircle2 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const pillars = [
    {
      icon: Zap,
      title: "LLM Optimization",
      headline: "Lightning-Fast LLM Performance",
      body: "Quantization, distributed inference, and CUDA optimization that cuts latency by 60%+ without sacrificing accuracy.",
      proof: "65% latency reduction | 50% cost savings | 10x throughput"
    },
    {
      icon: Layers,
      title: "Solution Architecture",
      headline: "AI Systems Designed for the Long Term",
      body: "From prototype to production, we architect scalable AI infrastructure that grows with your business.",
      proof: "$1M+ enterprise projects | 15+ years architecture experience"
    },
    {
      icon: Shield,
      title: "Securing AI Systems",
      headline: "Adversarial-Resistant AI Infrastructure",
      body: "Red team assessments, jailbreak prevention, and security hardening that protects your AI from emerging threats.",
      proof: "Published research | 40% robustness improvement | FCA-ready"
    },
    {
      icon: CheckCircle2,
      title: "AI Security Solutions",
      headline: "Compliance-Ready, Regulation-Proof AI",
      body: "Security solutions designed for FCA, GDPR, and EU AI Act compliance without compromising performance.",
      proof: "GDPR/HIPAA compliant | ICO-ready | Zero breaches"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src={defantraLogo} 
            alt="Defantra AI" 
            className="w-20 h-20 mx-auto mb-8 drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]" 
          />
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Architect. Secure. Optimize.<br />
            <span className="bg-clip-text text-transparent bg-gradient-primary">
              Enterprise AI Systems That Scale Safely.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We architect production-grade AI systems with security embedded at every layer. 
            From LLM optimization to adversarial defense, we deliver AI solutions that 
            perform flawlessly and resist attacks.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="cta" size="xl">
              Book Free Audit
            </Button>
            <Button variant="outline" size="xl" onClick={() => navigate("/solutions")}>
              View Solutions
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-primary">●</span>
              <span>Enterprise-Proven</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">●</span>
              <span>Research-Backed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">●</span>
              <span>Edinburgh, UK</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">●</span>
              <span>Inside/Outside IR35</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your AI system is vulnerable, expensive, or slow—<br />
            <span className="text-primary">often all three.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Security breaches cost £millions. Slow models kill user experience. 
            High costs prevent scaling.
          </p>
          <p className="text-2xl font-semibold text-foreground">
            We architect AI systems where security, performance, and efficiency 
            are engineered in from day one—not bolted on later.
          </p>
        </div>
      </section>

      {/* Core Value Propositions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-primary">Our Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Leveraging techniques proven in enterprise deployments and peer-reviewed research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
              >
                <pillar.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{pillar.headline}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {pillar.body}
                </p>
                <p className="text-sm text-primary font-semibold">
                  {pillar.proof}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by UK FinTech. Proven in Research. Built for Enterprise.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-4xl font-bold text-primary mb-2">65%</p>
              <p className="text-muted-foreground">Latency Reduction</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-4xl font-bold text-primary mb-2">50%</p>
              <p className="text-muted-foreground">Cost Savings</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Years Enterprise AI</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-4xl font-bold text-primary mb-2">40%</p>
              <p className="text-muted-foreground">Robustness Improvement</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-4xl font-bold text-primary mb-2">$1M+</p>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-4xl font-bold text-primary mb-2">Zero</p>
              <p className="text-muted-foreground">Security Breaches</p>
            </div>
          </div>

          <div className="mt-12 text-center space-y-3">
            <p className="text-muted-foreground">
              ✓ MSc Artificial Intelligence (University of Stirling)
            </p>
            <p className="text-muted-foreground">
              ✓ Published Research: Adversarial AI & XAI
            </p>
            <p className="text-muted-foreground">
              ✓ Enterprise Deployments: EMC, Dell Technologies
            </p>
            <p className="text-muted-foreground">
              ✓ FCA/GDPR Compliant | HIPAA-Ready | EU AI Act Expertise
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Guessing. <span className="bg-clip-text text-transparent bg-gradient-primary">Start Securing.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Book a free 30-minute AI security & optimization audit.<br />
            No sales pitch. Just technical insights.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="cta" size="xl">
              Book Free Audit
            </Button>
            <Button variant="outline" size="xl" onClick={() => navigate("/solutions")}>
              View All Solutions
            </Button>
          </div>

          <div className="text-sm text-muted-foreground space-y-2">
            <p>Edinburgh, UK | bharath@defantra.com | +44 7950 932783</p>
            <p>Response time: &lt;24 hours | Inside/Outside IR35 | SC Clearance Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
