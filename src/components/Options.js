import React, { Fragment } from 'react'
import tableStyles from './Table.module.css'
import styles from './Options.module.css'
import Title from './Title'
import RadioButton from './RadioButton'
import Checkbox from './Checkbox'

const Options = props => {
  const { options, options: { selectedIP, staticIP }, onChangeIP } = props;

  return (
    <div className={styles.wrapper}>
      <table className={tableStyles.table}>
        <tbody>
          <Title title="Выберите тариф" />
          <RadioButton {...props} />
          {options.enebled && (
            <Fragment>
              <Title title="Выберите дополнительные опции" />
              <Checkbox
                onChange={onChangeIP}
                editable={true}
                name="Подключение статического IP-адреса"
                amount={staticIP.include.amount}
                caption={staticIP.include.caption}
                checked={selectedIP}
              />
              <Checkbox
                editable={false}
                name="Абонентская плата за статический IP-адрес"
                amount={staticIP.fee.amount}
                caption={staticIP.fee.caption}
                checked={selectedIP}
              />
            </Fragment>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Options
