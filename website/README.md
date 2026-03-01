# CopyDTC Website

> **Purpose:** Marketing website for CopyDTC. A single-page site that communicates what we do, who we serve, and how to get started.
> **Status:** MVP — basic HTML/CSS landing page. To be expanded with a proper framework and CMS.

## Structure

```
/website
├── /src
│   └── index.html      # Main landing page (HTML + inline CSS)
├── /assets
│   └── .gitkeep         # Images, fonts, and other static assets
└── README.md            # This file
```

## Deployment

### Quick Start (Static Hosting)
The site is a single HTML file with inline CSS — no build step required.

1. Upload `src/index.html` to any static host:
   - **Vercel**: `vercel deploy ./src`
   - **Netlify**: drag and drop the `src` folder
   - **GitHub Pages**: push to a `gh-pages` branch
   - **Cloudflare Pages**: connect the repo

2. Point `copydtc.com` DNS to the hosting provider

### Future Plans
- Add a proper CSS framework or Tailwind
- Add case studies and portfolio section
- Add pricing page with tier comparison
- Add blog (content marketing pillar)
- Add lead capture form (replace mailto: links)
- Add analytics (Plausible or PostHog)

## Design Notes
- Clean, minimal design — lets the copy do the work
- Mobile responsive
- Blue (#2563eb) accent color
- System fonts for fast loading
- No JavaScript dependencies (fast, accessible)
