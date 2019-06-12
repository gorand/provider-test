import React, { Fragment } from 'react'
import cn from 'classnames'
import tableStyles from './Table.module.css'

import Price from 'components/Price'

const RadioButton = props => {
  const { radioOptions, onChange, selected } = props;
  const handleTariffChange = ({ target }) => onChange(parseInt(target.value));

  return (
    <Fragment>
      {radioOptions.map((option, index) => (
        <tr key={option.name}>
          <td
            className={cn(tableStyles.field, {
              [tableStyles.fieldActive]: !index,
            })}
          >
            <label>
              <input
                onChange={handleTariffChange}
                className={tableStyles.input}
                name="tariff"
                type="radio"
                value={index}
                checked={index === selected}
              />
              {option.name}
            </label>
          </td>
          <td
            className={cn(tableStyles.field, tableStyles.rightField, {
              [tableStyles.fieldActive]: !index,
            })}
          >
            <Price amount={option.amount} caption={option.caption} />
          </td>
        </tr>
      ))}
    </Fragment>
  )
}

export default RadioButton
