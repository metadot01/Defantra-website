import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, GraduationCap, Shield } from "lucide-react";

export default function Courses() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" data-testid="heading-courses">
            AI Security & Optimization
            <span className="block text-primary mt-2">Training Courses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8" data-testid="text-courses-intro">
            Professional training programs designed to upskill your team in enterprise AI security, 
            LLM optimization, and best practices.
          </p>
          <p className="text-lg text-muted-foreground italic" data-testid="text-coming-soon">
            Comprehensive course catalog coming soon. Contact us for custom training programs.
          </p>
        </div>
      </section>

      {/* Placeholder Course Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover-elevate" data-testid="card-course-security">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3 tracking-tight">AI Security</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Learn to identify and mitigate adversarial attacks, implement security hardening, 
                and build robust AI systems.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Adversarial AI Defense</li>
                <li>• Jailbreak Prevention</li>
                <li>• Security Testing</li>
                <li>• Threat Modeling</li>
              </ul>
            </Card>

            <Card className="p-8 hover-elevate" data-testid="card-course-optimization">
              <GraduationCap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3 tracking-tight">LLM Optimization</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Master techniques for optimizing LLM performance, reducing costs, 
                and improving inference speed.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Model Quantization</li>
                <li>• Distributed Inference</li>
                <li>• CUDA Optimization</li>
                <li>• Cost Reduction</li>
              </ul>
            </Card>

            <Card className="p-8 hover-elevate" data-testid="card-course-compliance">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3 tracking-tight">AI Compliance</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Navigate regulatory requirements with confidence. Learn GDPR, FCA, 
                and EU AI Act compliance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• GDPR & HIPAA Compliance</li>
                <li>• EU AI Act Readiness</li>
                <li>• Explainable AI (XAI)</li>
                <li>• Audit Preparation</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6" data-testid="heading-cta">
            Need Custom Training?
          </h2>
          <p className="text-xl text-muted-foreground mb-8" data-testid="text-cta">
            We offer bespoke training programs tailored to your team's specific needs and skill levels.
          </p>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
            data-testid="button-contact"
          >
            Get in Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
