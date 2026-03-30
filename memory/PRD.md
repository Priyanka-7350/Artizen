# Artizen Café — Website PRD

## Overview
A premium, immersive marketing website for **Artizen Café**, an art café in Pune where people eat, drink, and paint. Core tagline: "Eat • Sip • Paint".

---

## Architecture

### Tech Stack
- **Frontend**: React (CRA + Tailwind CSS)
- **Backend**: FastAPI (minimal, health-check only)
- **Fonts**: DM Serif Display + Poppins (Google Fonts)
- **Icons**: Lucide React
- **Images**: Real café photos from GitHub repo + customer uploads

### Key Files
```
/app/frontend/src/
├── App.js                      — Main app, scroll-reveal IntersectionObserver
├── App.css                     — Global styles, animations, CSS variables
├── components/
│   ├── Navbar.jsx              — Sticky glassmorphism nav, hamburger mobile menu
│   ├── Hero.jsx                — 4-slide carousel (5.5s auto-advance)
│   ├── About.jsx               — Brand story, image collage, Eat/Sip/Paint pillars
│   ├── Experiences.jsx         — Tetris bento grid + real café photos
│   ├── Menu.jsx                — 3-column typographic menu (bites/sips/specials)
│   ├── Gallery.jsx             — 18 real images masonry grid (5 uploads + 13 GitHub)
│   ├── ReelsSection.jsx        — Instagram Reels horizontal scroll (13 reels)
│   ├── Events.jsx              — 4 event cards with colored accents
│   ├── Testimonials.jsx        — Auto-rotating carousel with customer photos (1:1)
│   ├── ReadyToPaintBanner.jsx  — Full-width dark CTA banner
│   ├── Contact.jsx             — Styled map placeholder, contact info cards
│   └── Footer.jsx              — Dark bg, massive display text, links
```

---

## Image Sources
- **5 customer uploads**: Direct artifact URLs (groups, couples, solo sessions)
- **13 GitHub images**: `https://raw.githubusercontent.com/Priyanka-7350/Artizen-Website/main/`

---

## Implemented (Phase 1 & 2)

### Sections
- [x] Hero — 4-slide carousel: "More Than a Café — It's an Experience", real café photos
- [x] About — Brand story, image collage, Eat/Sip/Paint pillars
- [x] Experiences — Tetris bento grid with 4 real café photos
- [x] Menu — Bites & Plates, Café Sips, Artist Specials (INR prices)
- [x] Gallery — 18 real café images masonry grid
- [x] Reels — 13 Instagram embed iframes, horizontal scroll, prev/next controls
- [x] Events — 4 recurring events
- [x] Testimonials — Auto-carousel, customer 1:1 photos, 5 reviews
- [x] Ready to Paint Banner — Full-width CTA section
- [x] Contact — Styled map, contact info, social links
- [x] Footer — Dark display text, links, social icons

### Design
- Emergent watermark removed (Pro plan)
- Mobile responsive: hamburger menu at <1024px
- Real Artizen Café photos throughout (not stock images)

---

## Prioritized Backlog

### P1 (Next Phase)
- [ ] Online booking form with backend (name/date/session-type → DB + email)
- [ ] Real Google Maps embed
- [ ] WhatsApp chat widget (high-conversion for local experiences)
- [ ] Contact form with email notifications (Resend / SendGrid)

### P2 (Nice to Have)
- [ ] Blog/Articles section ("Art Tips & Café Stories")
- [ ] Photo lightbox for gallery images
- [ ] Custom domain (artizencafe.in)
- [ ] SEO meta tags, Open Graph images
- [ ] Instagram live feed auto-update

---

## Test Credentials
No authentication - public marketing website.
URL: https://artizen-canvas.preview.emergentagent.com
