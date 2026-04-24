export function formatAmount(value: number): string {
  const abs = Math.abs(value);
  const formatted = abs.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return value < 0 ? `-${formatted}` : formatted;
}

export function formatCurrency(value: number): string {
  const amount = formatAmount(value);

  return value < 0 ? `-$${amount.slice(1)}` : `$${amount}`;
}

export function formatDate(timestamp: string): { date: string; time: string } {
  const d = new Date(timestamp);
  return {
    date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    time: d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
  };
}

export function maskAccount(fullNumber: string): string {
  return `****${fullNumber.slice(-4)}`;
}
