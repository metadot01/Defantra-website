# Defantra AI Landing Page - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Linear's precise typography, Stripe's confident minimalism, and modern B2B SaaS aesthetics. The design prioritizes technical credibility through restraint, using dark backgrounds and strategic cyan accents to convey expertise and innovation.

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**
- Background: 0 28% 8% (Dark Navy #001428)
- Card/Surface: 0 20% 12%
- Border: 0 15% 20%
- Foreground: 0 0% 98%
- Muted Foreground: 0 0% 65%

**Accent Colors**
- Primary (Cyan): 189 100% 50% (#00D4FF)
- Primary Glow: rgba(0, 212, 255, 0.3)
- Gradient: linear-gradient from cyan to lighter blue tones

**Semantic Colors**
- Success indicators: Use cyan variants
- Warning/Alert: Subtle amber tones at 45 85% 60%

### B. Typography

**Font Stack**
- Primary: Inter or System UI fonts via Google Fonts
- Headings: 600-700 weight, tight tracking (-0.02em)
- Body: 400-500 weight, relaxed leading (1.7)

**Scale**
- Hero H1: text-5xl md:text-6xl lg:text-7xl (80px desktop)
- Section H2: text-3xl md:text-4xl lg:text-5xl
- Card H3: text-2xl
- Body Large: text-xl
- Body: text-base
- Small/Meta: text-sm

### C. Layout System

**Spacing Primitives**
- Use Tailwind units: 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 (desktop), py-12 (mobile)
- Card padding: p-6 to p-8
- Gap spacing: gap-6 to gap-8 for grids

**Container Widths**
- Hero/Full sections: max-w-5xl
- Content sections: max-w-7xl
- Text blocks: max-w-4xl
- Stats grid: max-w-5xl

**Grid Layouts**
- Expertise cards: grid-cols-1 md:grid-cols-2 (2x2 grid)
- Stats: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Services tiers: grid-cols-1 lg:grid-cols-3
- Industries: grid-cols-2 md:grid-cols-3 lg:grid-cols-5

### D. Component Library

**Hero Section**
- Full-screen (90vh minimum) with centered content
- Subtle grid pattern overlay (4rem x 4rem)
- Gradient blur orbs (w-96 h-96, blur-[128px]) positioned top-right and bottom-left
- Logo with cyan glow effect (drop-shadow)
- Gradient text on key phrases using bg-clip-text

**Cards**
- Background: bg-card with border-border
- Rounded corners: rounded-lg
- Hover states: hover:border-primary/50 with transition-all duration-300
- Padding: p-6 to p-8
- Icons: 12x12 (w-12 h-12) in primary color

**Buttons**
- CTA variant: Bold cyan background with glow effect
- Outline variant: Border with transparent background
- Sizes: Regular and xl (size="xl")
- On images: Add backdrop-blur-sm for outline buttons

**Stats Display**
- Large numbers: text-4xl font-bold text-primary
- Description below in muted-foreground
- Card backgrounds with subtle borders

**Alternating Sections**
- Default: bg-background
- Alternate: bg-secondary/30 for visual rhythm

### E. Visual Effects

**Gradient Applications**
- Text gradients on headlines: bg-gradient-primary class
- Subtle background blurs for depth (not overused)
- Grid pattern overlays for technical aesthetic

**Transitions**
- Card hovers: 300ms ease transitions
- Border color changes on hover
- Minimal animation - focus on polish over motion

**Depth & Hierarchy**
- Drop shadows sparingly on logo/key elements
- Border emphasis on hover states
- Whitespace creates natural hierarchy

## Images

**Hero Section**
- Company logo (defantra-logo.png): 80x80px with cyan glow effect, centered above headline
- No large hero background image - using gradient blur orbs instead for abstract tech aesthetic

**Icons**
- Use Lucide React icons throughout
- Expertise pillars: Shield, Zap, Layers, CheckCircle2
- Industry icons: select appropriate Lucide icons for FinTech, Healthcare, GovTech, etc.
- Size: w-12 h-12 for section icons, w-6 h-6 for inline icons

## Page Sections

1. **Hero** (90vh): Logo, headline with gradient, subhead, dual CTAs, trust badges
2. **Problem Statement** (py-20, alternate bg): Centered pain point messaging
3. **Expertise Pillars** (py-20): 2x2 grid of icon cards with metrics
4. **Services Tiers** (py-20, alternate bg): 3-column comparison table with pricing
5. **Credentials** (py-20): Stats grid + text credentials list
6. **Portfolio Highlights** (py-20, alternate bg): Project cards with results
7. **Industries** (py-20): Icon grid with 5 columns
8. **Final CTA** (py-20): Large headline, dual CTAs, contact details

## Key Design Principles

- **Technical Confidence**: Dark theme with precise cyan accents conveys expertise
- **Breathing Room**: Generous py-20 spacing prevents cramped feeling
- **Data-Driven**: Numbers and metrics prominently featured in primary color
- **Scannable**: Clear hierarchy through size, weight, and color
- **Professional Trust**: Minimal animations, focus on clarity and credibility
- **Responsive**: Mobile-first with thoughtful breakpoints (md, lg)