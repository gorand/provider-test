export const TARIFFS = {
  FETCH_ALL: 'FETCH_ALL',
  SET_TARIFF: 'SET_TARIF',
  TOGGLE_IP: 'TOGGLE_IP',
}

export const fetchTariffs = () => ({ type: TARIFFS.FETCH_ALL })
export const setTariff = data => ({ type: TARIFFS.SET_TARIFF, data })
export const toggleIP = () => ({ type: TARIFFS.TOGGLE_IP })
