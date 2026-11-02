# LG-KHTC website source

Next.js 14 / React / TypeScript / Tailwind CSS / Framer Motion / Lucide React.

## Included
- Header with the supplied college logo
- Hero section using supplied college event photography
- Departments section
- Statistics section with deliberately blank/unverified figures
- Campus media gallery with all four supplied event photographs, category filters, and photo viewer
- Testimonials/rating demonstration form
- Footer
- Responsive homepage and Tailwind configuration

## 1. Install and run

Use Node.js 18.17+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For production build:

```bash
npm run build
npm start
```

## 2. Image assets already included

The uploaded images have been copied to `public/images/` and renamed:

| File | Use |
|---|---|
| `lg-khtc-logo.jpg` | College logo |
| `opening-ceremony.jpg` | Hero and opening event gallery |
| `college-community.jpg` | Community photo gallery |
| `student-celebration.jpg` | Student life gallery |
| `graduation-ceremony.jpg` | Graduation gallery and hero background |

## 3. Important production work still required

This package is a complete frontend starter for the requested homepage, not a production admission backend. Before public launch:

- Build the `/apply` route and secure multi-step application workflow.
- Connect application submissions and ratings to a database such as Supabase.
- Add private, validated file storage for applicant photos and documents.
- Add authentication and role-based admin moderation.
- Replace college address, phone, email and social URLs with verified official details.
- Replace null statistics with figures approved by college administration.
- Confirm program names, certification levels, durations and admission rules with the college.
- Add privacy notice, consent, spam protection, server-side validation and retention policy.
- Replace sample review entries with verified, consented testimonials or remove them.

The rating form currently stores entries only in browser component state; it is a UI demonstration and does not persist data. The application CTA points to `/apply`, which must be implemented separately.
