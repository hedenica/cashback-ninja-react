const { format: formatCurrency } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
})

export { formatCurrency }
