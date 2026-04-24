import type { Transfer } from '~/types';

export const transfers: Transfer[] = [
  { id: 't-001', timestamp: '2025-11-04T12:15', type: 'Deposit',    method: 'ACH',  accountMasked: '****3456', amount:  40000.00, status: 'pending'   },
  { id: 't-002', timestamp: '2025-11-03T16:16', type: 'Withdrawal', method: 'Wire', accountMasked: '****6222', amount:  -8888.08, status: 'completed' },
  { id: 't-003', timestamp: '2025-11-03T15:23', type: 'Withdrawal', method: 'Wire', accountMasked: '****6222', amount:  -8888.08, status: 'rejected'  },
  { id: 't-004', timestamp: '2025-11-02T10:42', type: 'Deposit',    method: 'ACH',  accountMasked: '****1122', amount:   5250.00, status: 'completed' },
  { id: 't-005', timestamp: '2025-11-01T18:05', type: 'Withdrawal', method: 'ACH',  accountMasked: '****3456', amount:  -1200.00, status: 'pending'   },
  { id: 't-006', timestamp: '2025-10-31T09:30', type: 'Deposit',    method: 'Wire', accountMasked: '****6222', amount:  15000.00, status: 'completed' },
  { id: 't-007', timestamp: '2025-10-30T14:12', type: 'Withdrawal', method: 'ACH',  accountMasked: '****1122', amount:   -750.50, status: 'completed' },
  { id: 't-008', timestamp: '2025-10-29T11:50', type: 'Deposit',    method: 'Wire', accountMasked: '****6222', amount:  22500.00, status: 'pending'   },
  { id: 't-009', timestamp: '2025-10-28T08:15', type: 'Deposit',    method: 'ACH',  accountMasked: '****3456', amount:   3200.00, status: 'rejected'  },
  { id: 't-010', timestamp: '2025-10-27T17:40', type: 'Withdrawal', method: 'Wire', accountMasked: '****6222', amount: -12500.00, status: 'completed' },
  ];
