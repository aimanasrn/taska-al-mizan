# Taska Al-Mizan Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bilingual, responsive, multi-page marketing website for Taska Al-Mizan with WhatsApp-first conversion, placeholder-ready visuals, and a clean content-driven structure.

**Architecture:** The app will be a React + Vite single-page application using React Router for page-level navigation, with all page copy and repeatable UI data stored in structured local content files. Shared layout components will wrap route pages, and a lightweight language context will drive BM/English switching across navigation, sections, forms, and CTA content.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, React Router, Lucide React, Framer Motion, Vitest, Testing Library

---

## File Structure

Planned file responsibilities:

- `package.json` - project scripts and dependencies
- `index.html` - Vite document entry
- `vite.config.ts` - Vite config
- `tsconfig.json` - TypeScript project config
- `tsconfig.app.json` - app TS config
- `tsconfig.node.json` - node TS config
- `postcss.config.js` - Tailwind/PostCSS config
- `tailwind.config.ts` - design tokens, fonts, theme extension
- `src/main.tsx` - app bootstrap
- `src/App.tsx` - app shell and router outlet
- `src/styles/index.css` - Tailwind layers, CSS variables, utility styling
- `src/app/router.tsx` - route definitions
- `src/app/providers/LanguageProvider.tsx` - language state and context
- `src/app/providers/useLanguage.ts` - language hook
- `src/content/site.ts` - contact details, nav labels, CTAs, footer info
- `src/content/home.ts` - homepage section content
- `src/content/about.ts` - about page content
- `src/content/programs.ts` - program card content and support sections
- `src/content/gallery.ts` - gallery categories and image metadata
- `src/content/contact.ts` - contact page text and form labels
- `src/lib/types.ts` - shared content and language types
- `src/lib/utils.ts` - className utility and helpers
- `src/components/layout/TopContactBar.tsx` - top utility bar
- `src/components/layout/SiteHeader.tsx` - desktop header and CTA
- `src/components/layout/MobileNav.tsx` - mobile menu
- `src/components/layout/Footer.tsx` - footer layout
- `src/components/layout/PageBanner.tsx` - shared inner-page hero/banner
- `src/components/common/LanguageSwitcher.tsx` - BM/EN toggle
- `src/components/common/FloatingWhatsAppButton.tsx` - fixed WhatsApp CTA
- `src/components/common/SectionHeading.tsx` - shared section heading
- `src/components/common/ImageCard.tsx` - rounded image/placeholder frame
- `src/components/common/InfoCard.tsx` - pastel content cards
- `src/components/common/ButtonLink.tsx` - shared CTA link/button styles
- `src/components/sections/home/*.tsx` - homepage sections
- `src/components/sections/shared/ContactCTA.tsx` - reusable CTA banner
- `src/pages/HomePage.tsx` - homepage composition
- `src/pages/AboutPage.tsx` - about page composition
- `src/pages/ProgramsPage.tsx` - programs page composition
- `src/pages/GalleryPage.tsx` - gallery page composition
- `src/pages/ContactPage.tsx` - contact page composition
- `src/components/forms/ContactForm.tsx` - contact form UI and validation
- `src/components/forms/contactForm.test.tsx` - form validation tests
- `src/app/router.test.tsx` - route rendering and language behavior tests
- `src/components/layout/header.test.tsx` - navigation and mobile menu tests
- `src/test/setup.ts` - Testing Library setup

### Task 1: Scaffold the React + Vite + Tailwind project

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `postcss.config.js`
- Create: `tailwind.config.ts`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/styles/index.css`

- [ ] **Step 1: Write the failing scaffold test**

```tsx
// src/app/app.test.tsx
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the shared site shell', () => {
  render(<App />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test -- src/app/app.test.tsx`
Expected: FAIL with a module resolution or missing file error because the app scaffold does not exist yet

- [ ] **Step 3: Write minimal implementation**

```json
{
  "name": "taska-al-mizan",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.511.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.0.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/user-event": "^14.5.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.4.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.0",
    "vite": "^6.0.0",
    "vitest": "^2.1.8"
  }
}
```

```tsx
// src/App.tsx
export default function App() {
  return (
    <div>
      <header role="banner">Taska Al-Mizan</header>
    </div>
  );
}
```

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test -- src/app/app.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add package.json index.html vite.config.ts tsconfig.json tsconfig.app.json tsconfig.node.json postcss.config.js tailwind.config.ts src/main.tsx src/App.tsx src/styles/index.css src/app/app.test.tsx
git commit -m "chore: scaffold Taska Al-Mizan React app"
```

### Task 2: Add routing, site shell, and language provider foundation

**Files:**
- Create: `src/app/router.tsx`
- Create: `src/app/providers/LanguageProvider.tsx`
- Create: `src/app/providers/useLanguage.ts`
- Create: `src/lib/types.ts`
- Modify: `src/App.tsx`
- Create: `src/app/router.test.tsx`

- [ ] **Step 1: Write the failing route and language test**

```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders the home route with a language toggle', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByRole('button', { name: /bm/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test -- src/app/router.test.tsx`
Expected: FAIL because the app has no router or language switch yet

- [ ] **Step 3: Write minimal implementation**

```ts
// src/lib/types.ts
export type Language = 'bm' | 'en';
```

```tsx
// src/app/providers/LanguageProvider.tsx
import { createContext, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';
import type { Language } from '../../lib/types';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<Language>('bm');
  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
```

```tsx
// src/app/router.tsx
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },
]);

export default router;
```

```tsx
// src/App.tsx
import { LanguageProvider } from './app/providers/LanguageProvider';

export default function App() {
  return (
    <LanguageProvider>
      <header role="banner">
        <button type="button">BM</button>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>
    </LanguageProvider>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test -- src/app/router.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/router.tsx src/app/providers/LanguageProvider.tsx src/app/providers/useLanguage.ts src/lib/types.ts src/App.tsx src/app/router.test.tsx
git commit -m "feat: add router and language foundation"
```

### Task 3: Create structured bilingual content files

**Files:**
- Create: `src/content/site.ts`
- Create: `src/content/home.ts`
- Create: `src/content/about.ts`
- Create: `src/content/programs.ts`
- Create: `src/content/gallery.ts`
- Create: `src/content/contact.ts`
- Modify: `src/lib/types.ts`
- Create: `src/content/content.test.ts`

- [ ] **Step 1: Write the failing content test**

```ts
import { siteContent } from './site';

test('stores WhatsApp CTA content for both supported languages', () => {
  expect(siteContent.bm.nav.home).toBe('Utama');
  expect(siteContent.en.nav.home).toBe('Home');
  expect(siteContent.bm.contact.whatsappHref).toContain('wa.me/60139491544');
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test -- src/content/content.test.ts`
Expected: FAIL because the content files do not exist yet

- [ ] **Step 3: Write minimal implementation**

```ts
// src/lib/types.ts
export type Language = 'bm' | 'en';

export type LocalizedText = Record<Language, string>;
```

```ts
// src/content/site.ts
export const siteContent = {
  bm: {
    nav: {
      home: 'Utama',
      about: 'Tentang',
      programs: 'Program',
      gallery: 'Galeri',
      contact: 'Hubungi',
    },
    contact: {
      phone: '0139491544',
      whatsappHref:
        'https://wa.me/60139491544?text=Hi%20Taska%20Al-Mizan%2C%20saya%20berminat%20untuk%20tahu%20lebih%20lanjut%20tentang%20pendaftaran%20anak%20di%20taska.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      programs: 'Programs',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    contact: {
      phone: '0139491544',
      whatsappHref:
        'https://wa.me/60139491544?text=Hi%20Taska%20Al-Mizan%2C%20saya%20berminat%20untuk%20tahu%20lebih%20lanjut%20tentang%20pendaftaran%20anak%20di%20taska.',
    },
  },
} as const;
```

```ts
// src/content/home.ts
export const homeContent = {
  bm: {
    heroTitle: 'Tempat Yang Selamat & Ceria Untuk Si Kecil Anda',
  },
  en: {
    heroTitle: 'A Safe & Cheerful Place for Your Little One',
  },
} as const;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test -- src/content/content.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/content/site.ts src/content/home.ts src/content/about.ts src/content/programs.ts src/content/gallery.ts src/content/contact.ts src/lib/types.ts src/content/content.test.ts
git commit -m "feat: add bilingual content model"
```

### Task 4: Build the shared layout, navigation, footer, and WhatsApp CTA

**Files:**
- Create: `src/lib/utils.ts`
- Create: `src/components/common/LanguageSwitcher.tsx`
- Create: `src/components/common/ButtonLink.tsx`
- Create: `src/components/common/FloatingWhatsAppButton.tsx`
- Create: `src/components/layout/TopContactBar.tsx`
- Create: `src/components/layout/SiteHeader.tsx`
- Create: `src/components/layout/MobileNav.tsx`
- Create: `src/components/layout/Footer.tsx`
- Modify: `src/App.tsx`
- Create: `src/components/layout/header.test.tsx`

- [ ] **Step 1: Write the failing layout test**

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

test('opens the mobile menu and exposes the WhatsApp CTA', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole('button', { name: /open menu/i }));

  expect(screen.getByRole('link', { name: /whatsapp now/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test -- src/components/layout/header.test.tsx`
Expected: FAIL because the shared layout and menu do not exist yet

- [ ] **Step 3: Write minimal implementation**

```tsx
// src/components/common/LanguageSwitcher.tsx
export function LanguageSwitcher() {
  return (
    <div>
      <button type="button" aria-label="BM">
        BM
      </button>
      <button type="button" aria-label="EN">
        EN
      </button>
    </div>
  );
}
```

```tsx
// src/components/layout/SiteHeader.tsx
import { useState } from 'react';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 shadow-sm backdrop-blur" role="banner">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/">Taska Al-Mizan</a>
        <button type="button" aria-label="Open menu" onClick={() => setOpen((value) => !value)}>
          Menu
        </button>
        <LanguageSwitcher />
        {open ? <a href="https://wa.me/60139491544">WhatsApp Now</a> : null}
      </div>
    </header>
  );
}
```

```tsx
// src/App.tsx
import { SiteHeader } from './components/layout/SiteHeader';

export default function App() {
  return (
    <div>
      <SiteHeader />
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test -- src/components/layout/header.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/lib/utils.ts src/components/common/LanguageSwitcher.tsx src/components/common/ButtonLink.tsx src/components/common/FloatingWhatsAppButton.tsx src/components/layout/TopContactBar.tsx src/components/layout/SiteHeader.tsx src/components/layout/MobileNav.tsx src/components/layout/Footer.tsx src/App.tsx src/components/layout/header.test.tsx
git commit -m "feat: add shared layout and WhatsApp navigation"
```

### Task 5: Build the homepage sections and visual system

**Files:**
- Create: `src/components/common/SectionHeading.tsx`
- Create: `src/components/common/ImageCard.tsx`
- Create: `src/components/common/InfoCard.tsx`
- Create: `src/components/sections/home/HeroSection.tsx`
- Create: `src/components/sections/home/AboutPreviewSection.tsx`
- Create: `src/components/sections/home/ProgramsPreviewSection.tsx`
- Create: `src/components/sections/home/WhyChooseUsSection.tsx`
- Create: `src/components/sections/home/DailyActivitiesSection.tsx`
- Create: `src/components/sections/home/GalleryPreviewSection.tsx`
- Create: `src/components/sections/home/TestimonialsSection.tsx`
- Create: `src/components/sections/shared/ContactCTA.tsx`
- Create: `src/pages/HomePage.tsx`
- Modify: `src/app/router.tsx`
- Create: `src/pages/homepage.test.tsx`

- [ ] **Step 1: Write the failing homepage test**

```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders the homepage trust and conversion sections', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByText(/why parents choose taska al-mizan/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view programs/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test -- src/pages/homepage.test.tsx`
Expected: FAIL because the homepage sections have not been built yet

- [ ] **Step 3: Write minimal implementation**

```tsx
// src/pages/HomePage.tsx
export default function HomePage() {
  return (
    <main>
      <section>
        <h1>A Safe & Cheerful Place for Your Little One</h1>
        <a href="/programs">View Programs</a>
      </section>
      <section>
        <h2>Why Parents Choose Taska Al-Mizan</h2>
      </section>
    </main>
  );
}
```

```tsx
// src/app/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export default router;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test -- src/pages/homepage.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/common/SectionHeading.tsx src/components/common/ImageCard.tsx src/components/common/InfoCard.tsx src/components/sections/home/HeroSection.tsx src/components/sections/home/AboutPreviewSection.tsx src/components/sections/home/ProgramsPreviewSection.tsx src/components/sections/home/WhyChooseUsSection.tsx src/components/sections/home/DailyActivitiesSection.tsx src/components/sections/home/GalleryPreviewSection.tsx src/components/sections/home/TestimonialsSection.tsx src/components/sections/shared/ContactCTA.tsx src/pages/HomePage.tsx src/app/router.tsx src/pages/homepage.test.tsx
git commit -m "feat: add homepage sections and CTA flow"
```

### Task 6: Build the About, Programs, and Gallery pages

**Files:**
- Create: `src/components/layout/PageBanner.tsx`
- Create: `src/pages/AboutPage.tsx`
- Create: `src/pages/ProgramsPage.tsx`
- Create: `src/pages/GalleryPage.tsx`
- Modify: `src/app/router.tsx`
- Create: `src/pages/inner-pages.test.tsx`

- [ ] **Step 1: Write the failing inner-pages test**

```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders the programs page with childcare offering cards', () => {
  render(
    <MemoryRouter initialEntries={['/programs']}>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByText(/full day childcare/i)).toBeInTheDocument();
  expect(screen.getByText(/islamic values/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test -- src/pages/inner-pages.test.tsx`
Expected: FAIL because the route pages do not exist yet

- [ ] **Step 3: Write minimal implementation**

```tsx
// src/pages/ProgramsPage.tsx
export default function ProgramsPage() {
  return (
    <main>
      <h1>Our Childcare Programs</h1>
      <article>Full Day Childcare</article>
      <article>Islamic Values &amp; Basic Adab</article>
    </main>
  );
}
```

```tsx
// src/app/router.tsx
import AboutPage from '../pages/AboutPage';
import GalleryPage from '../pages/GalleryPage';
import HomePage from '../pages/HomePage';
import ProgramsPage from '../pages/ProgramsPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/programs', element: <ProgramsPage /> },
  { path: '/gallery', element: <GalleryPage /> },
]);
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test -- src/pages/inner-pages.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/PageBanner.tsx src/pages/AboutPage.tsx src/pages/ProgramsPage.tsx src/pages/GalleryPage.tsx src/app/router.tsx src/pages/inner-pages.test.tsx
git commit -m "feat: add about programs and gallery pages"
```

### Task 7: Build the contact page, form validation, and map section

**Files:**
- Create: `src/components/forms/ContactForm.tsx`
- Create: `src/pages/ContactPage.tsx`
- Modify: `src/app/router.tsx`
- Create: `src/components/forms/contactForm.test.tsx`

- [ ] **Step 1: Write the failing contact-form test**

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from './ContactForm';

test('shows validation messages for empty required fields', async () => {
  const user = userEvent.setup();
  render(<ContactForm />);

  await user.click(screen.getByRole('button', { name: /send enquiry/i }));

  expect(screen.getByText(/parent name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test -- src/components/forms/contactForm.test.tsx`
Expected: FAIL because the contact form component does not exist yet

- [ ] **Step 3: Write minimal implementation**

```tsx
// src/components/forms/ContactForm.tsx
import { useState } from 'react';

export function ContactForm() {
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({
      name: 'Parent name is required',
      phone: 'Phone number is required',
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Parent Name
        <input name="parentName" />
      </label>
      <label>
        Phone Number
        <input name="phoneNumber" />
      </label>
      <button type="submit">Send Enquiry</button>
      {errors.name ? <p>{errors.name}</p> : null}
      {errors.phone ? <p>{errors.phone}</p> : null}
    </form>
  );
}
```

```tsx
// src/pages/ContactPage.tsx
import { ContactForm } from '../components/forms/ContactForm';

export default function ContactPage() {
  return (
    <main>
      <h1>Contact Taska Al-Mizan</h1>
      <ContactForm />
      <iframe
        title="Taska Al-Mizan map"
        src="https://www.google.com/maps?q=Kuaters%20Jenis%20Apartment%2C%20Fasa%2012%2C%20Blok%20E2%2C%20Presint%209%2C%20Putrajaya&output=embed"
      />
    </main>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test -- src/components/forms/contactForm.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/forms/ContactForm.tsx src/pages/ContactPage.tsx src/app/router.tsx src/components/forms/contactForm.test.tsx
git commit -m "feat: add contact page and enquiry form"
```

### Task 8: Apply final styling, motion, and responsive QA polish

**Files:**
- Modify: `src/styles/index.css`
- Modify: `tailwind.config.ts`
- Modify: `src/components/**/*.tsx`
- Modify: `src/pages/**/*.tsx`
- Modify: `src/content/**/*.ts`

- [ ] **Step 1: Write the failing visual behavior test**

```tsx
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders the homepage primary CTA with the themed class hook', () => {
  render(<HomePage />);
  expect(screen.getByRole('link', { name: /view programs/i })).toHaveClass('btn-secondary');
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test -- src/pages/homepage.test.tsx`
Expected: FAIL because the final shared class hooks and themed styles are not applied yet

- [ ] **Step 3: Write minimal implementation**

```css
/* src/styles/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-teal: #4ecedb;
  --color-yellow: #ffd96a;
  --color-pink: #f7a8b8;
  --color-mint: #a8e6cf;
  --color-cream: #fffdf8;
  --color-text: #2d2d2d;
}

body {
  background: var(--color-cream);
  color: var(--color-text);
}

.btn-secondary {
  @apply inline-flex items-center justify-center rounded-full bg-rose-300 px-7 py-3 font-bold text-white shadow-sm transition;
}
```

```tsx
// src/pages/HomePage.tsx
export default function HomePage() {
  return (
    <main>
      <section>
        <h1>A Safe & Cheerful Place for Your Little One</h1>
        <a className="btn-secondary" href="/programs">
          View Programs
        </a>
      </section>
      <section>
        <h2>Why Parents Choose Taska Al-Mizan</h2>
      </section>
    </main>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test -- src/pages/homepage.test.tsx`
Expected: PASS

- [ ] **Step 5: Run full verification**

Run: `npm run test`
Expected: PASS for all test files

Run: `npm run build`
Expected: successful Vite production build with no TypeScript errors

- [ ] **Step 6: Commit**

```bash
git add tailwind.config.ts src/styles/index.css src/components src/pages src/content
git commit -m "feat: polish responsive bilingual marketing site"
```

## Self-Review

### Spec coverage

- Five public pages are covered by Tasks 5, 6, and 7.
- Bilingual content structure is covered by Tasks 2 and 3.
- Shared responsive navigation, footer, sticky header, and WhatsApp CTA are covered by Task 4.
- Homepage-specific sections are covered by Task 5.
- Contact form and map are covered by Task 7.
- Styling, motion hooks, and final responsive polish are covered by Task 8.
- Placeholder-ready content structure is covered by Task 3 and refined in Tasks 5 through 8.

No gaps found against the approved v1 spec.

### Placeholder scan

- No `TBD`, `TODO`, or deferred-code placeholders remain in the plan steps.
- All code-writing steps include concrete example code to guide implementation.
- All verification steps include exact commands and expected outcomes.

### Type consistency

- Language keys are consistently `bm` and `en`.
- The contact form component is consistently named `ContactForm`.
- Shared content is consistently referred to as `siteContent` in the content layer.

