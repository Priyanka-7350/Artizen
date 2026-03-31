# Artizen Café — Project Folder Structure

> This document describes the complete folder and file structure of the **Artizen Café** website project. It is intended to help agents and collaborators quickly orient themselves within the codebase.

---

## Overview

Artizen Café is a premium, single-page marketing website for an art café in Pune, India ("Eat • Sip • Paint"). It is built with a **React** frontend and a minimal **FastAPI** backend.

---

## Top-Level Structure

```
Artizen/
├── backend/                  — Python FastAPI server
├── frontend/                 — React + Tailwind CSS single-page application
├── memory/                   — Agent memory / project documentation
├── tests/                    — Root-level Python test suite
├── test_reports/             — Auto-generated test output files
├── .github/                  — GitHub Actions CI/CD workflows
├── .emergent/                — Emergent Agent platform configuration
├── design_guidelines.json    — Visual design system specification
├── test_result.md            — Testing protocol / task tracking for agents
├── FOLDER_STRUCTURE.md       — This file (project structure reference)
└── README.md                 — Project entry point
```

---

## `backend/` — Python API Server

```
backend/
├── server.py        — FastAPI application entry point
├── requirements.txt — Python dependencies
└── .env             — Environment variables (MongoDB URL, DB name, CORS origins)
```

**`server.py`** sets up:
- A FastAPI app with a `/api` prefix router
- MongoDB connection via Motor (async driver)
- `POST /api/status` and `GET /api/status` health-check endpoints
- CORS middleware (origins read from `.env`)
- Graceful DB shutdown on app lifecycle event

**`requirements.txt`** key dependencies:
| Package | Purpose |
|---|---|
| `fastapi` | Web framework |
| `uvicorn` | ASGI server |
| `motor` | Async MongoDB driver |
| `pydantic` | Data validation / models |
| `python-dotenv` | `.env` file loading |
| `boto3` | AWS S3 (future use) |
| `pytest` | Test runner |

---

## `frontend/` — React Application

```
frontend/
├── src/                     — Application source code (main working area)
│   ├── App.js               — Root component; mounts all sections, scroll-reveal observer
│   ├── App.css              — Global CSS, animations, CSS custom properties
│   ├── index.js             — React DOM entry point
│   ├── index.css            — Base reset styles; imports Tailwind layers
│   ├── components/          — All UI sections and reusable components
│   │   ├── Navbar.jsx           — Sticky glassmorphism nav; hamburger menu on mobile (<1024px)
│   │   ├── Hero.jsx             — 4-slide auto-rotating carousel (5.5 s interval)
│   │   ├── About.jsx            — Brand story; image collage; Eat/Sip/Paint pillars
│   │   ├── Experiences.jsx      — Tetris-style bento grid with real café photos
│   │   ├── Menu.jsx             — 3-column typographic menu (Bites/Sips/Specials, INR prices)
│   │   ├── Gallery.jsx          — 18-image masonry grid (5 uploads + 13 from GitHub CDN)
│   │   ├── ReelsSection.jsx     — 13 embedded Instagram Reels; horizontal scroll + prev/next
│   │   ├── Events.jsx           — 4 recurring event cards with coloured accents
│   │   ├── Testimonials.jsx     — Auto-rotating carousel; customer photos; 5 reviews
│   │   ├── ReadyToPaintBanner.jsx — Full-width dark CTA banner
│   │   ├── Contact.jsx          — Styled map placeholder; contact info cards; social links
│   │   ├── Footer.jsx           — Dark background; large display text; nav links; social icons
│   │   └── ui/                  — Shadcn/ui primitive components (Radix UI based)
│   │       ├── accordion.jsx
│   │       ├── alert.jsx
│   │       ├── alert-dialog.jsx
│   │       ├── aspect-ratio.jsx
│   │       ├── avatar.jsx
│   │       ├── badge.jsx
│   │       ├── breadcrumb.jsx
│   │       ├── button.jsx
│   │       ├── calendar.jsx
│   │       ├── card.jsx
│   │       ├── carousel.jsx
│   │       ├── checkbox.jsx
│   │       ├── collapsible.jsx
│   │       ├── command.jsx
│   │       ├── context-menu.jsx
│   │       ├── dialog.jsx
│   │       ├── drawer.jsx
│   │       ├── dropdown-menu.jsx
│   │       ├── form.jsx
│   │       ├── hover-card.jsx
│   │       ├── input.jsx
│   │       ├── input-otp.jsx
│   │       ├── label.jsx
│   │       ├── menubar.jsx
│   │       ├── navigation-menu.jsx
│   │       ├── pagination.jsx
│   │       ├── popover.jsx
│   │       ├── progress.jsx
│   │       ├── radio-group.jsx
│   │       ├── resizable.jsx
│   │       ├── scroll-area.jsx
│   │       ├── select.jsx
│   │       ├── separator.jsx
│   │       ├── sheet.jsx
│   │       ├── skeleton.jsx
│   │       ├── slider.jsx
│   │       ├── sonner.jsx
│   │       ├── switch.jsx
│   │       ├── table.jsx
│   │       ├── tabs.jsx
│   │       ├── textarea.jsx
│   │       ├── toast.jsx
│   │       ├── toaster.jsx
│   │       ├── toggle.jsx
│   │       └── toggle-group.jsx
│   ├── hooks/
│   │   └── use-toast.js     — Custom hook wrapping Radix toast state
│   └── lib/
│       └── utils.js         — `cn()` helper (clsx + tailwind-merge)
├── public/
│   ├── index.html           — HTML shell; Google Fonts import; meta tags
│   └── Images/              — Static image assets served by the dev server / build
│       ├── slide1.jpg       — Hero carousel slide 1
│       ├── slide2.jpg       — Hero carousel slide 2
│       ├── slide3.jpg       — Hero carousel slide 3
│       └── demo/            — Demo / placeholder images (if any)
├── plugins/
│   └── health-check/
│       ├── health-endpoints.js      — Express-style health endpoint definitions
│       └── webpack-health-plugin.js — Custom Webpack plugin exposing health routes
├── package.json             — NPM/Yarn manifest; scripts: start, build, test
├── craco.config.js          — Create React App Config Override (Craco)
├── jsconfig.json            — JS path aliases (maps `@/*` → `src/*`)
├── tailwind.config.js       — Tailwind CSS theme extension (colors, fonts, animations)
├── postcss.config.js        — PostCSS config (Tailwind + Autoprefixer)
├── components.json          — Shadcn/ui CLI configuration
├── .env                     — Frontend env vars (e.g. REACT_APP_BACKEND_URL)
└── .gitignore               — Frontend-specific gitignore (node_modules, build/, etc.)
```

### Frontend Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| React Router DOM | 7 | Client-side routing |
| Tailwind CSS | 3 | Utility-first styling |
| Shadcn/ui + Radix UI | various | Accessible primitive components |
| Embla Carousel | 8 | Touch-friendly carousels |
| Lucide React | latest | SVG icon library |
| React Hook Form + Zod | 7 / 3 | Form handling & validation (future forms) |
| Axios | 1 | HTTP client for API calls |
| Recharts | 3 | Charts (future analytics, if needed) |
| Sonner | 2 | Toast notifications |
| Craco | 7 | CRA build customization |

### Component → Section Mapping

| Component | Page Section | Key Implementation Details |
|---|---|---|
| `Navbar` | Top navigation | Sticky; glassmorphism blur; hamburger at <1024 px |
| `Hero` | First visible section | 4-slide carousel; 5.5 s auto-advance; CTA buttons |
| `About` | Brand story | Image collage; three pillars with icons |
| `Experiences` | What you can do | Tetris bento grid; 4 real café photos |
| `Menu` | Food & drink | 3 columns; typographic layout; INR pricing |
| `Gallery` | Photo showcase | 18 images; masonry CSS grid; hover zoom |
| `ReelsSection` | Social proof | 13 Instagram iframe embeds; horizontal scroll |
| `Events` | Upcoming events | 4 event cards; coloured left-border accents |
| `Testimonials` | Reviews | Auto-rotating; customer avatars; star ratings |
| `ReadyToPaintBanner` | Mid-page CTA | Full-width dark section; book-a-session CTA |
| `Contact` | Location & contact | Map placeholder; address, phone, email cards |
| `Footer` | Site footer | Dark bg; large display text; links; social icons |

---

## `memory/` — Agent Documentation

```
memory/
├── PRD.md      — Product Requirements Document (architecture, features, backlog)
└── .gitkeep    — Keeps the directory tracked in Git when otherwise empty
```

`PRD.md` is the **primary reference document** for product intent, implemented features, design decisions, and the prioritised backlog. Agents should read this first before making feature changes.

---

## `tests/` — Python Test Suite

```
tests/
└── __init__.py   — Marks directory as a Python package; root test discovery hook
```

Tests are run with **pytest**. Add new test files here following the `test_*.py` convention.

---

## `test_reports/` — Auto-Generated Test Outputs

```
test_reports/
├── iteration_1.json    — Test results from iteration 1
├── iteration_2.json    — Test results from iteration 2
├── pytest/             — Pytest XML/HTML reports (auto-generated)
│   └── .gitkeep
└── .gitkeep
```

> ⚠️ Do **not** edit files in this directory manually. They are generated by test runners and CI.

---

## `.github/` — CI/CD Workflows

```
.github/
└── workflows/
    └── deploy.yml    — GitHub Actions pipeline: builds frontend → deploys to GitHub Pages
```

The `deploy.yml` workflow triggers on every push to the `main` branch and publishes the React build to **GitHub Pages** at `https://Priyanka-7350.github.io/Artizen`.

---

## `.emergent/` — Emergent Agent Platform

```
.emergent/
└── emergent.yml    — Configuration for the Emergent visual-editing agent platform
```

Used by the [Emergent Agent](https://emergentagent.com) platform for live preview and visual editing sessions.

---

## Root Config Files

| File | Purpose |
|---|---|
| `design_guidelines.json` | Full visual design system: typography, colour palette, spacing, layout patterns, component specs |
| `test_result.md` | Agent-to-agent testing protocol; YAML schema for task status tracking |
| `FOLDER_STRUCTURE.md` | **This file** — directory map for agents and collaborators |
| `README.md` | Project entry point |
| `.gitignore` | Root-level gitignore rules |

---

## Key Conventions for Agents

1. **Frontend changes** live entirely in `frontend/src/`. Never edit the generated `frontend/build/` directory.
2. **New page sections** should be created as standalone `.jsx` files in `frontend/src/components/` and imported + rendered in `frontend/src/App.js`.
3. **Primitive UI components** (buttons, cards, inputs) are in `frontend/src/components/ui/` — prefer reusing them over writing new base components.
4. **Utility function** `cn()` from `frontend/src/lib/utils.js` merges Tailwind classes safely — use it whenever combining conditional classes.
5. **Scroll animations** are driven by the `IntersectionObserver` in `App.js`. Add the class `scroll-reveal` to any element that should fade in on scroll.
6. **Backend changes** only touch `backend/server.py` and `backend/requirements.txt`. The backend is intentionally minimal.
7. **Design tokens** (colours, fonts, spacing) are documented in `design_guidelines.json` and extended in `frontend/tailwind.config.js`.
8. **Product decisions** and the feature backlog live in `memory/PRD.md` — update it whenever a significant feature is added or changed.
