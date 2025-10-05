# Akreon - Digital Agency Landing Page

A modern, animated landing page for Akreon, a digital agency specializing in app development, web development, UI/UX design, and Shopify solutions.

## Features

- **Modern Design**: Dark theme with orange gradient accents following the design specifications
- **Smooth Animations**: GSAP-powered scroll animations and interactions
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **Accessibility**: WCAG compliant with proper focus management and screen reader support

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP with ScrollTrigger
- **Icons**: Lucide React
- **Typography**: Inter font
- **Language**: TypeScript

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and design system
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── providers/         # Context providers (GSAP)
│   ├── sections/          # Page sections
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   └── ui/               # Reusable UI components
│       └── Button.tsx
└── lib/                  # Utility functions
    └── utils.ts          # Helper functions and responsive utilities
```

## Design System

The project follows a comprehensive design system based on the provided specifications:

- **Colors**: Dark theme with orange gradient accents (#FF7A2B, #C95C26, #553628)
- **Typography**: Inter font family with responsive sizing
- **Spacing**: Consistent spacing scale using Tailwind utilities
- **Animations**: Smooth transitions with GSAP for premium feel
- **Components**: Reusable components following design patterns

## Customization

### Colors

Colors are defined in both `globals.css` (CSS variables) and `tailwind.config.js` (Tailwind classes).

### Animations

GSAP animations are configured in each component with ScrollTrigger for scroll-based effects.

### Responsive Design

Uses the `normalize()` utility function for responsive sizing across all components.

## Deployment

The project is ready for deployment on Vercel:

```bash
npm run build
npm start
```

Or deploy directly to Vercel:

```bash
vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.
