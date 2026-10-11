# InAmigos Foundation — NGO Website Design System & Homepage Prototype

> **"Small Acts. Big Change. A Better Tomorrow."**  
> A modern, human-centered, accessible, and responsive nonprofit organization website homepage crafted with purposeful editorial design, emotional storytelling, and trustworthy UI.

---

## 1. Project Overview & Creative Direction

**InAmigos Foundation** is a community-driven nonprofit organization dedicated to grassroots development, education for every child, community wellbeing, and environmental care.

This project delivers a **production-ready frontend website homepage prototype** and a **reusable component system** designed according to senior UI/UX design standards. It prioritizes:
- **Emotional Storytelling**: Real community narratives, human-focused photography, and clear mission anchors.
- **Trust & Transparency**: Clear disclaimers for sample figures, transparent donation tier explanations, and respectful privacy practices.
- **Action-Oriented UX**: Zero dead buttons, immediate visual feedback, seamless donation amount calculators, and interactive volunteer onboarding.
- **Accessibility & Contrast**: WCAG 2.2 compliant color contrast, explicit keyboard focus rings, semantic HTML5 tags, and responsive accessibility labels.

---

## 2. Design Theme & Visual Identity

### A. Color Palette Tokens

| Token Name | Hex Code | Role & Usage | Contrast Ratio on Cream |
| :--- | :--- | :--- | :--- |
| **Forest Green** | `#174C3C` | Primary brand color, sticky navigation, headings, primary buttons, footer background | `8.7:1` (AAA Compliant) |
| **Warm Cream** | `#F7F4EC` | Main page background, soft card surfaces, natural paper-like warmth | Base Surface |
| **Pure White** | `#FFFFFF` | Elevation cards, content panels, interactive forms | Clean Contrast |
| **Coral Orange** | `#F28B62` | Accent color, high-priority CTAs ("Donate Now", "Make a Difference"), badges | `3.2:1` on Dark Forest / High Pop |
| **Dark Charcoal** | `#242824` | Primary body text and subheadings, high legibility | `11.8:1` (AAA Compliant) |
| **Muted Sage** | `#DCE9DF` | Secondary backgrounds, announcement bar, icon badge containers, subtle borders | Soft Accent Surface |

### B. Typography Hierarchy

- **Headings Font**: **DM Sans** (Weights: `600`, `700`, `800`)
  - Warm, bold geometric sans-serif with friendly curves that convey approachability and strength.
  - Expressive title sizes: `H1` at `3.4rem` (desktop) down to `2.2rem` (mobile), with tight negative letter-spacing (`-0.03em`).
- **Body & Interface Font**: **Manrope** (Weights: `400`, `500`, `600`, `700`)
  - Modern European grotesque sans-serif engineered for high legibility across screens of all resolutions.
  - Comfortable line heights (`1.65`) and generous tracking for readability.

---

## 3. Architecture & Section Breakdown

### 1. Header & Navigation Bar
- **Announcement Bar**: Highlights foundation achievements and quick links to upcoming drives.
- **Sticky Glassmorphic Nav**: Clean header with subtle backdrop blur (`rgba(247, 244, 236, 0.94)`).
- **Brand Logo**: Custom SVG combining an organic heart entwined with community hands and modern typography.
- **Desktop Links**: Home, About Us, Our Impact, Campaigns, Volunteer, Contact.
- **Primary Action**: Prominent Coral Orange `"Donate Now"` button.
- **Mobile Menu**: Responsive hamburger drawer with backdrop blur, full touch support, and keyboard escape handling.

### 2. Hero Section
- **Balanced Two-Column Layout**:
  - *Left Column*:
    - Eyebrow tag: `"TOGETHER, WE CAN MAKE A DIFFERENCE"`
    - Headline: `"Small Acts. Big Change. A Better Tomorrow."`
    - Description: *"Every helping hand creates a new possibility. Join us in building stronger communities and creating meaningful change, one life at a time."*
    - Primary CTA: `"Donate Now"` (Coral orange)
    - Secondary CTA: `"Become a Volunteer"` (Outlined forest green)
    - Trust message bar: *"Every action counts. Every person matters."* with verification icons.
  - *Right Column*:
    - Authentic community photograph featuring volunteers working with children.
    - Floating Badge 1: `"Change starts with us."` with heart icon and volunteer count.
    - Floating Badge 2: `"15+ Communities Empowered"` status pill.

### 3. Mission Pillars (Context Bridge)
- Quick editorial overview of InAmigos Foundation’s core focus areas:
  - **Education for All**: Textbooks, after-school mentorship, foundational literacy.
  - **Community Wellbeing**: Nutrition assistance, winter relief, family aid.
  - **Green Living**: Tree plantation drives, neighborhood parks restoration.

### 4. Impact Showcase
- Section Heading: `"Together, We're Making a Difference"`
- Illustrative Sample Data Disclaimer clearly badged for prototype transparency.
- **4 Stat Cards** with live animated counter transitions:
  - `5,000+` People Reached
  - `25+` Community Projects
  - `200+` Active Volunteers
  - `15+` Communities Supported
- Testimonial banner from the InAmigos Community Working Group.

### 5. Interactive Donation Section
- Section Heading: `"Be the Reason Someone Smiles Today"`
- **Left Column: Impact Value Tiers**:
  - `₹500`: Childhood Learning Kit for 2 children.
  - `₹1,000`: Community Nutrition Support for a family.
  - `₹2,500`: Youth Mentorship & Digital Literacy Workshop.
  - `₹5,000`: Neighborhood Green Canopy (25 native trees).
  - Reassurance message: *"Your support matters. Your generosity creates possibilities."*
- **Right Column: Interactive Donation Panel**:
  - Frequency toggle: **One-Time Donation** vs. **Monthly Giving**.
  - Preset amount chips: `₹500`, `₹1,000`, `₹2,500`, `₹5,000` with active highlights.
  - Custom amount input with real-time `₹` prefix and live tier synchronization.
  - Cause allocation dropdown (General Fund, Education, Community Care, Green Tomorrow).
  - Donor name & receipt email fields.
  - Terms of donation agreement checkbox with validation.
  - Primary button: `"Make a Difference"`.
  - **Donation Summary & Prototype Confirmation Modal**: Renders a complete donation summary with explicit prototype disclaimer (no real financial gateway connected).

### 6. Campaigns & Events
- Section Heading: `"Be Part of Something Meaningful"`
- **3 Dynamic Campaign Cards**:
  1. **Education for Every Child**: Literacy focus, sample progress indicator (`₹3,50,000 / ₹5,00,000`), CTA scrolls to donation form and preselects Education.
  2. **Community Care**: Wellbeing focus, sample progress indicator (`₹2,60,000 / ₹4,00,000`), CTA opens interactive Campaign Overview modal.
  3. **Green Tomorrow**: Environmental focus, sample progress indicator (`₹1,80,000 / ₹3,00,000`), CTA scrolls to Volunteer form with Environment preselected.
- **Upcoming Community Events**:
  - Event cards for Children's Day Reading Carnival, Green Canopy Drive, and Winter Care Outreach.
  - Interactive `"Join Event"` buttons that launch an **Event RSVP Modal**.

### 7. Volunteer Registration Section
- Section Heading: `"Your Time Can Change a Life"`
- **Left Column**: Volunteer value proposition (community fellowship, flexible hours, grassroots impact, service certificates).
- **Right Column**: Comprehensive registration form:
  - Full Name, Email, Phone, City.
  - Areas of Interest (interactive pill badges: Education, Community Support, Environment, Event Management).
  - Availability (Weekends, Weekdays, Flexible).
  - Motivation message ("Why would you like to volunteer?").
  - Consent checkbox for volunteer communication.
  - Full JavaScript validation with inline error messages and personalized **Volunteer Welcome Modal**.

### 8. Testimonials and Stories of Change
- Section Heading: `"Real People. Real Impact."`
- **3 Testimonial Cards** featuring quotes from:
  - *Priya Sharma* (Teaching Volunteer)
  - *Rajesh Kumar* (Community Resident & Local Coordinator)
  - *Ananya Deshmukh* (Environmental Campaign Volunteer)
- Star ratings and author portraits.
- `"Explore More Stories of Change"` button opening the **Grassroots Chronicles Modal**.

### 9. Contact & Support Section (With FAQ Accordion)
- Section Heading: `"We'd Love to Hear From You"`
- **Left Column**:
  - Editable placeholders for email, phone, and Bangalore office address.
  - Social media icon row (Instagram, LinkedIn, Twitter/X, Facebook, YouTube).
  - **FAQ Accordion**: 4 interactive collapsible items addressing donations, volunteering prerequisites, city chapters, and corporate partnerships.
- **Right Column**:
  - Send a Message form (Name, Email, Subject dropdown, Message).
  - Real-time client-side validation with automated success alert toast.

### 10. Footer
- Deep Forest Green (`#174C3C`) background with warm cream typography and coral accents.
- Logo, mission statement, navigation columns, campaign links, volunteer resources.
- Copyright (`© 2026 InAmigos Foundation`), Privacy Policy and Terms of Service modals.
- Final closing message: *"Together, we can make tomorrow brighter."*

---

## 4. Prototype & Review Tools

Built directly into the top of the prototype is an interactive **Reviewer Toolbar**:

1. 🌐 **Responsive View**: Standard responsive behavior adapting dynamically to any window size.
2. 💻 **Desktop 1440px**: Simulates a 1440px desktop canvas with centered 1180px layout container, borders, and ambient drop shadows.
3. 📱 **Mobile 390px**: Simulates a mobile device frame (390px width) complete with phone bezel, notch indicator, touch scrolling, and collapsed mobile UI.
4. 🎨 **Design System Inspector**: Opens an interactive modal showcasing color swatches, typography scales, button variants, and layout token specifications.

---

## 5. File Structure

```
c:\Users\poona\OneDrive\Desktop\Tasks\Task5\
├── index.html        # Semantic HTML5 layout with all 10 required sections & 7 interactive modals
├── styles.css        # Modular CSS with custom tokens, responsive breakpoints, and animations
├── app.js            # Vanilla JS logic for interactions, validations, counters, modals, and viewport modes
└── README.md         # Comprehensive design documentation, tokens, and developer notes
```

---

## 6. How to Run & Preview

### Method 1: Direct Browser Opening (No dependencies needed)
Double-click `index.html` or open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari:
```text
file:///c:/Users/poona/OneDrive/Desktop/Tasks/Task5/index.html
```

### Method 2: Local HTTP Server (Python)
Run the following in PowerShell:
```powershell
python -m http.server 8080
```
Then open: `http://localhost:8080`

### Method 3: Node.js (npx serve)
```powershell
npx serve .
```

---

## 7. Figma Recreation Guide

To export or recreate this design in Figma:
1. **Frame Setup**:
   - Create a Desktop Frame at `1440 × 3800 px`.
   - Set Layout Grid to `12 columns`, max width `1180px`, gutter `24px`, margin `auto`.
   - Create a Mobile Frame at `390 × 5200 px`, margin `20px`.
2. **Color Styles**:
   - Primary: `#174C3C` (Forest Green)
   - Background: `#F7F4EC` (Warm Cream)
   - Surface: `#FFFFFF` (Pure White)
   - Accent: `#F28B62` (Coral Orange)
   - Text: `#242824` (Dark Charcoal)
   - Muted: `#DCE9DF` (Muted Sage)
3. **Type Styles**:
   - Heading 1: DM Sans 800, 54px / line height 60px / -0.03em
   - Heading 2: DM Sans 700, 42px / line height 48px / -0.02em
   - Heading 3: DM Sans 700, 24px / line height 32px
   - Body Regular: Manrope 400, 16px / line height 26px
   - Body Bold: Manrope 700, 16px / line height 26px
4. **Elevation**:
   - Card Shadow: `0px 8px 24px -4px rgba(23, 76, 60, 0.06)`
   - Floating Badge Shadow: `0px 16px 36px -6px rgba(23, 76, 60, 0.12)`
