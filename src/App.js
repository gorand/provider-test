import React from 'react'
import { connect } from 'react-redux'

import { setTariff } from 'actions';

import styles from './App.module.css'
import Options from 'components/Options'
import Invoice from 'components/Invoice'

function App({ tariffs, selected, changeTariff, options }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        <Options onChange={changeTariff} radioOptions={tariffs} selected={selected} hasMore={options} />
      </div>
      <div className={styles.rightColumn}>
        <Invoice tarrif={null} />
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
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
