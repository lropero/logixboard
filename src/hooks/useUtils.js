import { useContext } from 'react'

import { Utils as UtilsContext } from 'logixboard/contexts'

const useUtils = () => {
  const utils = useContext(UtilsContext)

  if (!utils) {
    throw new Error('useUtils: !utils, forgot UtilsContext.Provider?')
  }

  return utils
}

export default useUtils
