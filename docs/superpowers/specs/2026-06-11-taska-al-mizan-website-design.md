# Taska Al-Mizan Website Design Spec

Date: 2026-06-11
Project: Taska Al-Mizan marketing website
Status: Approved design, ready for implementation planning after user review

## 1. Goal

Build a modern, playful, bilingual marketing website for Taska Al-Mizan, a childcare centre in Presint 9, Putrajaya. The site should make parents feel that the taska is safe, caring, cheerful, clean, and trustworthy, while guiding them toward direct WhatsApp or contact-form enquiries.

The first release will focus on a polished public-facing website rather than dashboard functionality. However, the codebase should be organized so content can be updated easily later and future features can be added without reworking the site structure.

## 2. Product Scope

The first release will include five public pages:

- Home
- About
- Programs
- Gallery
- Contact

The site will support:

- Responsive multi-page routing
- Bilingual BM and English content
- Structured local content files for maintainability
- WhatsApp-first conversion
- Contact form with client-side validation
- Embedded map section on the Contact page
- Placeholder-ready image and social sections for launch without final assets

The first release will not include:

- Parent, teacher, or admin dashboards
- Authentication
- Attendance or payment systems
- A live CMS integration
- Backend-driven contact submission

## 3. Audience and UX Goals

Primary audience:

- Parents or guardians looking for childcare in Putrajaya

Core user questions the site should answer quickly:

- Is this taska safe and caring?
- What kind of daily experience will my child have?
- What programs or childcare options are available?
- How can I contact the taska immediately?

Primary conversion goals:

- WhatsApp enquiry
- Phone enquiry
- Contact form submission intent

## 4. Technical Direction

Recommended stack for v1:

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React icons
- Framer Motion for selective, subtle animation

Rationale:

- Fastest path to a polished launch
- Simple deployment and maintenance
- Strong fit for a multi-page marketing website
- Easy to evolve later into CMS-backed content or a broader application

## 5. Information Architecture

### Home

Purpose:

- Create a strong first impression
- Build trust
- Introduce services and daily experience
- Drive contact

Sections:

- Top contact bar
- Sticky main navigation
- Hero
- About preview
- Programs preview
- Why choose us
- Daily activities preview
- Gallery preview
- Testimonials
- Contact CTA banner
- Footer

### About

Purpose:

- Build trust and explain the centre's values and care approach

Sections:

- Intro banner
- Welcome/introduction
- Mission and values
- Child-friendly environment
- Safety and care approach
- Location and local convenience
- CTA

### Programs

Purpose:

- Explain service offerings and early development focus clearly

Sections:

- Intro banner
- Program overview cards
- Daily learning and care pillars
- Optional FAQ-style support content
- CTA

Program cards:

- Full Day Childcare
- Half Day Childcare
- Early Learning Activities
- Islamic Values and Basic Adab
- Creative Play
- Reading and Story Time
- Motor Skill Activities
- Social Development

### Gallery

Purpose:

- Show the environment and activities to increase parent confidence

Sections:

- Intro banner
- Filterable or grouped image sections
- Classroom and play area
- Learning activities
- Meal time
- Group activities
- Event moments
- CTA

### Contact

Purpose:

- Remove friction and provide immediate contact options

Sections:

- Intro banner
- Contact details cards
- Contact form
- WhatsApp CTA block
- Embedded Google Map
- Operating hours placeholder

Form fields:

- Parent Name
- Phone Number
- Child Age
- Message

## 6. Content Strategy

The website will be CMS-friendly without adding a CMS in v1. Content will be stored in structured local data files rather than hardcoded inside page components.

This content layer should include:

- Site-wide labels and navigation text
- BM and English page copy
- Contact details
- Programs data
- Testimonials
- Gallery metadata
- CTA text
- Placeholder image metadata
- Operating hours placeholder text

Benefits:

- Easier content updates
- Cleaner components
- Clear path to a future CMS migration
- Lower risk of inconsistent bilingual copy

## 7. Language Strategy

The first release will be fully bilingual:

- Bahasa Melayu
- English

Implementation requirements:

- Visible language toggle in the header
- Consistent language switching across navigation, CTAs, and page sections
- Shared page structures with translated content
- Support for longer bilingual text without layout breakage

Default language for the first release will be Bahasa Melayu, with English available from the language switch. Both languages must be equally supported in the content model and UI.

## 8. Visual Direction

Design tone:

- Playful
- Safe
- Warm
- Parent-friendly
- Modern
- Trustworthy
- Cheerful

The visual style should balance real-world childcare photography with decorative shapes and icons. Photography should support trust and emotional connection, while the interface itself should carry a polished pastel identity.

### Color palette

- Primary teal: `#4ECEDB`
- Secondary yellow: `#FFD96A`
- Accent pink: `#F7A8B8`
- Mint green: `#A8E6CF`
- Background cream: `#FFFDF8`
- Main text: `#2D2D2D`
- Secondary text: `#6B7280`
- White: `#FFFFFF`

### Typography

Headings:

- Fredoka, Baloo 2, or Nunito

Body:

- Nunito, Poppins, or Inter

Hierarchy targets:

- Hero H1 desktop: `56px`, `800`, tight line-height
- Hero H1 mobile: `38px`
- Section H2: `36px`, `700`
- Card titles: `22px`, `700`
- Body text: `16px`, relaxed line-height

### UI styling

- Rounded cards and image frames
- Soft shadows
- Layered pastel backgrounds
- Floating decorative icons and shapes
- Friendly icons
- Pill-shaped CTA buttons

## 9. Layout and Responsive Behavior

Container:

```css
max-width: 1200px;
margin: 0 auto;
padding: 0 24px;
```

Desktop:

- 12-column layout
- 2-column hero
- 3 or 4-column card sections
- Full-width CTA/banner sections

Tablet:

- 2-column content grids where appropriate
- Slightly compressed spacing while preserving calm rhythm

Mobile:

- Single-column page flow
- Collapsible hamburger navigation
- Full-width or near-full-width CTAs where useful
- Cards stacked vertically
- Media reordered where needed for readability

Spacing rhythm:

- Large hero presence
- Generous vertical breathing room
- Calm, premium card spacing
- Faster access to trust and contact content than a generic lifestyle site

## 10. Homepage Experience

### Top contact bar

Purpose:

- Show location and contact information immediately

Content:

- Taska Al-Mizan
- Presint 9, Putrajaya
- Phone number
- WhatsApp quick link

Style:

- Soft yellow background
- Small readable text
- Rounded icon treatments

### Sticky header

Navigation items:

- Home
- About
- Programs
- Gallery
- Contact

Header utilities:

- Language toggle
- WhatsApp CTA
- Mobile menu

Behavior:

- Sticky on scroll
- Soft shadow once scrolled
- Clear active route state

### Hero

Headline direction:

- BM and English versions of the approved childcare-focused hero message

Content:

- Strong trust-building headline
- Warm supporting copy
- Primary CTA: Contact Us / WhatsApp
- Secondary CTA: View Programs
- Large child-focused visual slot
- Decorative icons and shapes

Layout:

- Desktop: text left, image right
- Mobile: text first, image below

### About preview

Content:

- Brief introduction
- Supporting feature list

Feature points:

- Caring environment
- Child-friendly activities
- Safe daily routine
- Parent communication

### Programs preview

Format:

- Rounded pastel cards
- Icon, title, description, optional link

### Why choose us

Format:

- Trust-focused benefit cards

Themes:

- Safe environment
- Caring supervision
- Fun learning activities
- Comfortable location
- Parent-friendly communication
- Child development focus

### Daily activities

Format:

- Timeline or sequential cards

Flow:

- Arrival and greeting
- Morning circle
- Learning through play
- Meal time
- Rest time
- Creative activities
- Pickup time

### Gallery preview

Format:

- 3 or 4 image cards
- Rounded corners
- Soft hover zoom

### Testimonials

Format:

- Parent review cards
- Avatar placeholder
- Name
- Short quote

### Contact CTA banner

Purpose:

- End the page with strong enquiry intent

Content:

- Clear reassurance-driven title
- Prompt to ask about availability and registration
- WhatsApp and call actions

## 11. Shared Components

Expected shared components:

- TopContactBar
- SiteHeader
- MobileNav
- LanguageSwitcher
- HeroSection
- SectionHeading
- FeatureCard
- ProgramCard
- TestimonialCard
- TimelineCard
- GalleryCard
- ContactCTA
- Footer
- FloatingWhatsAppButton

These names can change during implementation, but the component boundaries should remain clear and reusable.

## 12. Interaction and Motion

The site should feel polished without becoming noisy.

Use motion for:

- Hero entrance polish
- Card stagger or fade-in where tasteful
- Hover lift on buttons and cards
- Sticky header state transitions
- Mobile nav reveal

Motion should remain subtle and should not distract from readability or trust.

## 13. Contact and Conversion Details

Phone / WhatsApp:

- `0139491544`

WhatsApp URL:

- `https://wa.me/60139491544`

Suggested message:

- `Hi Taska Al-Mizan, saya berminat untuk tahu lebih lanjut tentang pendaftaran anak di taska.`

Encoded link:

- `https://wa.me/60139491544?text=Hi%20Taska%20Al-Mizan%2C%20saya%20berminat%20untuk%20tahu%20lebih%20lanjut%20tentang%20pendaftaran%20anak%20di%20taska.`

Address:

- `Kuaters Jenis Apartment, Fasa 12, Blok E2, Presint 9, Wilayah Persekutuan Kuala Lumpur, 62250 Putrajaya`

Contact form behavior in v1:

- Client-side validation only
- Clear success/next-step messaging
- UX should still prioritize WhatsApp as the strongest conversion path
- Form structure should be ready for future EmailJS or backend integration

## 14. Asset Strategy

The first release will be placeholder-ready.

Requirements:

- Use image slots and structured metadata so real photos can replace placeholders later
- Use clean, polished fallback visuals when no real images exist
- Leave social links as placeholders where final profiles are not available
- Ensure the design still looks intentional without final assets

## 15. Accessibility and Quality Bar

Implementation should consider:

- Strong text/background contrast despite pastel styling
- Keyboard-friendly navigation and interactive controls
- Meaningful button and link labels
- Mobile readability
- Stable layouts for bilingual content length differences
- Accessible form labels and validation messages

## 16. Verification Goals for Implementation

Before implementation is considered complete, verify:

- All five routes render correctly
- Navigation works across desktop and mobile
- Language switching updates shared and page-specific content
- WhatsApp links work across header, CTA sections, and floating button
- Contact form validates all required fields
- Embedded map displays correctly
- Layout remains polished with placeholder imagery
- Responsive behavior works across mobile and desktop

## 17. Future Expansion Readiness

The design and code structure should not block later additions such as:

- Student or parent login
- Parent dashboard
- Admin dashboard
- Teacher dashboard
- Attendance tracking
- Payment records
- Announcement system

This future-readiness should come from clean structure and content organization, not from prematurely implementing app-platform complexity in v1.
