interface iAppProps {
  amount: number
  currency: 'GBP' | 'EUR'
}

export function formatCurrency({ amount, currency }: iAppProps) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency
  }).format(amount)
}
