# Figma reference

Source of truth for visual implementation. The written `requirements.md`
covers *what* to build; this file covers *how it should look* based on
what we pulled from Figma via the MCP plugin.

## File

- URL: https://www.figma.com/design/MHIcvZNjQSYTgWhCtXU4rO/Test?node-id=0-1&t=tgPvmi94fqnZ5iMe-1


## Node map

Use these node IDs with `get_design_context` / `get_metadata` to pull
specific frames. Coordinates are relative to the parent frame.

| Node ID   | Name                               | Size        | Purpose                                    |
|-----------|------------------------------------|-------------|--------------------------------------------|
| `4:1481`  | Test Task (section)                | 3712×1668   | Top-level section — contains everything    |
| `1:744`   | Money Transfers                    | 1728×1468   | **Main design frame** (the populated page) |
| `1:999`   | Money Transfers Empty State        | 1728×1260   | Empty-state variant (no data)              |
| `4:1480`  | Requirements                       | 998×1672    | Task spec text (already in requirements.md)|
| `4:1479`  | (requirements text node inside)    | 950×1624    | Same content as `4:1480`                   |

Children of the main frame `1:744`:

| Node ID   | Name                 | Position (x,y) | Size       | Notes                                       |
|-----------|----------------------|----------------|------------|---------------------------------------------|
| `1:801`   | header               | 0, 0           | 1728×48    | Dark top bar with SAGE TRADER logo          |
| `1:750`   | sidebar              | 0, 48          | 112×1420   | Left icon rail (10 nav items)               |
| `1:828`   | headline             | 152, 64        | 583×40     | "Money Transfers" title + Overview tabs     |
| `4:1266`  | Frame 1106           | 152, 160       | 1016×28    | "Account Balance" section heading           |
| `4:1183`  | Frame 1107           | 152, 212       | 1016×376   | Balance chart card                          |
| `4:1307`  | (text node)          | 152, 668       | —          | "Connected Accounts" heading                |
| `4:1309`  | Frame 1089           | 152, 720       | 496×176    | Wire Accounts block                         |
| `4:1331`  | Frame 1090           | 672, 720       | 496×240    | Plaid Accounts (ACH) block                  |
| `4:1308`  | (text node)          | 152, 1056      | —          | "Recent Transfers" heading                  |
| `4:1389`  | Frame 1095           | 152, 1108      | 1016×296   | Recent Transfers table card                 |

## Surprises vs. the written spec

Things present in the design but **not** mentioned in `requirements.md`:

1. **Left icon rail** (`1:750`) — a 112px sidebar with Dashboard,
   Positions, Analytics, **Transfers (active)**, Reports, Transactions,
   Platform, Referrals, Support, Disclosures. The requirements only
   describe a top nav. Decision needed: implement the rail, or skip it
   since it's outside the "Overview" page scope.
2. **Brand: "SAGE TRADER"** — blue `#477BFF` "SAGE" over white
   "TRADER" in Montserrat, inside a dark `#1B243D` header bar.
3. **Chart card title is "Cash Available to Trade"**, not "Account
   Balance". "Account Balance" is the section heading *above* the card.
4. **Plaid block shows two accounts by default** (Bank of America
   `****3456`, Chase `****1122`); Wire block shows one (BMO Harris
   `****6222`). The link/button text is "Add New Wire Account" and
   "Connect New via Plaid" (with a `+` leading icon).
5. **Segmented button control** for All/Wire/ACH (Material-style) —
   "All" is filled teal `#C2E8FF` with check icon and text `#004D67`;
   Wire/ACH are outlined pills with `#767680` border.
6. **"Last 90 days" / "Last 7 days" buttons** are neutral pills
   (bg `#F5F2FA`, text `#45464F`) — not primary-colored.
7. **Status labels** have distinct fills:
   - Pending: outlined, border `#C6C5D0`, text `#45464F`
   - Completed: filled `#C2EFAD`, text `#2B4F1E`
   - Rejected: filled `#FFDAD6`, text `#93000A`
8. **Table**: Date cell shows date + time (`Nov 4, 2025` + `12:15 PM`),
   Amount column is right-aligned using **Nunito Sans** for numerals.
9. **Chart** is a line chart *with a filled area gradient*, 12 weekly
   points (W1–W12), y-axis 0–30K in 5K steps. One point `4:1258` uses a
   different dot asset (`imgEllipse18`) — likely the "hovered/active"
   state shown in the static mock.

## Design tokens

Pulled from the Figma file's local styles. Wire these into Tailwind
config so class names can reference semantic tokens rather than raw hex.

### Colors (Material-theme naming)

| Token                              | Hex        | Used for                                |
|------------------------------------|------------|-----------------------------------------|
| on-surface                         | `#1B1B21`  | Primary text                            |
| on-surface-variant                 | `#45464F`  | Secondary text, neutral pill text       |
| outline                            | `#767680`  | Segmented-button borders                |
| outline-variant                    | `#C6C5D0`  | Card borders, table row dividers        |
| primary-value                      | `#1C40BE`  | Active tab text, link text, account initial bg |
| primary-container                  | `#DDE1FF`  | Active sidebar icon bg                  |
| on-primary-container               | `#374379`  | Active sidebar label text               |
| secondary-container                | `#C2E8FF`  | Segmented "All" fill                    |
| on-secondary-container             | `#004D67`  | Segmented "All" text                    |
| surface-container-lowest           | `#FFFFFF`  | Card backgrounds                        |
| surface-container-low              | `#F5F2FA`  | "Last N days" pill bg                   |
| surface-container-high             | `#E9E7EF`  | Account-block icon tile bg              |
| (page bg)                          | `#F9FAFB`  | Page background                         |
| (header bg)                        | `#1B243D`  | Dark top bar                            |
| (sidebar bg)                       | `#F3F4F6`  | Sidebar rail background (Gray 100)      |
| (sidebar border)                   | `#E5E7EB`  | Sidebar right border (Gray 200)         |
| Gray 100 / 200 / 300 / 600         | `#F3F4F6` `#E5E7EB` `#D1D5DC` `#4A5565` | Chart gridlines, axis labels |
| Trader Portal Primary Light 100    | `#F5F5F7`  | Table header / wrapper bg               |
| Logo blue                          | `#477BFF`  | "SAGE" wordmark                         |

Status colors:

| Status    | Fill       | Text       |
|-----------|------------|------------|
| Pending   | (outlined) | `#45464F`  |
| Completed | `#C2EFAD`  | `#2B4F1E`  |
| Rejected  | `#FFDAD6`  | `#93000A`  |

### Typography

Primary family: **Plus Jakarta Sans**. Secondary: **Montserrat** (logo),
**Nunito Sans** (table numerals), **Inter** (chart axis labels).

| Style             | Family / Weight         | Size / Line / Track             |
|-------------------|-------------------------|---------------------------------|
| headline/small    | Plus Jakarta Sans Medium| 24 / 32 / 0                     |
| title/large       | Plus Jakarta Sans Medium| 22 / 28 / 0                     |
| title/medium      | Plus Jakarta Sans Medium| 16 / 24 / 0                     |
| label/large       | Plus Jakarta Sans Medium| 14 / 20 / 0.1                   |
| label/medium      | Plus Jakarta Sans Medium| 12 / 16 / 0.15                  |
| body/medium       | Plus Jakarta Sans Regular| 14 / 20 / 0.15                 |

Note the Tailwind config currently references **Inter** — we should
swap the primary family to Plus Jakarta Sans (or alias `font-sans` to
it).

### Spacing & shape

- Page content left margin: `152px` (matches sidebar `112` + `40` gap)
- Section heading → card gap: `24px`
- Card padding: `16px` (chart card uses `16px` horizontal, `24px` vertical)
- Card radius: `24px`; account-row radius: `16px`; pill: `100px`
- Account-row: `pl-16 pr-24 py-12`, `0.5px` `#C6C5D0` border, subtle
  shadow `0 0.5px 1.5px rgba(0,0,0,0.05)`
- Icon tile (account block header): `p-14` `#E9E7EF` bg, radius `12px`

## How to re-pull design context

From this environment:

```
mcp__plugin_figma_figma__get_design_context
  fileKey = RSUTuh3B0YnqGoAQOCU2w8
  nodeId  = 1:744   # main frame (or any sub-frame from the map above)
```

Returns React+Tailwind reference code + screenshot + asset URLs
(MCP-hosted, 7-day expiry). **Adapt to Nuxt/Vue** — do not paste the
React output directly.

## Implementation notes for Nuxt

- Treat `1:744` as the single source for the desktop layout. No mobile
  frame exists in this file — breakpoints below 1440px are left to our
  judgment per `requirements.md` §3.
- The empty-state frame `1:999` is the reference for when transfers /
  accounts lists are empty. Nice-to-have; not required by the spec.
- Chart rendering: the Figma mock is a static image — we render it with
  Chart.js. Match the filled-area line style, grid, and point markers.
- Sidebar (`1:750`): out of spec but visually prominent. Recommended
  approach = render a stub rail so the layout matches the screenshot,
  but don't wire any routes beyond "Transfers → Overview" being active.
