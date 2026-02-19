
# Hero Section Animation Enhancement

## Current State

The hero section already uses Framer Motion for basic entrance animations — text and buttons fade up with staggered delays. The background is a static image with a fixed overlay. Here are the animation ideas I can implement, organized by impact.

---

## Animation Ideas (3 Selected for Implementation)

### 1. Parallax Background on Scroll
The background image will slowly drift upward as the user scrolls down, creating a sense of depth. This is achieved using Framer Motion's `useScroll` and `useTransform` hooks. The image moves at roughly half the scroll speed, giving a classic, cinematic parallax feel.

### 2. Animated Gradient Overlay Pulse
The teal overlay will gently breathe — subtly shifting between two gradient angles in a slow, looping animation. This adds life to an otherwise static overlay without being distracting. It gives the hero a living, calm quality appropriate for a medical brand.

### 3. Staggered Word-by-Word Title Reveal
Instead of the whole heading fading in at once, each word in "Expert Neurological Care & Pain Management" will animate in one at a time with a smooth upward entrance. This creates a more premium, editorial feel and draws the eye across the headline naturally.

### 4. Floating Particles (Decorative Orbs)
Two or three large, soft blurred circle orbs will slowly drift and pulse behind the content — using Framer Motion's `animate` with looping `y` and `opacity` transitions. They blend into the teal gradient, adding visual warmth without cluttering the UI.

### 5. Count-Up Animation on Trust Indicators
The numbers in the trust badge row (15+, 5K+, 98%) will animate from 0 up to their real values when the section mounts. This draws attention to the clinic's credibility and creates a moment of delight.

---

## Plan: Implement All 5 Animations

### Technical Details

**File to modify:** `src/components/Hero.tsx`

**Framer Motion APIs used** (already installed):
- `useScroll` + `useTransform` → parallax background
- `motion.div` with looping `animate` → gradient pulse & floating orbs
- Array-mapped `motion.span` with `staggerChildren` → word-by-word title
- `useEffect` + `useState` with `setInterval` → count-up numbers

### Changes Breakdown

| Element | Current | After |
|---|---|---|
| Background image | Static, fixed | Slow parallax scroll drift |
| Gradient overlay | Static teal gradient | Gently breathing animated gradient |
| Heading | Whole block fades in | Word-by-word staggered reveal |
| Decorative layer | None | 3 floating soft orbs |
| Trust numbers | Static text (15+, 5K+, 98%) | Count-up on load |

### Implementation Steps

1. Add `useScroll`, `useTransform`, `useMotionValue` imports from `framer-motion`
2. Wire the parallax background using `useScroll` tied to the section ref
3. Add the animated gradient overlay as a separate `motion.div` with a looping `background-position` animation
4. Split the heading into individual words, wrap each in a `motion.span` inside a `staggerChildren` parent
5. Add 3 floating orb `motion.div` elements positioned absolutely with looping `y` animation
6. Replace static trust indicator numbers with a `CountUp` sub-component using `useEffect`
