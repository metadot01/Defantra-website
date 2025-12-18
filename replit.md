# Defantra GRC Platform

## Overview
A professional B2B SaaS marketing website for Defantra, a GRC (Governance, Risk, Compliance) Platform powered by AI Agents and Blockchain technologies. The platform focuses on providing verifiable trust, transparent audit trails, and legally defensible records for regulated industries.

Design follows a minimalist dark theme with navy background (#001428) and cyan accents (#00D4FF), inspired by modern B2B platforms like Linear and Stripe.

## Recent Changes
- **December 18, 2025**: Complete GRC Platform Rebuild ✅
  - Pivoted from AI security consulting to GRC Platform focus
  - New navigation: Platform | Services | Resources | Company
  - Hero: "Verifiable Trust for Governance, Risk & Compliance"
  - Core messaging: AI Agents for GRC + Blockchain for legally defensible records
  - Created Platform page with 4 key features: AI Agents, Blockchain Audit Trail, Human-in-the-Loop, Confidence Scoring
  - Created Services page with 4 core capabilities: AI/ML Architecture, Blockchain Systems, Regulated Systems Engineering, Advisory & Training
  - Created Resources page with GRC frameworks, architecture patterns, case studies
  - Created About page with team info (Bharath Shivaram, R&D team), principles, and R&D partnerships
  - Updated footer to match new navigation structure
  - All content from provided PDF integrated into site structure

## Project Architecture

### Tech Stack
- **Frontend**: React + TypeScript, Wouter (routing), TailwindCSS, Shadcn UI
- **Forms**: React Hook Form, Zod validation, TanStack Query
- **Backend**: Express.js with API endpoints
- **Build**: Vite

### Design System
- **Colors**:
  - Background: `210 28% 8%` (Dark Navy #001428)
  - Primary/Accent: `189 100% 50%` (Cyan #00D4FF)
  - Cards: `210 20% 12%`
  - Borders: `210 15% 20%`
  - Foreground: `0 0% 98%`
  - Muted text: `0 0% 65%`

- **Typography**:
  - Font: Inter (system-ui fallback)
  - Hero headline: 5xl-7xl
  - Section headlines: 3xl-5xl
  - Card headlines: 2xl
  - Body: xl-base

### Site Structure

**Navigation:** Platform | Services | Resources | Company

**Header (All Pages):**
- Enhanced sticky header (h-20) with backdrop blur
- Defantra logo + brand name
- **Mega Menu Navigation:**
  - **Platform**: AI Agents for GRC, Blockchain Audit Trail, Human-in-the-Loop, Confidence Scoring
  - **Services**: AI/ML Architecture, Blockchain & Verifiable Systems, Regulated Systems Engineering, Advisory & Training
  - **Resources**: GRC Frameworks, Architecture Patterns, Case Studies, Research & Insights
  - **Company**: About Us, Team, R&D Partnerships, Contact Us
- "Request Demo" CTA button

**Footer (All Pages):**
- 4-column layout: Platform, Services, Company, Connect
- Location: University of Stirling Innovation Park, FK9 4NF, Scotland, UK
- Company name: Defantra Ltd
- Social links: LinkedIn, Discord, YouTube
- Legal links: Privacy Policy, Cookie Policy, Terms of Service

**Homepage (/):**
1. **Hero**: Neural network animation, GRC Platform positioning, "Verifiable Trust for Governance, Risk & Compliance"
2. **Why GRC Systems Fail**: 6 pain points with solutions
3. **Platform Capabilities**: 4 core capabilities (AI Agents, Blockchain, Human-in-the-Loop, Confidence Scoring)
4. **Our Principles**: 4 guiding principles
5. **How We Work**: Small teams, Architecture first, No black boxes, No compliance theatre
6. **Who It's For**: 5 target audiences (Regulated Enterprises, Customs & Trade, Government, Global Operations, High-Stakes Decisions)
7. **Final CTA**: Request Demo

**Platform Page (/platform):**
- Detailed breakdown of 4 platform features
- Each feature: How it works + Outcomes
- Design principles: Deterministic Outputs, Explainability, Audit-Ready, Verifiable Compliance

**Services Page (/services):**
- Engagement Model: Outside IR35, Senior teams, Architecture-first, Outcome-aligned
- 4 Core Capabilities with detailed service offerings
- Who This Is For section

**Resources Page (/resources):**
- Coming soon library preview
- 4 categories: GRC Frameworks, Architecture Patterns, Case Studies, Research & Insights
- Target audience badges

**About Page (/about):**
- Company principles and vision
- Team section: Bharath Shivaram (Founder), R&D team (Rinold, Sri Nidhi)
- R&D Partnerships with Scottish universities via Interface
- Location: University of Stirling Innovation Park
- Closing thought: "AI does not remove responsibility. It concentrates it."

### Key Features
- **AI Agents for GRC**: Deterministic AI that automates rule-based compliance decisions with confidence scoring
- **Blockchain Audit Trail**: Immutable, legally defensible records for all decisions
- **Human-in-the-Loop**: Expert oversight for edge cases with clear accountability
- **Confidence Scoring**: Transparent decision intelligence with automatic escalation

### API Routes
- **POST /api/contact**: Contact form submissions with validation

## User Preferences
- Minimalist, professional B2B aesthetic
- Dark theme by default
- Emphasis on trust, compliance, and accountability
- Clean, spacious layouts with generous whitespace
- Subtle animations and hover effects
- No emojis in production content (using icons only)

## Company Information
- **Company**: Defantra Ltd
- **Location**: University of Stirling Innovation Park, FK9 4NF, Scotland, UK
- **Email**: contact@defantra.com
- **Website**: www.defantra.com
- **Engagement**: Outside IR35 Available
