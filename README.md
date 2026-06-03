# jxyxia.dev — Jayesh's Portfolio

Personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: DM Serif Display, DM Mono, Syne (Google Fonts)
- **Deployment**: Vercel

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Base styles, fonts, CSS vars
│   ├── layout.tsx        # Root layout + metadata/SEO
│   └── page.tsx          # Home page — assembles all sections
├── components/
│   ├── FadeUp.tsx        # Scroll-triggered fade animation wrapper
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── lib/
    └── data.ts           # All site content — edit this to update info
```

## Updating Content

All your personal data lives in `src/lib/data.ts`. Edit that file to:
- Update projects
- Add/remove skills
- Add blog posts
- Change links or contact info

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repo to [vercel.com](https://vercel.com) for auto-deploys on every push.
