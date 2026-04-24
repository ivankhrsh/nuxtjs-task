export type AccountKind = 'wire' | 'ach';

export interface Account {
  id: string;
  kind: AccountKind;
  bankName: string;
  maskedNumber: string;
  initial: string;
}

export interface AccountBlock {
  kind: AccountKind;
  title: string;
  subtitle: string;
  icon: string;
  ctaLabel: string;
  accounts: Account[];
}

export type TransferStatus = 'pending' | 'completed' | 'rejected';
export type TransferType = 'Deposit' | 'Withdrawal';
export type TransferMethod = 'Wire' | 'ACH';
export type TransferFilter = 'all' | 'wire' | 'ach';

export interface Transfer {
  id: string;
  timestamp: string;
  type: TransferType;
  method: TransferMethod;
  accountMasked: string;
  amount: number;
  status: TransferStatus;
}

export interface ChartPoint {
  label: string;
  value: number;
}
