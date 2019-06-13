import { TARIFF } from 'consts'
import { TARIFFS__FETCH, TARIFF__SET, TARIFF__TOGGLE_IP } from 'actions'

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
  options: {
    staticIP: {
      include: { name: 'Подключение статического IP-адреса', amount: 147.6, caption: 'руб.' },
      fee: { name: 'Абонентская плата за статический IP-адрес', amount: 92, caption: 'руб./мес.' },
    },
    enebled: true,
    selectedIP: false,
  },
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case TARIFFS__FETCH:
      return { ...state }
    case TARIFF__SET:
      if (action.data === TARIFF.L) {
        return {
          ...state,
          current: action.data,
          options: {
            ...state.options,
            enebled: false,
          },
        }
      }

      return {
        ...state,
        current: action.data,
        options: {
          ...state.options,
          enebled: true,
        },
      }
    case TARIFF__TOGGLE_IP:
      return {
        ...state,
        options: {
          ...state.options,
          enebled: true,
          selectedIP: !state.options.selectedIP,
        },
      }
    default:
      return state
  }
}

export default reducer
