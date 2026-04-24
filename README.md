# Money Transfers Overview

Nuxt 3 implementation of the Money Transfers overview page, built from the Figma reference in [`docs/figma.md`](docs/figma.md).

**Stack:** Nuxt 3 · Vue 3 · TypeScript · Tailwind CSS · Chart.js · Auth0

---

## Running the project

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
NUXT_AUTH0_DOMAIN=your-tenant.auth0.com
NUXT_AUTH0_CLIENT_ID=your-client-id
NUXT_AUTH0_CLIENT_SECRET=your-client-secret
NUXT_AUTH0_SESSION_SECRET=a-random-32-char-string
NUXT_AUTH0_APP_BASE_URL=http://localhost:3000
```

All five variables are required. The app will redirect unauthenticated users to `/login`, which initiates the Auth0 flow.

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You will be redirected to `/overview` after login.

### 4. Build and preview

```bash
npm run build
npm run preview
```

---

## Architecture

```
├── pages/
│   ├── index.vue          # Redirects to /overview
│   ├── overview.vue       # Main page — composes all sections
│   └── login.vue          # Auth0 sign-in entry point
│
├── components/
│   ├── AppHeader.vue          # Sticky top bar with logo, theme toggle, user menu
│   ├── AppSidebar.vue         # Left icon rail (desktop) / drawer (mobile)
│   ├── AppBrand.vue           # SAGE TRADER logo mark
│   ├── NavTabs.vue            # Overview / Deposit / Withdraw / History tabs
│   ├── BalanceChart.vue       # Line chart — Cash Available to Trade (Chart.js)
│   ├── AccountsBlock.vue      # Wire or Plaid account list card
│   ├── TransfersTable.vue     # Recent transfers — table (≥600px) / cards (<600px)
│   ├── SidebarNavItem.vue     # Single sidebar navigation item
│   ├── SidebarToggle.vue      # Hamburger/close button (mobile only)
│   ├── ThemeToggle.vue        # Light/dark mode switch
│   └── UserMenu.vue           # Avatar button with logout dropdown
│
├── components/ui/
│   ├── UiButton.vue           # Polymorphic button/link with variant styles
│   ├── UiPill.vue             # Neutral or outlined label chip
│   └── UiSegmentedControl.vue # All / Wire / ACH filter toggle
│
├── composables/
│   └── useTheme.ts        # isDark ref + toggle + init (reads localStorage / prefers-color-scheme)
│
├── middleware/
│   └── auth.ts            # Redirects unauthenticated users to /login
│
├── data/
│   ├── accounts.ts        # Mock wire and Plaid account fixtures
│   ├── chart.ts           # Mock weekly balance data points (W1–W12)
│   ├── navigation.ts      # Sidebar items, header tabs, brand data
│   └── transfers.ts       # Mock transfer rows (18 rows, all three statuses)
│
├── types/
│   └── index.ts           # Shared TypeScript types (Account, Transfer, ChartPoint…)
│
├── utils/
│   └── format.ts          # formatAmount, formatCurrency, formatDate, maskAccount
│
├── assets/css/
│   └── tailwind.css       # Tailwind directives + CSS custom properties for light/dark tokens
│
├── public/icons/          # SVG icon assets exported from Figma
├── tailwind.config.js     # Design tokens wired to CSS custom properties
└── nuxt.config.ts         # Modules: @auth0/auth0-nuxt, @nuxtjs/tailwindcss
```

### Key design decisions

**Theming** — Light and dark mode use CSS custom properties (`--color-*`) defined on `:root` and `.dark`. Tailwind color tokens reference these variables, so every semantic color flips automatically when `useTheme` toggles the `.dark` class on `<html>`.

**Data** — All chart, account, and transfer data is mocked locally in `data/`. The page is ready to swap in real API calls without touching the components.

**Responsive layout** — The sidebar collapses to a slide-in drawer below `lg` (1024px). The transfers section switches from a scrollable table to stacked cards below `sm` (600px). No layout changes were specified in the Figma for mobile; breakpoints follow the requirements doc.

**Auth** — `middleware/auth.ts` guards `/overview`. The login page calls `/auth/login` (Auth0 redirect), and logout calls `/auth/logout`.
