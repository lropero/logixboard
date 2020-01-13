import axios from 'axios'

import { useUtils } from 'logixboard/hooks'

const useApi = (config) => {
  config = config || useUtils().config

  const api = {
    info: async ({ destination, origin }) => {
      let info = { destination: {}, origin: {} }
      try {
        const promiseD = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(destination)}&key=${config.googleMapsApiKey}`)
        const promiseO = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(origin)}&key=${config.googleMapsApiKey}`)
        info = (await Promise.all([promiseD, promiseO])).reduce((info, response, index) => {
          info[index ? 'origin' : 'destination'] = (response.status === 200 && response.data.results.length && response.data.results[0]) || {}
          return info
        }, {})
      } catch (error) {
        console.error(error.toString())
      }
      return info
    },
    shipments: async () => {
      let shipments = []
      try {
        const response = await axios.get(`${config.api}/shipments`)
        shipments = (response.status === 200 && response.data) || shipments
      } catch (error) {
        console.error(error.toString())
      }
      return shipments
    }
  }

  return api
}

export default useApi
