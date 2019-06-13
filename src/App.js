import React from 'react'
import { connect } from 'react-redux'

import { setTariff, toggleIP } from 'actions'

import styles from './App.module.css'
import Options from 'components/Options'
import Invoice from 'components/Invoice'

function App(props) {
  const { tariffs, selected, changeTariff, changeIP, options } = props;
  console.log("TCL: App -> staticIP", props)
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        <Options
          onChange={changeTariff}
          onChangeIP={changeIP}
          radioOptions={tariffs}
          selected={selected}
          options={options}
        />
      </div>
      <div className={styles.rightColumn}>
        <Invoice tariff={tariffs[selected]} options={options} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  tariffs: state.tariffs.list,
  selected: state.tariffs.current,
  options: state.tariffs.options,
})

const mapDispatchToProps = dispatch => ({
  changeTariff: data => dispatch(setTariff(data)),
  changeIP: () => dispatch(toggleIP()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
