# Design Guidelines for Clawn Media Studio

## Design Approach

**Selected Approach**: Reference-based with motion design focus, inspired by creative agency aesthetics (Awwwards-style) with brutalist minimalism and playful geometry.

**Key Design Principles**:
- Dark, cinematic minimalism with bold accent colors
- Geometric shapes as primary visual elements
- Motion as a core design language
- Memorable word authentication as a unique brand experience

---

## Core Design Elements

### A. Typography

**Primary Font**: Poppins (Google Fonts)
- **Headings (h1)**: 2.5rem, weight 600, letter-spacing -0.02em
- **Subheadings (h2)**: 1.8rem, weight 500
- **Body/Taglines**: 1.1rem, weight 300, line-height 1.6
- **Event Cards**: 1.1rem, weight 400

### B. Layout System

**Spacing Units**: Tailwind-equivalent spacing
- **Primary units**: 0.5rem (2), 1rem (4), 1.5rem (6), 2rem (8)
- **Section padding**: 2rem (8) minimum
- **Card gaps**: 2rem (8) vertical, 1.5rem (6) horizontal
- **Page margins**: Full viewport centered alignment

**Container Strategy**:
- Landing: Centered content, max 100vh viewport
- Auth: Centered modal-style container
- Timeline: Full-width scrollable with 2rem padding

### C. Layout Specifications

**Landing Page**:
- Vertical center alignment with flexbox
- Heading → Tagline → Animated shapes row → CTA button
- Shapes container: Horizontal flex row, 1.5rem gap, centered
- Shape sizes: Triangle (100px base), Square (100px), Circle (100px)
- Animated movement range: 15rem horizontal translation

**Auth Page**:
- Centered card layout
- Vertical stack: Heading → Input → Button → Error message
- Input field: 1rem margin, 0.5rem padding, 6px border-radius
- Button positioned directly below input

**Timeline Page**:
- Full-height scrollable container
- Title at top with 2rem bottom margin
- Event cards: Vertical flex column, 2rem gap
- Each card: 1rem padding, 4px left border accent, 8px border-radius

---

## Component Library

### Navigation
None required - page-to-page transitions via direct links/redirects.

### Buttons
**Primary CTA (Landing)**:
- Padding: 0.8rem × 2rem
- Border-radius: 8px
- Background: #f46b45 (orange gradient)
- Hover state: #eea849 (warm yellow shift)
- Transition: 0.3s ease

**Login Button**:
- Padding: 0.6rem × 1.5rem
- Border-radius: 8px
- Background: #0077b6 (blue)
- No hover color specified (use slight brightness increase)

### Form Elements
**Input Fields**:
- Type: password for auth
- Border: none
- Border-radius: 6px
- Padding: 0.5rem
- Background: light fill (#f5f5f5 or similar)
- Text color: dark (#1b1b1b)

### Cards/Content Blocks
**Timeline Event Cards**:
- Background: #222 (dark gray)
- Left border: 4px solid #f46b45 (orange accent)
- Border-radius: 8px
- Padding: 1rem
- Initial opacity: 0
- Scroll-triggered: Fade to opacity 1 with 0.8s ease-out
- Trigger point: 50px before viewport bottom

**Content Structure**:
- Event 1: 🎬 Project Kickoff
- Event 2: 💡 Concept Design
- Event 3: 🎨 Visual Build
- Event 4: 🎶 Motion Integration
- Event 5: 🚀 Launch Day

### Geometric Shapes (Landing)
**Triangle**:
- CSS borders method
- Base: 100px, Height: 86px
- Fill: #89cff0 (baby blue)

**Square**:
- Dimensions: 100px × 100px
- Background: #f4a261 (sandy orange)
- Border-radius: 10px

**Circle**:
- Dimensions: 100px × 100px
- Background: #c77dff (purple)
- Border-radius: 50%

### Animations

**Landing Page Shapes** (anime.js):
- **Circle**: translateX 15rem, 1000ms duration, easeInOutQuad, alternate direction, infinite loop
- **Triangle**: translateX 15rem + rotate 1turn, 800ms duration, 300ms delay, easeInOutSine, alternate, infinite loop
- **Square**: translateX 15rem, 900ms duration, 600ms delay, easeInOutQuad, alternate, infinite loop

**Timeline Scroll Effects**:
- Event cards start at opacity: 0
- Fade in when top edge reaches viewport bottom - 50px
- Transition: opacity 0.8s ease-out

---

## Visual Treatment

**Background**: #1b1b1b (charcoal black) across all pages
**Text Color**: #fff (white) primary, with no secondary color variations needed
**Accent Colors**: 
- Primary: #f46b45 (vibrant orange)
- Secondary: #0077b6 (ocean blue)
- Tertiary: Shape-specific (#89cff0, #f4a261, #c77dff)

---

## Page-Specific Guidelines

### Landing Page (index.html)
- No hero image
- Geometric shapes serve as the visual centerpiece
- Minimal copy: Brand name + single tagline
- Single CTA: "Get Started" linking to auth

### Auth Page (auth.html)
- Minimal centered layout
- Heading: "Enter your memorable word"
- Password input with placeholder "Your word"
- Error messaging below button (id="msg")
- Successful auth (word: "clawn") redirects to timeline

### Timeline Page (timeline.html)
- Title: "Event Timeline" (h1)
- Five event cards with emoji + text
- Scroll-driven fade-in reveals
- Dark background maintained
- No navigation back to landing (one-way flow after auth)

---

## Accessibility

- Semantic HTML structure maintained
- Form labels implicit via placeholders (minimal UI pattern)
- Sufficient contrast ratio: white text on #1b1b1b background
- Focus states inherit from base button/input styles
- Keyboard navigation supported for all interactive elements