import { formatCurrency, getCashbackByOrder, Product } from 'resources'

import shoppingBag from 'assets/shopping-bag.svg'
import cashbackImg from 'assets/cashback.svg'

import styles from './card.module.scss'

interface Orders {
  id: number;
  products: Product[];
  total: number;
}

interface CardProps {
  orders: Orders[];
}

export function Card ({ orders }: CardProps) {
  return (
    <div className={styles.cardColumns}>
      {orders.map(order => (
        <div key={order.id} className={styles.card}>
          <div className={styles.banner}>
            <div className={styles.order}>
              <img src={shoppingBag} alt="sacola de compras" />
              <p>Pedido | Nº {order.id}</p>
            </div>
          </div>
          <div className={styles.itensContainer}>
            <div className={styles.itensList}>
              {order.products.map((product, index) => (
                <p key={index}>{product.name}</p>
              ))}
            </div>

            <div className={styles.itensPrice}>
              {order.products.map((product, index) => (
                <p key={index}>{formatCurrency(product.price)}</p>
              ))}
            </div>
          </div>
          <div className={styles.cardCashback}>
            <img src={cashbackImg} alt="porquinho" />
            <span>
              cashback | {formatCurrency(getCashbackByOrder(order.total))}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
