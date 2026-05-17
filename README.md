# Letsmakevisuals - Premium Video Editing Agency

A high-end, premium landing page for **Letsmakevisuals**, a top-tier video editing agency specializing in Shorts, TikToks, Ads, and YouTube long-form content. Built with modern web technologies, this project features dynamic animations, custom cursors, and a sleek glassmorphism design.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React 19)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth scroll reveals, magnetic elements, and layout transitions.
- **Icons**: [Lucide React](https://lucide.dev/) for crisp, scalable vector icons.
- **Styling**: Custom Raw CSS Modules (`.module.css`) implementing an advanced dark mode theme with primary/accent gradients and glassmorphism.

## ✨ Features

- **Custom Cursor & Magnetic Buttons**: An interactive, premium feel using dynamic cursor tracking and magnetic elements.
- **Glassmorphism UI**: Beautiful, semi-transparent frosted glass panels across the interface.
- **Scroll Animations**: Sections reveal seamlessly on scroll using `framer-motion`.
- **Responsive Layouts**: Fully responsive grid layouts tailored for mobile, tablet, and desktop devices.
- **Modular Components**: Clean architecture with reusable components including `Hero`, `SocialProof`, `Services`, `Portfolio`, `Testimonials`, `FAQ`, and `Contact`.

## 📦 Getting Started

First, ensure you have the required dependencies installed:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
app/                 # Next.js App Router (Pages, Layout, Globals)
components/          # Modular UI Components
  ├── Comparison/    # Why choose us vs. others
  ├── Contact/       # Contact form & booking section
  ├── Effects/       # Custom Cursor, Magnetic buttons, Atmosphere
  ├── FAQ/           # Accordion style FAQ section
  ├── Hero/          # High-impact top section with abstract video background
  ├── Navbar/        # Fixed, glassy navigation bar
  ├── Portfolio/     # Filtering gallery for video works
  ├── Services/      # Overview of editing services
  ├── SocialProof/   # Client logos and trust markers
  ├── Testimonials/  # Client reviews and quotes
  └── Upgrade/       # Premium tier / upgrade call to action
public/              # Static assets (images, videos, fonts)
```

## 🎨 Styling Convention

This project intentionally utilizes **Raw CSS Modules** for precision styling, allowing detailed control over hover states, pseudo-elements, complex grid architectures, and CSS variables defined in `app/globals.css`. 

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
