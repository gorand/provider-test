import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTariffs, setTariff, toggleIP } from 'actions'
import styles from './App.module.css'
import Options from 'components/Options'
import Invoice from 'components/Invoice'

function App(props) {
  const {
    tariffs,
    selected,
    options,
    changeTariff,
    fetchTariffs,
    changeIP,
  } = props

  useEffect(() => {
    fetchTariffs()
  }, [fetchTariffs])

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
  fetchTariffs: () => dispatch(fetchTariffs()),
  changeTariff: data => dispatch(setTariff(data)),
  changeIP: () => dispatch(toggleIP()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
