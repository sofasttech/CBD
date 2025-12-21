# CBD Panel & Paint Web Application – Technical Documentation

## 1. Overview

CBD Panel & Paint is a single-page web application (SPA) for an automotive repair business. It provides marketing content, service overviews, educational guides, FAQs, and review integrations.

- Frontend framework: React 18 (with TypeScript)
- Build tool / dev server: Vite 5
- Styling: Tailwind CSS 3
- Animations: Framer Motion, custom scroll/hover effects
- 3D/Graphics: three.js + @react-three/fiber + @react-three/drei (used in specific components like CarModel3D)
- Routing: React Router DOM (BrowserRouter)
- Deployment target: Static build (SPA) that can be hosted on any static host (Azure Static Web Apps, Netlify, Vercel, etc.)

Project root: `f:\CBD Pannel\CBD Panelbeating Mechanical`.

---

## 2. Project Structure

Key files and folders:

- Root
  - `index.html` – HTML shell that mounts the React app into `#root` and loads fonts.
  - `package.json` – Dependencies and npm scripts.
  - `vite.config.ts` – Vite config, React plugin, and path aliases.
  - `tailwind.config.js` – Tailwind theme and content scanning.
  - `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` – TypeScript configuration.
  - `UI_DESIGN_GUIDELINES.md` – UI/UX standards (colors, typography, spacing, patterns).
  - `README.md` – Currently minimal ("panel").
- `public/` – Static assets served directly (images, favicon, brand logos, hero images, etc.).
- `src/`
  - `main.tsx` – React entrypoint.
  - `App.tsx` – Top-level router and lazy-loading setup.
  - `index.css` – Tailwind base, global styles, keyframes.
  - `components/` – All page-level and shared components.
  - `components/ui/` – Reusable UI primitives (3D card, spotlight, timeline, etc.).
  - `lib/utils.ts` – Small utility helpers (e.g., className merging).

---

## 3. Tooling & Dependencies

### 3.1 package.json

Scripts:
- `dev`: Start local dev server with HMR via Vite.
- `build`: Production build (bundling + optimizations).
- `preview`: Preview the production build locally.
- `lint`: Run ESLint on the codebase.
- `typecheck`: Type-check application using `tsconfig.app.json`.

Main dependencies:
- `react`, `react-dom`: Core React runtime.
- `react-router-dom`: Client-side routing.
- `framer-motion`, `motion`: Declarative animations and transitions.
- `three`, `@react-three/fiber`, `@react-three/drei`: 3D rendering and helpers.
- `tailwind-merge`, `clsx`: Conditional class name composition.
- `@supabase/supabase-js`: Supabase client (not heavily used yet; ready for future backend).
- `lenis`: Smooth scrolling (used where required for scroll effects).
- `lucide-react`: Icon set for UI elements (e.g., menu icons, plus/minus in FAQs).

Dev dependencies:
- `vite`, `@vitejs/plugin-react`: Bundler and React integration.
- `typescript`, `@types/*`: TypeScript and typings.
- `eslint` and related plugins: Linting.
- `tailwindcss`, `postcss`, `autoprefixer`: Styling pipeline.

---

## 4. Runtime Architecture

### 4.1 Entry & Bootstrapping

- `index.html` defines the HTML skeleton and loads Google Fonts (Figtree, Tomorrow, Mulish).
- `src/main.tsx` mounts the app:
  - Imports `App` and `index.css`.
  - Uses `createRoot(document.getElementById('root')!)` from React 18.
  - Wraps `App` in `StrictMode`.

### 4.2 Application Shell & Routing (App.tsx)

`App.tsx` is responsible for:
- Wrapping the application with `BrowserRouter` from `react-router-dom`.
- Lazy-loading all major pages using `React.lazy` + `Suspense` to improve performance.
- Displaying a global `Loading` screen while initial images load.

Key behaviors:
- On mount, `useEffect` scans all `document.images` and waits until each image has either loaded or errored.
- After all images settle, `isLoading` is set to `false` (with a 500ms delay for a smoother transition).
- While `isLoading` is true, `<Loading />` is returned instead of the routing tree.

Defined routes (all lazy-loaded):
- `/` – Homepage
- `/about` – AboutPage
- `/contact` – Contact
- `/our-story` – OurStory (story, before/after slider, team/value content)
- `/panel-beating` – PanelBeating
- `/mechanical` – Mechanical
- `/caravans-boats` – CaravansBoats
- `/faqs` – FAQs
- `/tips-advice` – TipsAdvice (hub for educational guides)
- `/tips-advice/*` – various sub-guides (coolant, engine oil, battery, bumper, hybrid cars, idle vibration, fuel consumption, tyre repair, brake warnings, dashboard lights, winter prep, summer care, panel beating costs, minor accident guide, repair or replace).

---

## 5. Layout & Navigation

### 5.1 Global Navigation (Navigation.tsx)

- Fixed header at top (`position: fixed; top: 0; left: 0; right: 0; z-50`).
- Uses `lucide-react` for menu/hamburger icons.
- Uses `useLocation()` to highlight the active route in the nav.

Desktop layout:
- Left: Logo (`/logowithoutname.jpeg`) and site name using `Tomorrow` font.
- Center: Primary navigation links (Home, Our Story, Panel Beating, Mechanical, Caravans & Boats, Tips & Advice, FAQs).
- Right: Contact info and "Book a Service" call-to-action button.

Mobile layout:
- Top bar with logo, CTA button, and a hamburger icon.
- On mobile menu open, a sliding drawer from the right (`AnimatePresence` + `motion.div`) shows vertical links.
- Drawer includes working hours, phone number, email, and a red "Book a Service" button.

### 5.2 Footer

- `Footer.tsx` (not shown above but present) contains common footer content and uses `scrollToSection` for smooth in-page navigation where needed.

---

## 6. Styling System

### 6.1 Tailwind Configuration (tailwind.config.js)

- `content`: `['./index.html', './src/**/*.{js,ts,jsx,tsx}']` – Tailwind scans HTML and all TS/TSX for class names.
- Fonts:
  - `font-sans`: Figtree
  - `font-tomorrow`: Tomorrow
  - `font-mulish`: Mulish
- Colors use Tailwind’s default palette plus specific design guidelines from UI_DESIGN_GUIDELINES.

### 6.2 UI Design Guidelines (UI_DESIGN_GUIDELINES.md)

Core standards (used across pages and components):
- Primary colors:
  - Blue `#2563EB` (`text-blue-600`) – main accent & headings.
  - Light blue `#60A5FA` (`text-blue-400`).
  - Red `#DC2626` (`text-red-600`) – accent/hover.
- Neutrals:
  - Black `#000000` (`text-black`) – body text.
  - Dark gray `#111827` (`gray-900`).
  - Light gray backgrounds `#F3F4F6` (`gray-50`), `#FAFAFA` (neutral-100).

Typography patterns:
- Page hero titles:
  - `className="text-4xl md:text-6xl font-['Tomorrow'] font-medium"`
- Section headings (H2):
  - Same as above, often with `uppercase`.
- Sub-headings (H3):
  - `text-2xl font-['Tomorrow'] font-medium`.
- Body text:
  - `className="text-black leading-relaxed font-mulish font-semibold text-lg"`
  - Typically `text-justify md:text-left` for mobile/desktop alignment.

Spacing & Layout:
- Consistent use of `max-w-7xl` or `max-w-6xl` for core content width.
- Horizontal padding: `px-4` (mobile), `px-6` or `px-8` for larger breakpoints.
- Vertical sections typically use `py-12`, `py-14`, `py-24`.

---

## 7. Key Pages & Components

### 7.1 Homepage (components/Homepage.tsx)

Responsibilities:
- Main marketing landing page for CBD Panel & Paint.
- Features hero section, brand ribbon, about accordion, technical features, services stacking cards, why-choose-us section, step-by-step timeline, blog/FAQ preview, and reviews widget.

Key features:
- Hero section:
  - Left: Headline, subtext, bullet list (fast service, fair price, etc.), CTA buttons.
  - Right: Hero image (`/stf.png`) with interactive hotspots that show tooltips on hover.
- Cars ribbon: static image `/carsnz.png` with overlay headline text.
- Infinite brand scroll: horizontal scrolling brand logos (`/brand-01.png` ... `/brand-07.png`).
- About accordion section:
  - Horizontal image accordion using `accordionItems`.
  - Hovering over an item expands its card width and rotates the text from vertical to horizontal.
- Legacy about card stack (`about-intro-old`):
  - Card stack of images with drag-to-swipe behavior using Framer Motion.
- Technical features section:
  - Three feature cards (Precision Repairs, Quality Materials, Expert Technicians).
  - Uses background images with overlays and hover reveal panels.
- Services stacking cards:
  - Sticky scroll layout featuring 13 service cards (Accident Repair, Bumper Repair, etc.).
  - Each card is a colored panel with copy and an image, aligned with a sticky side heading "OUR SERVICES".
- Why Choose Us:
  - Three large background-image cards (Expert Craftsmanship, Advanced Technology, Lifetime Guarantee).
  - Hover overlay with more detailed copy.
  - Animated stats (Years Experience, Cars Repaired, Customer Rating, Expert Staff) using `AnimatedNumber`.
- How it works:
  - `TimelineDemo` using the `Timeline` UI component and images clipped into custom shapes.
- Reviews:
  - Embeds a Shapo review widget via dynamically injected external script.

Notable hooks/logic:
- `useState` and `useEffect` for:
  - `menuOpen` for navigation.
  - `hoveredHotspot` for hero tooltips.
  - `isMobile` to adjust stacking-card layout.
  - `cards` and `swiping` for the old about card stack.
- On mount, `window.scrollTo(0,0)` to reset scroll when navigating to home.
- External script injection for Shapo widget (once, id `shapo-embed-js`).

### 7.2 OurStory, Mechanical, CaravansBoats, TipsAdvice, FAQs

These pages follow the same visual system and share patterns:
- Hero sections with `text-4xl md:text-6xl` headings in `Tomorrow` font.
- White or light-gray backgrounds with occasional overlays.
- Content sections explaining services, process, or educational guides.
- Mechanical and CaravansBoats pages reuse hero text styles from the homepage.
- FAQs page uses interactive accordions with hover-to-preview and click-to-pin logic using state (`hoveredIndex`, `pinnedIndex`).

### 7.3 UI Components (components/ui/*)

- `ui/3d-card.tsx` – Reusable card with 3D hover/tilt effect (used where dynamic card visuals are needed).
- `ui/spotlight.tsx` – Spotlight/hover highlight effect.
- `ui/timeline.tsx` – Core timeline component used by `TimelineDemo` to render "How it works".

---

## 8. Animations & Interactions

### 8.1 Framer Motion

Used for:
- Section entrance animations (fade + upward slide) via `whileInView`.
- Hover overlays and transitions on cards.
- Sliding mobile menu (Navigation.tsx).
- Swiping cards in the legacy about section (Homepage.tsx).

Patterns:
- `initial={{ opacity: 0, y: 50 }}` and `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`.
- `transition={{ duration: 0.5/0.6, delay: ... }}` for staggered animations.

### 8.2 Custom Interactions

- Image accordion: width and text orientation change based on `isActive` flag.
- Hotspots on hero: absolute-positioned circles with tooltip on hover.
- Stacking cards: sticky sections with perspective effect as you scroll.
- AnimatedNumber: custom `requestAnimationFrame`-driven counter.

---

## 9. Assets & Images

- All images are served from `public/`, so they are referenced with root-relative URLs (`/panel-beatt.jpg`, `/oil.jpg`, etc.).
- Caravan hero slider uses images from `public/Caravan Images/` but referenced via a constant path in the CaravansBoats component.
- Many components include `onError` handlers on `<img>` tags to fall back to placeholder images if assets are missing.

Naming conventions:
- Service-related images: `/panel-beatt.jpg`, `/BumperRepair.jpg`, `/chassis.jpg`, `/polish.jpg`, etc.
- Brand/logo images: `/brand-01.png` ... `/brand-07.png`.
- Timeline step images: `/panel-beatt.jpg`, `/oil.jpg`, `/quality.webp`.

---

## 10. TypeScript & Configuration

- `tsconfig.json` references `tsconfig.app.json` and `tsconfig.node.json`.
- App config (`tsconfig.app.json`) focuses on compiling the React/TS client code.
- Node config (`tsconfig.node.json`) covers Vite and config files.

Common patterns:
- Component props are explicitly typed, e.g.:
  - `const AccordionItem = ({ item, isActive, onMouseEnter }: { item: typeof accordionItems[0]; isActive: boolean; onMouseEnter: () => void })`.
- Hooks typed as needed (`useState<number | null>`, `useRef<HTMLSpanElement | null>` etc.).

---

## 11. Build & Deployment

### 11.1 Local Development

Prerequisites:
- Node.js 18+ recommended.

Commands (from project root):
- `npm install` – Install dependencies.
- `npm run dev` – Start Vite dev server (typically on `http://localhost:5173`).

### 11.2 Production Build

- `npm run build` – Produces an optimized static bundle in `dist/`.
- `npm run preview` – Serves the built assets locally for testing.

The app is a pure SPA; ensure your hosting provider redirects all unknown paths to `index.html` so React Router can handle routing.

### 11.3 CI/CD

- YAML files present: `azure-pipelines.yml`, `azure-pipelines-dev.yml`, `azure-pipelines-1.yml` (not detailed here, but they likely build the app and deploy to Azure).

---

## 12. Extensibility & Conventions

### 12.1 Adding New Pages

1. Create a new component under `src/components/NewPage.tsx`.
2. Add a lazy import and `Route` in `App.tsx`:
   - `const NewPage = lazy(() => import('./components/NewPage'));`
   - `<Route path="/new-page" element={<NewPage />} />`
3. Optionally extend `Navigation.tsx` with a new link.
4. Follow typography and color rules from `UI_DESIGN_GUIDELINES.md`.

### 12.2 Adding New Sections to Homepage

- Place new sections in `Homepage.tsx` under clearly marked comments.
- Use `motion.section` for scroll-based entrance animations and Tailwind utilities for spacing.
- Keep headings consistent: `text-4xl md:text-6xl font-['Tomorrow'] font-medium`.

### 12.3 Styling & Theming

- Prefer Tailwind classes over ad-hoc CSS.
- Use `font-mulish` for body, `font-['Tomorrow']` for headings.
- Keep text colors consistent (`text-blue-600` for primary headings, `text-black` for body).

---

## 13. External Integrations

- **Shapo Reviews Widget**:
  - Script dynamically injected in `Homepage.tsx` using `useEffect`.
  - Adds a widget into `<div id="shapo-widget-65035ad084a4892e58a0"></div>` inside the Reviews section.

- **Google Fonts**:
  - Imported in `index.html` for Figtree, Tomorrow, Mulish.

- **Potential Supabase Integration**:
  - `@supabase/supabase-js` present; not wired into UI yet but available for future forms, auth, or data storage.

---

## 14. Known UX & Design Decisions

- All major hero and section headings standardized to `text-4xl md:text-6xl` as per design guidelines.
- Hero backgrounds emphasize white/light-gray with overlays rather than heavy dark backgrounds.
- Many interactive elements (accordions, FAQs, hover cards) favor hover+click interactions for both preview and persistent states.
- Before/after sliders and image labels hide when their respective area is fully off-screen (implemented with threshold logic in their components).

---

## 15. Maintenance Notes

- Whenever you add new components, ensure Tailwind can see them (keep them under `src/`).
- Keep image paths consistent; all app references assume `public/` root (e.g., `/my-image.jpg`).
- When changing brand colors or typography, update both Tailwind config (if required) and `UI_DESIGN_GUIDELINES.md`.
- For new animations, prefer Framer Motion for consistency with existing sections.

This document should give developers enough context to understand, extend, and maintain the CBD Panel & Paint web application.
