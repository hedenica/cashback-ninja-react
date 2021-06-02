import { Link } from 'react-router-dom'
import { useOrders } from 'resources'
import Lottie from 'react-lottie'

import { Card } from './components/Card'
import { Button } from 'shared/Button'

import clickImg from 'assets/click.svg'
import loadingLottie from 'assets/loading-lottie.json'
import emptyStateLottie from 'assets/empty-lottie.json'

import lottieDefault from './utils/lottieDefault'

import styles from './home.module.scss'

export function Home () {
  const { data: orders, isLoading } = useOrders()

  return (
    <>
      {isLoading
        ? (
        <Lottie
          options={lottieDefault(loadingLottie)}
          height={400}
          width={400}
        />
          )
        : (
        <>
          {orders.length > 0
            ? (
            <Card orders={orders} />
              )
            : (
            <Lottie
              options={lottieDefault(emptyStateLottie)}
              height={400}
              width={400}
            />
              )}
          <div className={styles.btnContainer}>
            <Link to="/register">
              <Button color="yellow" size="large" className={styles.button}>
                <img src={clickImg} alt="" />
                Cadastrar nova compra
              </Button>
            </Link>
          </div>
        </>
          )}
    </>
  )
}
