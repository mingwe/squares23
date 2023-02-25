import axios from 'axios'

export function fetchPresets() {
  return axios.get('http://demo7919674.mockable.io/')
}
