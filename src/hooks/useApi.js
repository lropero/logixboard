import axios from 'axios'

import { useUtils } from 'logixboard/hooks'

const useApi = () => {
  const utils = useUtils()

  const api = {
    shipments: async () => {
      let shipments = []
      try {
        const response = await axios.get(`${utils.config.api}/shipments`)
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
