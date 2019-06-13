import { TARIFF_TYPE } from 'consts'
import { TARIFFS } from 'actions'

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
  current: TARIFF_TYPE.S,
  options: {
    staticIP: {
      include: {
        name: 'Подключение статического IP-адреса',
        amount: 147.6,
        caption: 'руб.',
      },
      fee: {
        name: 'Абонентская плата за статический IP-адрес',
        amount: 92,
        caption: 'руб./мес.',
      },
      ignored: false,
    },
    enebled: true,
    selectedIP: false,
  },
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case TARIFFS.FETCH_ALL:
      return state
    case TARIFFS.SET_TARIFF:
      if (action.data === TARIFF_TYPE.L) {
        return {
          ...state,
          current: action.data,
          options: {
            ...state.options,
            enebled: false,
            staticIP: {
              ...state.options.staticIP,
              ignored: true,
            },
          },
        }
      }

      return {
        ...state,
        current: action.data,
        options: {
          ...state.options,
          enebled: true,
          staticIP: {
            ...state.options.staticIP,
            ignored: false,
          },
        },
      }
    case TARIFFS.TOGGLE_IP:
      return {
        ...state,
        options: {
          ...state.options,
          selectedIP: !state.options.selectedIP,
        },
      }
    default:
      return state
  }
}

export default reducer
