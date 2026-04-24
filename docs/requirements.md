Implement the Money Transfers – Overview page using Nuxt (latest version).
Figma Link: https://www.figma.com/design/MHIcvZNjQSYTgWhCtXU4rO/Test?node-id=0-1&t=tgPvmi94fqnZ5iMe-1

1. Tech Requirements
Use Nuxt.js (latest version) .
Use SCSS or TailwindCSS (developer may choose, but structure must be clean and reusable).
No UI libraries (e.g., no ElementUI, Vuetify).
Chart should be implemented using Chart.js (or other library).
Data (chart, accounts, table rows) can be generated with ChatGPT or mocked manually.

2. Page Structure
Implement the page exactly as shown on the layout:

A. Header Navigation
Tabs: Overview, Deposit, Withdraw, History
Highlight the active tab based on route.
Links can be dummy, but Overview must be active.

B. Account Balance Chart
Line chart displaying 12 “weeks” with mock values.
Tooltip on hover (can be simple).
Button "Last 90 days" without functionality (UI only).

C. Connected Accounts Section
Two blocks:
Wire Accounts
Plaid Accounts (ACH)
Each block must include:
Bank card styling (icon, masked account number).
“Add New Wire Account” (link, no modal required).
“Connect New via Plaid” (link, no functionality).

D. Recent Transfers Table
Tabs: All / Wire / ACH (filter mock data on client side).
Table columns: Date, Type, Method, Account, Amount, Status.
Status should have colored labels: Pending, Completed, Rejected.
“Last 7 Days” button (UI only, no functionality).

3. Responsiveness
Page must be fully adaptive with breakpoints:
1440px and above → full desktop layout
1240px - 1439.98px
1024px - 1239.98px
905px - 1023.98px
600px - 904.98px
< 600px → mobile:
Sections stack vertically
Table becomes card-style or scrollable horizontally
Tabs become scrollable or stacked
Developer may choose the best approach but layout must stay clean and usable.

4. Code Quality Requirements
Use defineProps, defineEmits, computed, ref, v-for, v-if, components where appropriate.
Use a clean, consistent folder structure (components/, pages/, assets/).
Follow BEM naming OR Tailwind utility consistency.
Code should be readable, formatted, and logically organized.

5. Extra Requirements (Optional but scored)
Dark mode support (simple color switcher).
Basic hover/focus transitions.
Bank icons: simple placeholder letters inside circles (no external icons).

6. Deliverables
Public GitHub repo with the project.
Clear README with:
How to run the project
Short breakdown of the architecture