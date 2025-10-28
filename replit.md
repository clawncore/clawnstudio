# Clawn Media Studio

A modern, visually stunning website for Clawn Media Studio - a creative digital gift and motion design service.

## Overview

This is a three-page website featuring:
- **Landing Page**: Animated geometric shapes (triangle, square, circle) with smooth anime.js animations
- **Auth Page**: Memorable word authentication using localStorage
- **Timeline Page**: Scrollable event timeline with scroll-triggered fade-in effects

## Tech Stack

**Frontend:**
- React with TypeScript
- Wouter for routing
- Anime.js v4 for animations
- Tailwind CSS for styling
- Shadcn UI components
- Lucide React for icons

**Backend:**
- Express server (serving static files)
- No database (localStorage for auth state)

## Project Structure

```
client/
├── src/
│   ├── pages/
│   │   ├── Landing.tsx      # Animated landing page with geometric shapes
│   │   ├── Auth.tsx         # Memorable word login page
│   │   └── Timeline.tsx     # Event timeline with scroll effects
│   ├── App.tsx              # Router configuration
│   └── index.css            # Global styles with dark theme
└── index.html               # Entry point
```

## Key Features

### Landing Page
- Three animated geometric shapes (triangle, square, circle)
- Each shape has unique animation with anime.js v4:
  - Circle: 1000ms horizontal movement, easeInOutQuad
  - Triangle: 800ms movement + rotation, 300ms delay, easeInOutSine
  - Square: 900ms movement, 600ms delay, easeInOutQuad
- All animations loop infinitely with alternate direction
- Orange CTA button (#f46b45) linking to auth page

### Auth Page
- Password input for memorable word
- Correct word: "clawn" (case-insensitive)
- localStorage-based session management
- Error message display for incorrect attempts
- Enter key support for form submission
- Blue login button (#0077b6)

### Timeline Page
- Five event cards with lucide-react icons:
  - Clapperboard: Project Kickoff
  - Lightbulb: Concept Design
  - Brush: Visual Build
  - Music: Motion Integration
  - Rocket: Launch Day
- Scroll-triggered fade-in animations
- Orange left border accent (#f46b45)
- Auth verification (redirects to /auth if not logged in)

## Design System

### Colors
- **Background**: #1b1b1b (charcoal black)
- **Foreground**: White (#ffffff)
- **Primary Accent**: #f46b45 (vibrant orange)
- **Secondary Accent**: #0077b6 (ocean blue)
- **Card Background**: #222 (dark gray)
- **Shape Colors**:
  - Triangle: #89cff0 (baby blue)
  - Square: #f4a261 (sandy orange)
  - Circle: #c77dff (purple)

### Typography
- **Font Family**: Poppins (all weights)
- **Headings (h1)**: 2.5rem, weight 600, letter-spacing -0.02em
- **Subheadings (h2)**: 1.8rem, weight 500
- **Body**: 1.1rem, weight 300-400, line-height 1.6

### Spacing
- Primary units: 0.5rem, 1rem, 1.5rem, 2rem
- Card gaps: 2rem vertical
- Section padding: 2rem minimum

## User Flow

1. User lands on **Landing Page** with animated shapes
2. Clicks "Get Started" button → navigates to **Auth Page**
3. Enters memorable word "clawn" → logged in via localStorage
4. Redirects to **Timeline Page** showing five event cards
5. Scroll down to trigger fade-in animations on each card
6. Direct access to /timeline without auth redirects back to /auth

## Recent Changes

**2025-10-28**: Initial implementation
- Created all three pages with pixel-perfect design
- Implemented anime.js v4 animations for geometric shapes
- Added localStorage authentication flow
- Built scroll-triggered timeline animations
- Integrated wouter routing
- Applied dark theme with Poppins typography
- Replaced emoji with lucide-react icons
- Refactored buttons to use shadcn Button component

## Running the Project

The workflow "Start application" runs `npm run dev` which starts both the Express backend and Vite frontend on port 5000.

## Authentication

The memorable word is: **clawn** (case-insensitive)

Session is stored in localStorage with key "auth" set to "true".
