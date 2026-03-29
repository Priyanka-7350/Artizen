# Artizen Café — Website PRD

## Overview
A premium, immersive marketing website for **Artizen Café**, an art café in Pune where people eat, drink, and paint. Core tagline: "Eat • Sip • Paint".

---

## Architecture

### Tech Stack
- **Frontend**: React (CRA + Tailwind CSS)
- **Backend**: FastAPI (minimal, just health-check)
- **Database**: MongoDB (not used for this marketing site)
- **Fonts**: DM Serif Display + Poppins (Google Fonts)
- **Icons**: Lucide React

### Key Files
```
/app/frontend/src/
├── App.js                      — Main app, scroll-reveal IntersectionObserver
├── App.css                     — Global styles, animations, CSS variables
├── components/
│   ├── Navbar.jsx              — Sticky glassmorphism nav, mobile menu
│   ├── Hero.jsx                — Full-screen hero, tagline, CTA buttons
│   ├── About.jsx               — Brand story, image collage, Eat/Sip/Paint pillars
│   ├── Experiences.jsx         — Tetris/bento grid, 4 experience cards
│   ├── Menu.jsx                — 3-column typographic menu (bites/sips/specials)
│   ├── Gallery.jsx             — 9-image masonry grid
│   ├── Events.jsx              — 4 event cards with colored accents
│   ├── Testimonials.jsx        — Auto-rotating carousel, 5 reviews
│   ├── Contact.jsx             — Styled map placeholder, contact info cards
│   └── Footer.jsx              — Dark bg, massive display text, links
```

---

## User Personas
- Young adults (18–35) in Pune
- Couples looking for unique date experiences
- Friend groups for social outings
- Solo creatives / art enthusiasts

---

## Core Requirements (Implemented ✅)

### Sections Implemented
- [x] Hero — Full-screen immersive with "Eat. Sip. Paint." headline
- [x] About — Brand story, image collage, Eat/Sip/Paint pillars, floating "Since 2022" badge
- [x] Experiences — 4 cards: Painting Sessions, Date Night, Friends Outing, Chill Time (tetris bento grid)
- [x] Menu — Bites & Plates, Café Sips, Artist Specials (with INR prices)
- [x] Gallery — 9-image masonry grid with hover overlay
- [x] Events — 4 recurring events (Watercolour Weekend, Canvas Date Night, Art & Brunch, Clay & Coffee)
- [x] Testimonials — Auto-rotating carousel with 5 reviews, arrows + dot navigation
- [x] Contact — Styled map placeholder, 4 info cards, social links, "Ready to Paint?" CTA
- [x] Footer — Dark olive background, large display text, quick links, social icons

### Design System
- Color palette: Cream #F9F6F0, Terracotta #E07A5F, Sage #A3B18A, Rose #E5B8B7, Golden #F4D06F
- Typography: DM Serif Display (headings) + Poppins (body)
- Animations: CSS scroll-reveal (IntersectionObserver), hero entrance, float animation
- Mobile responsive with hamburger menu

---

## What's Been Implemented
- **2026-03**: Full MVP site launched with all 9 sections + footer
- IntersectionObserver-based scroll animations
- Mobile-first responsive layout
- Masonry gallery
- Testimonials auto-carousel (5.5s interval)
- Styled decorative map placeholder

---

## Prioritized Backlog

### P0 (Critical — None Currently)
- None

### P1 (Important — Next Phase)
- [ ] Online booking/reservation form with backend (currently "Book a Session" links to contact)
- [ ] Real Google Maps integration for contact section
- [ ] Actual Instagram gallery feed integration
- [ ] Contact form with email notifications

### P2 (Nice to Have)
- [ ] Blog/Articles section ("Art Tips & Café Stories")
- [ ] WhatsApp chat widget for quick inquiries
- [ ] Photo lightbox for gallery images
- [ ] Custom domain setup (artizencafe.in)
- [ ] SEO meta tags, Open Graph images

---

## Next Tasks
1. Add booking form (P1) — simple name/date/session-type form that saves to MongoDB and sends email
2. Integrate real Google Maps embed
3. Add Instagram feed API for live gallery
4. Deploy to custom domain
