import React, { Fragment } from 'react'
import cn from 'classnames'
import styles from './Invoice.module.css'

const Invoice = props => {
  const {
    tariff,
    options: { enebled, staticIP, selectedIP },
  } = props

  const calcMonthlyPayment = () => {
    const fee = selectedIP ? staticIP.fee.amount : 0

    if (staticIP.ignored) {
      return tariff.amount
    }

    return Math.round(tariff.amount + fee)
  }
  const monthlyPayment = calcMonthlyPayment()
  const annualPayment = monthlyPayment * 12

  return (
    <Fragment>
      <div className={styles.topBlock}>
        <div className={styles.title}>Интернет для бизнеса</div>
        <div className={styles.row}>
          <span className={styles.rowLeft}>{tariff.name}</span>
          <span className={styles.rowRight}>
            {tariff.amount} {tariff.caption}
          </span>
        </div>
        {selectedIP && enebled && (
          <Fragment>
            <div className={styles.row}>
              <span className={styles.rowLeft}>{staticIP.include.name}</span>
              <span className={styles.rowRight}>
                {staticIP.include.amount} {staticIP.include.caption}
              </span>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLeft}>{staticIP.fee.name}</span>
              <span className={styles.rowRight}>
                {staticIP.fee.amount} {staticIP.fee.caption}
              </span>
            </div>
          </Fragment>
        )}
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.title}>Итого</div>
        {enebled && (
          <div className={cn(styles.row, styles.boldRow)}>
            {selectedIP && (
              <Fragment>
                <span className={styles.rowLeft}>Плата за подключение</span>
                <span className={styles.rowRight}>
                  {staticIP.include.amount} {staticIP.include.caption}
                </span>
              </Fragment>
            )}
          </div>
        )}
        <div className={cn(styles.row, styles.boldRow)}>
          <span className={styles.rowLeft}>Ежемесячный платеж</span>
          <span className={styles.rowRight}>{monthlyPayment} руб.</span>
        </div>
        <div className={cn(styles.row, styles.boldRow)}>
          <span className={styles.rowLeft}>Ежегодный платеж</span>
          <span className={styles.rowRight}>{annualPayment} руб.</span>
        </div>
      </div>
    </Fragment>
  )
}

export default Invoice
