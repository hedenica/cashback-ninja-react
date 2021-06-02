import { useCashback, useOrders } from 'resources'
import ninjaImg from 'assets/ninja-cashback.png'

import styles from './header.module.scss'

export function Header () {
  const { data, isFetched, isLoading } = useOrders()
  const { cashbackTotal } = useCashback(isFetched ? data : [])

  const finalCashback = isLoading ? 'XX,XX' : cashbackTotal

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.title}>
          <img src={ninjaImg} alt='Cashback Ninja Logo' />
          <h1>Cashback Ninja</h1>
        </div>
        <blockquote className={styles.blockquote}>
          "O melhor cashback da internet"
        </blockquote>
        <h3>{`Seu saldo em cashback: ${finalCashback}`}</h3>
      </header>
    </div>
  )
}
