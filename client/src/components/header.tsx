import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import defantraLogo from "@assets/Defantra AI_1760927321518.png";
import { ContactFormDialog } from "@/components/contact-form-dialog";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  useEffect(() => {
    const handleOpenContact = () => setIsContactDialogOpen(true);
    window.addEventListener('openContactDialog', handleOpenContact);
    return () => window.removeEventListener('openContactDialog', handleOpenContact);
  }, []);

  const platform = [
    { title: "AI Agents for GRC", href: "/platform#ai-agents", description: "Intelligent automation for governance, risk & compliance" },
    { title: "Blockchain Audit Trail", href: "/platform#blockchain", description: "Immutable, legally defensible records" },
    { title: "Human-in-the-Loop", href: "/platform#human-loop", description: "Expert oversight for edge cases" },
    { title: "Confidence Scoring", href: "/platform#confidence", description: "Transparent decision intelligence" },
  ];

  const services = [
    { title: "AI/ML Architecture", href: "/services#ai-ml", description: "Deterministic and hybrid AI systems" },
    { title: "Blockchain & Verifiable Systems", href: "/services#blockchain", description: "Immutable audit trails for regulated decisions" },
    { title: "Regulated Systems Engineering", href: "/services#regulated", description: "Policy-to-code translation" },
    { title: "Advisory & Training", href: "/services#advisory", description: "Enterprise AI training & upskilling" },
  ];

  const resources = [
    { title: "GRC Frameworks", href: "/resources#frameworks" },
    { title: "Architecture Patterns", href: "/resources#patterns" },
    { title: "Case Studies", href: "/resources#case-studies" },
    { title: "Research & Insights", href: "/resources#research" },
  ];

  const company = [
    { title: "About Us", href: "/about" },
    { title: "Team", href: "/about#team" },
    { title: "R&D Partnerships", href: "/about#partnerships" },
    { title: "Contact Us", onClick: () => setIsContactDialogOpen(true) },
  ];

  const menuItemClass = "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded-md cursor-pointer" data-testid="link-home">
              <img 
                src={defantraLogo} 
                alt="Defantra" 
                className="h-10 w-10"
                data-testid="img-header-logo"
              />
              <span className="text-2xl font-semibold text-foreground">Defantra</span>
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-2">
                {/* Platform Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium" data-testid="menu-platform">
                    Platform
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-6">
                      {platform.map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <Link 
                            href={item.href} 
                            className={menuItemClass}
                            data-testid={`menu-item-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <div className="text-base font-medium leading-none">{item.title}</div>
                            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium" data-testid="menu-services">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-6">
                      {services.map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <Link 
                            href={item.href} 
                            className={menuItemClass}
                            data-testid={`menu-item-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <div className="text-base font-medium leading-none">{item.title}</div>
                            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium" data-testid="menu-resources">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-3 p-6">
                      {resources.map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <Link 
                            href={item.href} 
                            className={menuItemClass}
                            data-testid={`menu-item-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <div className="text-base font-medium leading-none">{item.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Company Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium" data-testid="menu-company">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-3 p-6">
                      {company.map((item) => (
                        item.onClick ? (
                          <button
                            key={item.title}
                            onClick={item.onClick}
                            className={`${menuItemClass} text-left w-full`}
                            data-testid={`menu-item-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <div className="text-base font-medium leading-none">{item.title}</div>
                          </button>
                        ) : (
                          <NavigationMenuLink key={item.title} asChild>
                            <Link 
                              href={item.href!} 
                              className={menuItemClass}
                              data-testid={`menu-item-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <div className="text-base font-medium leading-none">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        )
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button 
              variant="cta"
              size="lg"
              onClick={() => setIsContactDialogOpen(true)}
              data-testid="button-request-demo"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </header>

      <ContactFormDialog 
        open={isContactDialogOpen}
        onOpenChange={setIsContactDialogOpen}
      />
    </>
  );
}
