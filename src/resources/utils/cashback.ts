/*
* CASHBACK RULES by ORDER

R$0,00   -> R$50,00   = NÃO TEM CASHBACK

R$50,01  -> R$100,00  = 5% DE CASHBACK

R$100,01 -> R$500,00  = 10% DE CASHBACK

R$500,01 -> INFINITO  = 15% DE CASHBACK

*/

export function getCashbackByOrder (total: number):number {
  if (total < 50) {
    return 0
  }

  if (total > 50.01 && total <= 100) {
    return (total * 5) / 100
  }

  if (total > 100.01 && total <= 500) {
    return (total * 10) / 100
  }

  return (total * 15) / 100
}

export function getCashbackTotal (ordersTotals: Array<number> = []) {
  const cashbackArray: Array<number> = ordersTotals.map((total: number) => getCashbackByOrder(total))

  const totalCashback = cashbackArray
    .reduce((acc: number, total: number) => {
      return acc + total
    }, 0)

  return totalCashback
}
