import { Link } from "wouter";
import { Linkedin, MessageCircle, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Platform Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Platform</h3>
            <div className="space-y-3">
              <Link href="/platform#ai-agents" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-ai-agents">
                AI Agents for GRC
              </Link>
              <Link href="/platform#blockchain" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-blockchain">
                Blockchain Audit Trail
              </Link>
              <Link href="/platform#human-loop" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-human-loop">
                Human-in-the-Loop
              </Link>
              <Link href="/platform#confidence" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-confidence">
                Confidence Scoring
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Services</h3>
            <div className="space-y-3">
              <Link href="/services#ai-ml" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-ai-ml">
                AI/ML Architecture
              </Link>
              <Link href="/services#blockchain" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-blockchain-services">
                Blockchain Systems
              </Link>
              <Link href="/services#regulated" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-regulated">
                Regulated Systems
              </Link>
              <Link href="/services#advisory" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-advisory">
                Advisory & Training
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Company</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">
                About Us
              </Link>
              <Link href="/about#team" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-team">
                Team
              </Link>
              <Link href="/about#partnerships" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-partnerships">
                R&D Partnerships
              </Link>
              <Link href="/resources" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-resources">
                Resources
              </Link>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Connect</h3>
            <div className="space-y-3 mb-6">
              <a 
                href="mailto:contact@defantra.com"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                contact@defantra.com
              </a>
              <a 
                href="https://www.defantra.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-website"
              >
                www.defantra.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com/company/defantra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://discord.gg/defantra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Discord"
                data-testid="link-discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@defantra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
                data-testid="link-youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Defantra Ltd. All rights reserved.</p>
              <p className="mt-1">University of Stirling Innovation Park, FK9 4NF, Scotland, UK</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-xs text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors" data-testid="link-privacy">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors" data-testid="link-cookies">
                Cookie Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors" data-testid="link-terms">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
