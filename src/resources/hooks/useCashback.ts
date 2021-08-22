import { useEffect, useState, useCallback } from 'react';
import { formatCurrency, getCashbackTotal, Product } from 'resources';

interface Orders {
  id: number;
  products: Product[];
  total: number;
}

export function useCashback(orders: Orders[]) {
  const [cashbackTotal, setCashbackTotal] = useState('XX,XX');

  const handleCashbackTotal = useCallback(() => {
    setCashbackTotal(
      formatCurrency(getCashbackTotal(orders.map(order => order.total))),
    );
  }, [orders]);

  useEffect(() => {
    if (orders) {
      handleCashbackTotal();
    }
  }, [orders, handleCashbackTotal]);

  return {
    cashbackTotal,
    handleCashbackTotal,
  };
}
