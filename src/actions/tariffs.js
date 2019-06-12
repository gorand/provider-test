export const TARIFFS__FETCH = 'TARIFFS__FETCH';
export const TARIFF__SET = 'TARIFF__SET';

export const fetchTariffs = () => ({ type: TARIFFS__FETCH });

export function setTariff(data) {
  return { type: TARIFF__SET, data }
}
