# GDG Front-end Challenge - Next.js, Tailwind, shadcn/ui

This project is my submission for the GDG Front-end Developer take-home assessment.  
It recreates the assigned Figma homepage using **Next.js 14**, **Tailwind CSS**, and **shadcn/ui** for the core UI components.

---

## Getting Started

Install the dependencies and start the local server:

```bash
npm install
npm run dev --silent
````

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Backend Placeholder

The Hero section includes a small backend check to show front-end and API integration.
If you set the variable `NEXT_PUBLIC_BACKEND_URL`, the app will call:

```
GET /health
```

and display the JSON response.

**Example `.env.local`**

```bash
NEXT_PUBLIC_BACKEND_URL=https://api.example.com
```

If no URL is set, the page simply notes: *“Set NEXT_PUBLIC_BACKEND_URL to call backend.”*

---

## Tech Stack

* **Next.js 14 (App Router)** – routing and page structure
* **TypeScript** – type safety
* **Tailwind CSS** – layout and utility styling
* **shadcn/ui** – ready-made components (Button, Card, Badge)
* **lucide-react** – icons

Each section of the homepage is built as a separate component to keep the code easy to read and maintain.

---

## Available Commands

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Run the development server |
| `npm run build` | Create a production build  |
| `npm run start` | Serve the production build |

---

## Folder Structure

```
app/
  globals.css
  layout.tsx
  page.tsx
components/
  Navbar.tsx
  Hero.tsx
  Logos.tsx
  Features.tsx
  Showcase.tsx
  Testimonials.tsx
  Cta.tsx
  Footer.tsx
  ui/
    badge.tsx
    button.tsx
    card.tsx
lib/
  utils.ts
public/
  favicon.ico
.env.local.example
package.json
postcss.config.js
tailwind.config.ts
tsconfig.json
next.config.ts
```

---

## Deployment

The project runs out-of-the-box on **Vercel**.

**Steps:**

1. Push the repository to GitHub.
2. Import it into [Vercel](https://vercel.com).
3. Add the environment variable:

   ```
   NEXT_PUBLIC_BACKEND_URL=https://api.example.com
   ```
4. Deploy to get a live link (e.g. `https://gdg-frontend.vercel.app`).

---

## Notes

* Fully responsive layout built from the provided Figma reference.
* Clean, modular code that’s easy to extend.
* Uses semantic HTML and accessible UI patterns.

---

**By:** Asma Ahmed
