export const TARIFFS__FETCH = 'TARIFFS__FETCH'
export const TARIFF__SET = 'TARIFF__SET'
export const TARIFF__TOGGLE_IP = 'TARIFF__TOGGLE_IP'

export const fetchTariffs = () => ({ type: TARIFFS__FETCH })
export const setTariff = data => ({ type: TARIFF__SET, data })
export const toggleIP = () => ({ type: TARIFF__TOGGLE_IP })
