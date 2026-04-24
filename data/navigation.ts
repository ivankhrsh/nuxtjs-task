export interface SidebarItem {
  label: string;
  icon: string;
  to: string;
  enabled?: boolean;
}

export interface HeaderTab {
  label: string;
  to: string;
}

export interface Brand {
  wordmark: string;
  tagline: string;
  mark: string;
}

export const sidebarMain: SidebarItem[] = [
  { label: "Dashboard", icon: "/icons/nav-overview.svg", to: "/dashboard" },
  { label: "Positions", icon: "/icons/nav-positions.svg", to: "/positions" },
  { label: "Analytics", icon: "/icons/nav-analytics.svg", to: "/analytics" },
  {
    label: "Transfers",
    icon: "/icons/nav-transfers.svg",
    to: "/overview",
    enabled: true,
  },
  { label: "Reports", icon: "/icons/nav-reports.svg", to: "/reports" },
  {
    label: "Transactions",
    icon: "/icons/nav-transactions.svg",
    to: "/transactions",
  },
  { label: "Platform", icon: "/icons/nav-platform.svg", to: "/platform" },
  { label: "Referrals", icon: "/icons/nav-referrals.svg", to: "/referrals" },
];

export const sidebarSecondary: SidebarItem[] = [
  { label: "Support", icon: "/icons/nav-support.svg", to: "#" },
  { label: "Disclosures", icon: "/icons/nav-disclosures.svg", to: "#" },
];

export const headerTabs: HeaderTab[] = [
  { label: "Overview", to: "/overview" },
  { label: "Deposit", to: "/deposit" },
  { label: "Withdraw", to: "/withdraw" },
  { label: "History", to: "/history" },
];

export const brand: Brand = {
  wordmark: "SAGE",
  tagline: "TRADER",
  mark: "/icons/logo-mark.svg",
};
