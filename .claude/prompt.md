# EXPERT FRONTEND BUILD PROMPT

## Recreate the DT4IT Website Experience From Scratch Using Vue 3

You are an expert frontend architect, senior Vue.js engineer, UI/UX engineer, accessibility specialist, performance engineer, and pixel-accurate web recreation specialist.

Your task is to build a **completely new frontend repository from scratch** based on the publicly accessible structure, content model, visual language, interactions, responsive behavior, and product pages of:

**Reference:** https://dt4it.com/

Do NOT create a generic corporate website.

Do NOT create only the homepage.

You must deeply inspect the reference website first, understand its complete information architecture and all accessible product pages, then build an original Vue 3 implementation that reproduces the same overall experience, page hierarchy, interactions, responsiveness, navigation model, content density, and visual behavior.

The implementation must be production-quality.

---

# 1. CRITICAL FIRST STEP — RESEARCH BEFORE CODING

Before writing the application, inspect the entire accessible DT4IT website.

Start from:

https://dt4it.com/

Then inspect all relevant routes and product pages.

At minimum investigate:

* Arabic homepage
* English homepage
* About section
* Services
* Projects / clients
* Products
* Fleet / أسطولي
* Tailor / خياط
* Diamond Check / الشيك الماسي
* Diamond Archive / الأرشيف الماسي
* Contact
* Demo request
* Quote request
* Product navigation
* Language switching
* Footer navigation
* Product-specific navigation
* Pricing sections
* Screenshot galleries
* Customer sections
* CTA behavior
* Mobile navigation
* Forms
* Modals
* Floating contact/WhatsApp behavior

The reference currently exposes:

* Main corporate navigation
* Arabic/English switching
* Product browsing
* Four featured products
* Services
* About/company information
* Large customer/project logo section
* Contact form
* Product-specific landing pages
* Product features
* Product screenshots
* Pricing on applicable product pages
* Demo request modals
* Quote/request forms
* Product navigation
* Footer navigation

Verify all of these against the live website rather than assuming.

The reference product pages contain substantially more detail than the homepage, so do not stop after inspecting the homepage.

---

# 2. LEGAL / IMPLEMENTATION BOUNDARY

The goal is to recreate the **website experience and functionality**, not steal proprietary source code.

Do NOT:

* copy source code
* copy private APIs
* copy backend systems
* copy proprietary implementation
* hotlink assets from the reference in production
* copy private data
* copy tracking identifiers
* copy credentials
* copy proprietary third-party integrations

You may use the public website as a visual and functional reference.

For images/assets:

1. Inspect which assets are publicly exposed.
2. Determine their role and dimensions.
3. Recreate equivalent visual assets when necessary.
4. Store project-owned assets locally in `/public`.
5. Do not make the application dependent on the reference website being online.

If an exact public asset cannot legally/reliably be reused, create an equivalent original asset or placeholder with the same visual purpose and dimensions.

---

# 3. PRIMARY TECHNOLOGY

Build this as a Vue 3 application.

Required:

* Vue 3
* TypeScript
* Vite
* Vue Router
* Pinia
* Composition API
* `<script setup>`
* modern CSS
* responsive design
* ESLint
* Prettier
* Vitest
* Playwright

Use current stable versions compatible with one another.

Do NOT use React.

Do NOT use Next.js.

Do NOT convert this into a Nuxt application unless there is an explicit requirement later.

---

# 4. RECOMMENDED FRONTEND STACK

Use a carefully selected package ecosystem.

Recommended:

```text
vue
vue-router
pinia

@vueuse/core

zod

vee-validate
@vee-validate/zod

axios

lucide-vue-next

swiper

vue-i18n

dayjs

vue3-carousel
```

For icons, prefer:

```text
lucide-vue-next
```

Do not mix five different icon libraries.

For animations use a lightweight solution where appropriate.

Potentially:

```text
motion
```

or CSS animations.

Do not introduce animation libraries simply because they exist.

Every dependency must have a reason.

---

# 5. PROJECT ARCHITECTURE

Use a scalable feature-oriented architecture.

Recommended:

```text
src/
│
├── app/
│   ├── router/
│   ├── providers/
│   └── config/
│
├── assets/
│   ├── fonts/
│   ├── images/
│   ├── icons/
│   └── styles/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── forms/
│   ├── sections/
│   ├── product/
│   └── shared/
│
├── composables/
│
├── features/
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── products/
│   ├── projects/
│   ├── contact/
│   ├── demo/
│   └── quote/
│
├── layouts/
│
├── pages/
│
├── stores/
│
├── services/
│
├── data/
│
├── types/
│
├── utils/
│
├── i18n/
│
└── main.ts
```

Do not create a giant:

```text
components/
```

folder containing everything.

---

# 6. ROUTING

Create explicit routes.

Example:

```text
/
 /en
 /ar

/about
/services
/projects
/contact

/products
/products/fleet
/products/tailor
/products/check
/products/archive

/ar/products/fleet
/ar/products/tailor
/ar/products/check
/ar/products/archive

/en/products/fleet
/en/products/tailor
/en/products/check
/en/products/archive
```

Use route metadata for:

* title
* description
* locale
* canonical URL
* page type

Do not duplicate entire pages unnecessarily.

Build reusable product page templates.

---

# 7. PRODUCT PAGE ARCHITECTURE

The four products have different content but share a common page structure.

Create a reusable:

```text
ProductLandingPage
```

architecture.

Conceptually:

```text
ProductPage
 ├── ProductNavbar
 ├── Hero
 ├── Intro
 ├── HighlightSections
 ├── FeatureGrid
 ├── Advantages
 ├── Screenshots
 ├── Pricing
 ├── Customers
 ├── DemoCTA
 ├── Contact
 └── Footer
```

Product configuration should be data-driven.

Example:

```ts
interface ProductPageConfig {
  slug: string
  name: LocalizedText
  tagline: LocalizedText
  description: LocalizedText
  heroImage: string
  sections: ProductSection[]
  features: ProductFeature[]
  advantages: ProductAdvantage[]
  screenshots: ProductScreenshot[]
  pricing?: ProductPricing
  customers?: Customer[]
}
```

Then each product is data, not duplicated Vue templates.

---

# 8. HOME PAGE

Recreate the complete DT4IT homepage structure.

The current public site includes:

### Main navigation

Arabic version includes navigation around:

* Products
* Services
* About
* Contact
* English switch

The homepage also exposes a product browsing area and product links.

Build:

### Header

* company logo
* navigation
* products dropdown/menu
* language switch
* contact CTA
* responsive mobile menu

### Hero / company introduction

Create the same overall visual hierarchy and density as the reference.

### Services / capabilities

Represent:

* mobile applications
* website development
* archiving
* solutions and systems

These categories are explicitly present on the reference homepage.

### Products

Display:

* Fleet
* Tailor
* Diamond Check
* Diamond Archive

Each card must navigate to the dedicated product page.

### Projects / clients

Create the large customer logo wall / showcase.

Do not hardcode dozens of `<img>` tags directly in the template.

Use data:

```ts
customers.ts
```

and render through a reusable component.

### Contact

Build the complete contact form.

### Footer

Include:

* product links
* company links
* services
* contact information
* social links
* copyright

---

# 9. ABOUT SECTION

Create an About section matching the reference structure.

Include:

* company experience
* company positioning
* services
* mobile applications
* website development
* archiving
* electronic solutions
* visual imagery
* CTA

The reference emphasizes long-term experience serving clients in web programming, hosting, management systems and electronic archiving.

Use original presentation but preserve the information architecture.

---

# 10. SERVICES

Create a dedicated services section/page.

Include:

### Web Design

* responsive websites
* modern UI
* corporate sites
* portals

### Hosting

* hosting
* infrastructure
* maintenance
* support

### Application Programming

* web applications
* business systems
* management systems

### Identity Design

* visual identity
* branding
* digital presence

These service categories correspond to the reference site's service navigation.

---

# 11. PRODUCT CATALOG

Create a product showcase.

Products:

```text
Fleet
Tailor
Diamond Check
Diamond Archive
```

Each card should contain:

* product image
* product logo/name
* short description
* feature highlights
* More button

Create:

```text
ProductCard
ProductGrid
ProductNavigation
ProductSwitcher
```

---

# 12. FLEET PRODUCT PAGE

Create a complete Fleet page.

The reference describes Fleet as a web-based fleet management application covering vehicles, drivers, maintenance, fuel, equipment, work orders, spare parts, notifications and reports.

Implement sections for:

### Hero

* title
* description
* product image
* CTA

### Overview

Explain centralized fleet management.

### Vehicles

Show:

* vehicle management
* vehicle records
* operational history
* maintenance
* fuel
* reports

### Drivers

Show:

* driver records
* license expiry
* documents
* fuel
* inspections
* notifications

### Feature grid

Include:

```text
Fleet Management
Fleet Maintenance
Fuel Management
Equipment Management
Work Orders
Spare Parts & Inventory
Notifications
Reports
```

These feature categories are explicitly represented on the reference page.

### Advantages

Include:

* SQL database
* user permissions
* Excel import
* transaction history
* Gregorian/Hijri calendars
* database backup

### Screenshots

Create a polished screenshot gallery.

### Demo request

Open modal.

### Customers

Display customer list/logos.

### Contact

Complete contact section.

---

# 13. TAILOR PRODUCT PAGE

Create a complete Tailor product page.

The reference describes Tailor as a system for managing men's, women's, military and uniform tailoring businesses, including customers, measurements, inventory, fabrics, accounts, branches and electronic invoicing.

Include:

### Hero

### Tailoring management

### Customer measurements

Support visual representation of:

* customer
* measurements
* previous measurements
* customizable fields

### Inventory

Show:

* stock
* fabrics
* inventory balances
* cost

### Branches

Show:

* multiple branches
* shared data
* cloud operation

### Employees

Roles such as:

* tailor
* salesperson

### Electronic invoice

Feature:

* e-invoice
* QR code
* compliance-oriented presentation

### SMS

Show customer notifications.

### Reports

Include:

* orders
* revenue
* expenses
* inventory
* garment status

### Design

Show light/dark mode support as represented by the reference.

### Screenshots

Build interactive gallery.

### Pricing

The reference contains product-specific pricing and plan features for Tailor. Reproduce the same information architecture, but use project-owned content/data.

---

# 14. DIAMOND CHECK PAGE

Create a complete Diamond Check page.

The reference covers:

* check design
* check editing
* check printing
* transfers
* reminders
* printed-check management
* reports
* branches
* beneficiaries
* employees
* Excel import
* permissions
* backups
* search
* Hijri/Gregorian dates
* PDF/XLS/DOC exports.

Build sections:

### Hero

### Check Designer

Visual editor presentation.

### Check Printing

### Transfers

### Recurring checks

### Printed checks

### Reports

### System capabilities

Feature grid:

```text
SQL Database
Branches
Beneficiaries
Employees
General Ledger
Excel Import
Network Support
Permissions
Backup
Global Search
Hijri/Gregorian Calendar
PDF/XLS/DOC Export
```

### Screenshots

Interactive gallery.

### Pricing

Create pricing cards.

### Customers

### Demo CTA

### Contact

---

# 15. DIAMOND ARCHIVE PAGE

Create a complete document archiving product page.

The reference describes:

* projects
* groups
* users
* permissions
* templates
* custom fields
* reminders
* reports
* SQL Server
* web application
* local/global network
* independent projects
* image/document formats
* backup
* barcode
* scanning
* image processing.

Build sections for:

### Hero

### Document management

### Projects

### Groups

### Custom fields

Support field examples:

```text
Number
Text
List
Hijri Date
Gregorian Date
Boolean
```

### Reminders

### Printing / reporting

### Supported documents

Show:

```text
JPEG
GIF
TIFF
Word
Excel
PDF
```

### Permissions

### Backup

### Barcode

### Scanner integration concept

### Image processing

Explain:

* brightness
* contrast
* color adjustments

### Screenshots

The reference exposes a large screenshot gallery for the archive product. Build a polished responsive gallery rather than a static row of images.

### Demo CTA

### Contact

---

# 16. PRODUCT SCREENSHOT SYSTEM

This is important.

Do not simply place images one after another.

Create:

```text
ScreenshotGallery
ScreenshotGrid
ScreenshotLightbox
ScreenshotCarousel
```

Features:

* thumbnails
* active image
* next/previous
* keyboard navigation
* fullscreen
* close
* mobile swipe
* lazy loading
* accessible labels

Use:

```text
loading="lazy"
```

where appropriate.

---

# 17. CUSTOMER LOGO SYSTEM

The reference contains a very large customer/project showcase.

Build:

```text
CustomerLogoGrid
CustomerLogoMarquee
CustomerShowcase
```

Requirements:

* responsive
* lazy loading
* grayscale/normal states if appropriate
* consistent logo sizing
* no layout shift
* accessible alt text

Store customer information in:

```text
src/data/customers.ts
```

Do not duplicate markup.

---

# 18. FORMS

Implement real frontend form behavior.

Forms:

### Contact

Fields:

```text
Name
Company
Email
Phone
Message
```

### Demo request

Fields:

```text
Name
Email
Phone
```

### Quote request

Fields:

```text
Name
Phone
Email
Product
Requirements
```

Use:

```text
vee-validate
zod
```

Validate:

* required fields
* email
* phone
* length
* localized messages

Create:

```text
ContactForm
DemoRequestForm
QuoteForm
```

---

# 19. MODAL SYSTEM

The reference uses modal-style demo and quote flows.

Create a reusable modal system:

```text
BaseModal
DemoModal
QuoteModal
```

Requirements:

* focus trap
* ESC close
* backdrop
* body scroll lock
* mobile responsive
* accessible labels
* validation
* success state
* error state

---

# 20. INTERNATIONALIZATION

Arabic and English must be first-class.

Use:

```text
vue-i18n
```

Structure:

```text
src/i18n/
  ar.ts
  en.ts
```

Never scatter text directly throughout components.

Bad:

```vue
<h1>Contact Us</h1>
```

Prefer:

```vue
<h1>{{ t('contact.title') }}</h1>
```

Support:

```text
Arabic
English
```

with route-aware localization.

---

# 21. RTL

Arabic must use real RTL.

When Arabic is active:

```html
<html dir="rtl" lang="ar">
```

When English:

```html
<html dir="ltr" lang="en">
```

Use CSS logical properties:

```css
margin-inline
padding-inline
inset-inline
border-inline
text-align: start
```

Avoid unnecessary:

```css
left: ...
right: ...
```

Test every component in both directions.

---

# 22. HEADER

Build a reusable header.

Desktop:

```text
Logo
Products
Services
About
Projects
Contact
Language
CTA
```

Mobile:

```text
Logo
Language
Menu button
```

Mobile menu must be a real interaction.

Include:

* slide/fade animation
* active link
* nested product links
* close button
* keyboard support

---

# 23. PRODUCT NAVIGATION

On product pages create product-aware navigation.

Example:

```text
Product
Features
Advantages
Screenshots
Pricing
Customers
Contact
```

And product switcher:

```text
Archive
Fleet
Check
Tailor
```

Make it easy to move between products.

---

# 24. FOOTER

Create a reusable footer.

Columns:

### Products

* Diamond Check
* Diamond Archive
* Fleet
* Tailor

### Company

* About
* Services
* Projects

### Services

* Web Design
* Hosting
* Application Programming
* Identity

### Contact

* phone
* email
* location
* social/contact links

The reference footer follows this general information architecture.

---

# 25. RESPONSIVE DESIGN

This is a mandatory requirement.

Do NOT merely make desktop narrower.

Create intentional layouts for:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px
```

Check:

* navigation
* hero
* grids
* feature cards
* screenshots
* pricing
* customer logos
* forms
* modals
* footer
* typography
* images

No:

* horizontal overflow
* clipped text
* broken grids
* overlapping sections
* oversized images
* unusable forms

---

# 26. VISUAL RECREATION

The target should be visually close to the reference.

Analyze:

* content width
* container sizes
* section spacing
* typography
* font weights
* line heights
* card radius
* borders
* shadows
* image placement
* section backgrounds
* CTA sizes
* navbar height
* footer spacing
* mobile breakpoints
* animation timing

Do not blindly guess.

Inspect the actual rendered site.

When something is visually different, compare:

```text
Reference
vs
Implementation
```

and correct it.

---

# 27. IMAGES AND ASSETS

Create a complete asset strategy.

Structure:

```text
public/
  images/
    branding/
    products/
      fleet/
      tailor/
      check/
      archive/
    customers/
    services/
    backgrounds/
    icons/
```

Use descriptive filenames.

Example:

```text
fleet-hero.webp
fleet-vehicles.webp
fleet-drivers.webp
fleet-maintenance.webp
tailor-hero.webp
archive-dashboard.webp
check-designer.webp
```

Prefer:

```text
WebP
AVIF
```

where practical.

Use responsive image sizing.

Do not load giant original images when a smaller version is sufficient.

---

# 28. IMAGE PERFORMANCE

Every image should have:

* width
* height
* alt
* loading behavior
* appropriate object-fit

Avoid CLS.

Hero images can be eager-loaded.

Below-the-fold screenshots should generally be lazy-loaded.

---

# 29. ANIMATION

Recreate the feeling of the reference without making the site noisy.

Use subtle:

* fade-in
* slide-up
* hover
* image reveal
* menu transition
* modal transition
* carousel transition

Respect:

```css
prefers-reduced-motion
```

If reduced motion is enabled, reduce or disable non-essential animation.

---

# 30. DARK MODE

If the reference/product experience indicates dark mode support, architect the design system so dark mode can be enabled without rewriting components.

Use CSS variables:

```css
--color-background
--color-foreground
--color-primary
--color-muted
--color-border
```

Do not hardcode colors throughout components.

---

# 31. DESIGN TOKENS

Create centralized design tokens.

Example:

```css
:root {
  --container-max-width: ...;
  --spacing-section: ...;
  --radius-card: ...;
  --radius-button: ...;
  --shadow-card: ...;
}
```

Use semantic variables.

Do not scatter arbitrary values everywhere.

---

# 32. TYPOGRAPHY

Inspect the reference typography and create a coherent type system.

Support Arabic typography properly.

Use an appropriate Arabic/Latin font combination.

Font loading must be optimized.

Do not use ten different fonts.

---

# 33. ACCESSIBILITY

Target WCAG 2.2 AA.

Every:

* button
* link
* image
* form
* dialog
* navigation
* carousel

must be accessible.

Requirements:

* keyboard navigation
* focus indicators
* semantic HTML
* ARIA where required
* screen-reader labels
* proper heading hierarchy
* sufficient contrast
* reduced motion

---

# 34. SEO

Even though this is Vue/Vite, implement strong SEO architecture.

For every route provide:

* title
* description
* canonical
* Open Graph
* Twitter metadata
* language alternates
* structured data where appropriate

Create:

```text
sitemap.xml
robots.txt
```

Generate metadata from route/page configuration.

Important product pages need unique SEO metadata.

---

# 35. PERFORMANCE

Target excellent Lighthouse scores.

Prioritize:

* Performance
* Accessibility
* Best Practices
* SEO

Optimize:

* JavaScript bundle
* images
* fonts
* CSS
* lazy loading
* route-level code splitting
* component imports

Do not import huge libraries for tiny functionality.

---

# 36. STATE MANAGEMENT

Use Pinia only for actual application state.

Examples:

```text
locale
theme
mobile navigation
contact/demo modal
global UI state
```

Do not put every component's local state into Pinia.

Use:

```text
ref
computed
reactive
```

for local state.

---

# 37. DATA ARCHITECTURE

Even though this is initially frontend-focused, do not hardcode product data inside templates.

Use:

```text
src/data/
  products.ts
  services.ts
  customers.ts
  navigation.ts
  pricing.ts
```

The architecture should allow replacing static data later with APIs.

Concept:

```text
Page
 ↓
Feature
 ↓
Composable
 ↓
Service
 ↓
API
```

For now:

```text
Service
 ↓
Static/mock data
```

Later:

```text
Service
 ↓
HTTP API
```

No page should need to be rewritten.

---

# 38. TYPES

Create strong TypeScript models.

Example:

```ts
type Locale = 'ar' | 'en'

interface LocalizedText {
  ar: string
  en: string
}

interface Product {
  id: string
  slug: string
  name: LocalizedText
  description: LocalizedText
  heroImage: string
  features: ProductFeature[]
  screenshots: ProductScreenshot[]
}
```

Avoid `any`.

---

# 39. ERROR / EMPTY / LOADING STATES

Even a marketing site needs proper states.

Forms:

```text
idle
submitting
success
error
```

Images:

```text
loading
loaded
error
```

Dynamic product content:

```text
loading
empty
error
success
```

Create reusable components.

---

# 40. TESTING

Use Vitest.

Test:

* navigation
* locale switching
* product selection
* modal opening/closing
* form validation
* product configuration
* responsive menu state

Use Playwright for E2E:

```text
Open homepage
Switch Arabic → English
Open products
Open Fleet
Open Tailor
Open Check
Open Archive
Open demo modal
Submit invalid form
Submit valid form
Open screenshot gallery
Navigate mobile menu
```

---

# 41. VISUAL REGRESSION

Create a visual QA workflow.

For important pages:

```text
Home
Fleet
Tailor
Check
Archive
```

capture screenshots at:

```text
Desktop
Tablet
Mobile
```

Compare against the reference.

Fix:

* spacing
* typography
* image sizing
* alignment
* responsive behavior
* navigation
* section heights

until visually close.

---

# 42. SEO-FRIENDLY ROUTE MODEL

Prefer clean routes.

Example:

```text
/en
/en/about
/en/services
/en/projects
/en/products
/en/products/fleet
/en/products/tailor
/en/products/check
/en/products/archive

/ar
/ar/about
/ar/services
/ar/projects
/ar/products
/ar/products/fleet
/ar/products/tailor
/ar/products/check
/ar/products/archive
```

If the reference uses another URL strategy, inspect it and adapt accordingly.

---

# 43. MOBILE NAVIGATION QA

This must be manually tested.

Check:

* open menu
* close menu
* click product
* nested product links
* language switch
* body scroll lock
* ESC
* back navigation

No menu should remain open after route navigation.

---

# 44. FORMS UX

Forms must not simply submit silently.

After success show:

```text
Success icon
Success message
Clear next action
```

After error show:

```text
Error message
Which field failed
Retry
```

Do not erase user-entered values unnecessarily.

---

# 45. NO FAKE FUNCTIONALITY

Do not build buttons that do nothing.

Every visible interaction must either:

1. work, or
2. have a clearly intentional placeholder state.

Examples:

* language switch → works
* product navigation → works
* demo modal → works
* quote modal → works
* screenshot gallery → works
* mobile navigation → works
* contact form → validated
* pricing CTA → works

---

# 46. DO NOT OVERENGINEER

Use architecture that is strong but appropriate.

Do not introduce:

* unnecessary micro-frontends
* unnecessary global stores
* unnecessary backend
* unnecessary GraphQL
* unnecessary state libraries
* huge UI frameworks

The project is primarily a high-quality corporate/product marketing frontend.

Keep the architecture maintainable.

---

# 47. PACKAGE MANAGEMENT

Use:

```text
pnpm
```

Create:

```text
package.json
pnpm-lock.yaml
```

Scripts:

```json
{
  "dev": "vite",
  "build": "vue-tsc && vite build",
  "preview": "vite preview",
  "typecheck": "vue-tsc --noEmit",
  "lint": "eslint .",
  "format": "prettier --write .",
  "test": "vitest",
  "test:e2e": "playwright test"
}
```

Make sure every script actually works.

---

# 48. ENVIRONMENT

Create:

```text
.env.example
```

Potential variables:

```text
VITE_APP_NAME
VITE_APP_URL
VITE_API_URL
VITE_WHATSAPP_URL
VITE_CONTACT_EMAIL
```

Do not expose secrets through `VITE_` variables.

---

# 49. DOCUMENTATION

Create:

```text
README.md
ARCHITECTURE.md
DESIGN-SYSTEM.md
CONTENT-MODEL.md
I18N.md
```

Document:

* installation
* development
* production build
* architecture
* routes
* components
* data model
* translations
* assets
* testing

---

# 50. DEFINITION OF DONE

The project is NOT finished when the homepage renders.

It is finished when:

### Homepage

* complete
* responsive
* bilingual
* animated
* SEO-ready

### Products

* all four products
* dedicated pages
* feature sections
* screenshots
* customer sections
* pricing where applicable
* CTAs

### Navigation

* desktop
* mobile
* product navigation
* language switching

### Forms

* contact
* demo
* quote
* validation
* success/error states

### Content

* services
* about
* projects/customers
* products
* contact

### Technical

* Vue 3
* TypeScript
* Vite
* Router
* Pinia
* i18n
* tests
* lint
* formatting

### UX

* RTL
* responsive
* accessibility
* animations
* loading states
* error states

### Performance

* optimized images
* lazy loading
* code splitting
* no unnecessary dependencies
* no layout shifts

### SEO

* page metadata
* canonical
* sitemap
* robots
* Open Graph
* structured data

---

# 51. DEVELOPMENT ORDER

Do NOT build random pages.

Follow this sequence.

## STEP 1 — Research

Inspect the reference deeply.

Create a written internal map:

```text
Routes
Pages
Sections
Components
Assets
Interactions
Forms
Responsive behavior
Languages
Products
Navigation
```

Do this BEFORE implementation.

## STEP 2 — Architecture

Create:

* Vue project
* TypeScript
* routing
* i18n
* design tokens
* component system
* data layer

## STEP 3 — Assets

Organize:

* logos
* product images
* screenshots
* customer logos
* icons
* backgrounds
* fonts

## STEP 4 — Shared Shell

Build:

* header
* navigation
* mobile menu
* footer
* language switch
* product navigation

## STEP 5 — Homepage

Build the complete homepage.

## STEP 6 — Product Template

Build reusable product page architecture.

## STEP 7 — Products

Implement:

1. Fleet
2. Tailor
3. Diamond Check
4. Diamond Archive

## STEP 8 — Forms

Implement:

* contact
* demo
* quote
* modal system

## STEP 9 — Responsive

Test every page at all required breakpoints.

## STEP 10 — SEO / Accessibility

Implement and audit.

## STEP 11 — Performance

Optimize:

* images
* fonts
* bundles
* animations
* loading

## STEP 12 — Testing

Run:

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm test:e2e
```

Fix all failures.

---

# 52. FINAL INSTRUCTION TO THE CODING AGENT

Think like a **senior frontend engineer recreating a production commercial website**, not like a developer filling empty pages.

Before every major implementation decision ask:

> How does this behave on the real reference site?

> Is this reusable?

> Is this responsive?

> Does this work in Arabic and English?

> Is this accessible?

> Will this remain maintainable if the backend/API is added later?

> Does this visually match the reference's hierarchy and density?

> Does this interaction actually work?

Do not rush into coding.

First understand the reference.

Then establish the architecture.

Then implement the shared system.

Then implement pages.

Then perform visual and responsive QA.

The final result should be a **high-quality Vue 3 recreation of the complete DT4IT public website experience**, including its corporate site, product catalog, individual product pages, feature presentations, screenshot galleries, pricing sections, customer showcase, bilingual experience, forms, responsive navigation, and all meaningful interactions discovered during research.

Do not stop at the homepage.

Do not deliver a mockup.

Deliver a production-quality frontend.
