import type { Account, AccountBlock } from "~/types";

export const wireAccounts: Account[] = [
  {
    id: "wire-bmo",
    kind: "wire",
    bankName: "BMO Harris Bank",
    maskedNumber: "****6222",
    initial: "B",
  },
];

export const achAccounts: Account[] = [
  {
    id: "ach-boa",
    kind: "ach",
    bankName: "Bank of America",
    maskedNumber: "****3456",
    initial: "B",
  },
  {
    id: "ach-chase",
    kind: "ach",
    bankName: "Chase",
    maskedNumber: "****1122",
    initial: "C",
  },
];

export const accountBlocks: AccountBlock[] = [
  {
    kind: "wire",
    title: "Wire Accounts",
    subtitle: "Linked wire accounts available for transfers.",
    icon: "/icons/bank.svg",
    ctaLabel: "Add New Wire Account",
    accounts: wireAccounts,
  },
  {
    kind: "ach",
    title: "Plaid Accounts (ACH)",
    subtitle: "Connected Plaid accounts available for ACH transfers.",
    icon: "/icons/plaid.svg",
    ctaLabel: "Connect New via Plaid",
    accounts: achAccounts,
  },
];
