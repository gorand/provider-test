import React, { Fragment } from 'react'
import tableStyles from './Table.module.css'
import styles from './Options.module.css'
import Title from './Title'
import RadioButton from './RadioButton'
import Checkbox from './Checkbox'

const Options = props => {
  return (
    <div className={styles.wrapper}>
      <table className={tableStyles.table}>
        <tbody>
          <Title title="Выберите тариф" />
          <RadioButton {...props} />
          {!props.hasMore && (
            <Fragment>
              <Title title="Выберите дополнительные опции" />
              <Checkbox
                onChange={props.onChangeIP}
                editable={true}
                name="Подключение статического IP-адреса"
                amount={145.5}
                caption="руб."
                checked={true}
              />
              <Checkbox
                editable={false}
                name="Абонентская плата за статический IP-адрес"
                amount={92}
                caption="руб./мес."
                checked={true}
              />
            </Fragment>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Options
