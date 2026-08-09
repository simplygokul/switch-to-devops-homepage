# SwitchtoDevOps Homepage Redesign

Source URL used: https://switchtodevops.com/

This project implements only the homepage as a UI-only redesign. No other pages, APIs, backend flows, payment flows, authentication, CMS, or deployment configuration were created.

## Content Handling

Homepage content was copied from the visible live homepage and kept unchanged intentionally. The supplied mockups were used only for visual direction.

Content extraction issue: the live homepage crawler exposed image alt text for the trainer but did not expose a reliable trainer image URL, so the redesign does not use a generated or replacement human image.

Inconsistencies intentionally not changed: the live homepage contains broad placement and training claims, and it refers to the trainer as both Firoz Ahmed and Firoz Khan in different places. These were preserved as visible homepage content and were not rewritten.

The homepage is implemented as a Next.js app.

## Run Locally

```bash
npm install
npm run dev
```

Then open http://127.0.0.1:3000/

## Deploy to GitHub Pages

This project is configured for a GitHub Pages project URL:

```text
https://simplygokul.github.io/switch-to-devops-homepage/
```

Build and publish the static export:

```bash
npm run deploy
```

## Files Created

- `package.json`
- `next.config.mjs`
- `jsconfig.json`
- `.gitignore`
- `.nojekyll`
- `public/.nojekyll`
- `app/layout.jsx`
- `app/page.jsx`
- `app/globals.css`
- `src/styles.css`
- `README.md`

## Homepage Sections Implemented

- Header
- Hero
- Training highlights
- About SwitchtoDevOps
- Trainer
- Courses
- Why Choose Us
- Tools
- Projects
- Learning Path
- Student Feedback
- FAQ
- Locations
- Contact
- Footer
