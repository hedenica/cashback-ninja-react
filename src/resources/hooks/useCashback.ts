import { useEffect, useState } from 'react'
import {
  formatCurrency,
  getCashbackTotal,
  Product,
} from 'resources'

interface Orders {
  id: number;
  products: Product[];
  total: number;
}

export function useCashback (orders: Orders[]) {
  const [cashbackTotal, setCashbackTotal] = useState('XX,XX')

  useEffect(() => {
    setCashbackTotal(
      formatCurrency(getCashbackTotal(orders.map(order => order.total))),
    )
  }, [orders])

  return {
    cashbackTotal,
  }
}
