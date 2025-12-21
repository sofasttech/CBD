# CBD Panelbeating - UI Design Guidelines

## 📋 Table of Contents
1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Component Patterns](#component-patterns)
5. [Animation Standards](#animation-standards)
6. [Common Sections](#common-sections)

---

## 🎨 Color Palette

### Primary Colors
```css
Primary Blue: #2563EB (blue-600)
Light Blue: #60A5FA (blue-400)
Red Accent: #DC2626 (red-600)
```

### Neutral Colors
```css
Black Text: #000000 (text-black)
Dark Gray: #111827 (gray-900)
Medium Gray: #6B7280 (gray-600)
Light Gray: #F3F4F6 (gray-50)
White: #FFFFFF (white)
Background: #FAFAFA (neutral-100)
```

### Usage
- **Headers**: Blue-600 (`text-blue-600`)
- **Body Text**: Black (`text-black`)
- **CTA Buttons**: Blue-600 primary, Red-600 hover
- **Borders**: Gray-200 (`border-gray-200`)

---

## ✍️ Typography

### Font Families
```css
Headings: font-['Tomorrow']
Body Text: font-mulish
```

### Font Sizes & Weights

#### Headings
```tsx
// Main Page Title (Hero)
className="text-5xl md:text-8xl font-['Tomorrow'] font-bold uppercase"

// Section Headings (H2)
className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase"

// Sub-section Headings (H3)
className="text-2xl font-['Tomorrow'] font-medium"

// Small Label/Tag
className="text-sm font-medium uppercase tracking-wide"
```

#### Body Text
```tsx
// Standard Body Text
className="text-black leading-relaxed font-mulish font-semibold text-lg"
style={{ wordSpacing: '-0.08rem' }}

// With text alignment
className="text-black leading-relaxed font-mulish font-semibold text-lg text-justify md:text-left"

// Smaller descriptive text
className="text-base font-medium"
```

#### Labels & Tags
```tsx
// Section Label (above headings)
className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4"

// Card/Feature subtitle
className="text-blue-600 mb-3 font-medium"
```

### Text Alignment Pattern
```tsx
// Mobile: justified, Desktop: left-aligned
className="text-justify md:text-left"

// Centered (for hero sections)
className="text-center"
```

---

## 📏 Spacing & Layout

### Container Widths
```tsx
// Standard Container
className="max-w-7xl mx-auto px-4"

// Narrow Content Container
className="max-w-4xl mx-auto"

// Text Content Container
className="max-w-3xl mx-auto"
```

### Section Padding
```tsx
// Standard Section
className="px-4 py-16"

// Large Section
className="px-4 py-24"

// Compact Section
className="px-4 py-12"
```

### Grid Layouts
```tsx
// Two Column Layout
className="grid md:grid-cols-2 gap-8"
className="grid md:grid-cols-2 gap-12 items-center"

// Three Column Layout
className="grid md:grid-cols-3 gap-8"

// Four Column Layout
className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"

// Auto-fit Gallery
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

---

## 🧩 Component Patterns

### Buttons

#### Primary CTA Button
```tsx
<button className="relative bg-blue-600 text-white px-8 py-3 font-medium transition inline-flex items-center gap-2 group">
    <span className="absolute left-0 top-0 h-full bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
    <span className="relative z-10">Button Text</span>
</button>
```

#### Secondary Button
```tsx
<button className="bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition">
    Button Text
</button>
```

#### Tomorrow Font Button (for CTA sections)
```tsx
<button className="relative group bg-blue-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
    <span className="absolute left-0 top-0 h-full bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
    <span className="relative z-10">BUTTON TEXT</span>
</button>
```

### Cards

#### Hover Card with Popup Animation
```tsx
<motion.div
    className="p-8 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-150 group cursor-pointer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", transition: { duration: 0.15 } }}
>
    {/* Content */}
</motion.div>
```

#### Image Card (Gallery)
```tsx
<motion.div
    className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer h-[400px]"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
>
    <div className="absolute inset-0">
        <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-2xl md:text-3xl font-['Tomorrow'] font-medium">
            {title}
        </h3>
    </div>
</motion.div>
```

---

## 🎬 Animation Standards

### Framer Motion Patterns

#### Scroll-triggered Fade In
```tsx
<motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
>
```

#### Staggered Grid Items
```tsx
{items.map((item, index) => (
    <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
    >
```

#### Hover Scale Effect
```tsx
whileHover={{ scale: 1.02 }}
// or faster popup
whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.15 } }}
```

### CSS Transitions
```tsx
// Standard transition
className="transition-all duration-300"

// Fast transition (buttons, popups)
className="transition-all duration-150"

// Slow transition (images)
className="transition-transform duration-500"
```

---

## 📦 Common Sections

### Hero Section
```tsx
<div className="relative h-[80vh] overflow-hidden flex items-center justify-center bg-white">
    {/* Background Image with Parallax */}
    <motion.div
        className="absolute inset-0 z-0 opacity-30"
        style={{
            backgroundImage: "url('/image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useTransform(useScroll().scrollY, [0, 500], [0, 200])
        }}
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white z-10" />
    
    {/* Content */}
    <motion.div
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        <p className="text-blue-600 text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-6">
            Tag Line
        </p>
        <h1 className="text-5xl md:text-8xl font-['Tomorrow'] font-bold uppercase mb-8 leading-tight">
            Main Heading
        </h1>
        <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg text-center max-w-3xl mx-auto">
            Description text
        </p>
    </motion.div>
</div>
```

### Standard Section Header
```tsx
<div className="text-center mb-12">
    <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Section Label</p>
    <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase text-black">
        Section Title
    </h2>
</div>
```

### Two-Column Content Section
```tsx
<motion.section
    className="px-4 py-16 bg-white"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
            <img src="/image.jpg" alt="Description" className="w-full h-auto shadow-lg" />
        </div>
        <div>
            <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Label</p>
            <h2 className="text-4xl md:text-5xl font-['Tomorrow'] font-medium mb-6">Heading</h2>
            <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg text-justify md:text-left mb-4">
                Paragraph text
            </p>
        </div>
    </div>
</motion.section>
```

### Stats Section
```tsx
<section className="py-20 bg-white text-gray-900 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-4xl md:text-6xl font-['Tomorrow'] font-bold text-blue-600 mb-2">
                        {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wide">
                        {stat.label}
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
</section>
```

### CTA Section
```tsx
<motion.section
    className="px-4 py-20 bg-white text-gray-900 border-t border-gray-200"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    viewport={{ once: true }}
>
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase text-black mb-6">
            Call To Action
        </h2>
        <p style={{ wordSpacing: '-0.08rem' }} className="text-black mb-8 leading-relaxed font-mulish font-semibold text-lg">
            Description text
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* Buttons */}
        </div>
    </div>
</motion.section>
```

---

## 🔧 Utility Patterns

### Word Spacing Fix
For better typography, add to paragraph elements:
```tsx
style={{ wordSpacing: '-0.08rem' }}
```

### Responsive Visibility
```tsx
// Hide on mobile
className="hidden md:block"

// Show only on mobile
className="block md:hidden"
```

### Image Error Handling
```tsx
onError={(e) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = '/fallback-image.jpg';
}}
```

---

## 📱 Responsive Breakpoints

### Tailwind Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Common Responsive Patterns
```tsx
// Text size
className="text-4xl md:text-6xl"

// Padding
className="px-4 py-12 md:py-24"

// Grid columns
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Gap spacing
className="gap-4 md:gap-8"
```

---

## ✅ Quick Checklist for New Pages

- [ ] Use `font-['Tomorrow']` for all headings
- [ ] Use `font-mulish font-semibold text-lg` for body text
- [ ] Add `style={{ wordSpacing: '-0.08rem' }}` to paragraphs
- [ ] Use blue-600 for primary colors
- [ ] Add section labels with `text-blue-600 text-sm font-medium uppercase tracking-wide mb-4`
- [ ] Include framer-motion scroll animations
- [ ] Use `max-w-7xl mx-auto px-4` for standard containers
- [ ] Add `text-justify md:text-left` for paragraph alignment
- [ ] Set viewport `once: true` for scroll animations
- [ ] Use consistent spacing: py-16 or py-24 for sections

---

## 📝 Code Examples

### Complete Page Template
```tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

export default function NewPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <section className="px-4 py-24 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Label</p>
                    <h1 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase text-black mb-6">
                        Page Title
                    </h1>
                    <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg max-w-3xl mx-auto">
                        Description text
                    </p>
                </div>
            </section>

            {/* Content Sections */}
            <motion.section
                className="px-4 py-16 bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    {/* Your content */}
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
```

---

**Last Updated**: December 20, 2025  
**Version**: 1.0  
**Maintained by**: CBD Panelbeating Development Team
