import { TARIFF } from 'consts'
import { TARIFFS__FETCH, TARIFF__SET } from 'actions'

const initialState = {
  list: [
    { name: 'Тариф S', amount: 1000, caption: 'руб./мес.' },
    { name: 'Тариф M', amount: 2000, caption: 'руб./мес.' },
    {
      name: 'Тариф L (Статический IP адрес в составе пакета)',
      amount: 3000,
      caption: 'руб./мес.',
    },
  ],
  current: TARIFF.S,
  options: false,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case TARIFFS__FETCH:
      return { ...state }
    case TARIFF__SET:
      if (action.data === TARIFF.L) {
        return { ...state, current: action.data, options: true }
      }

      return { ...state, current: action.data, options: false }
    default:
      return state
  }
}

export default reducer
