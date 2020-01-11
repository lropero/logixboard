import React, { useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { useLocalStore } from 'mobx-react-lite'

import config from 'logixboard/config'
import theme from 'logixboard/theme'
import { Dashboard } from 'logixboard/components'
import { Utils as UtilsContext } from 'logixboard/contexts'
import { useWindowDimensions } from 'logixboard/hooks'

const Style = createGlobalStyle`
  body {
    background-color: ${theme.background};
    margin: 0;
    padding: 0;
  }
`

const App = () => {
  const utils = useLocalStore(() => ({
    config,
    dimensions: {},
    theme,
    updateDimensions ({ height, width }) {
      this.dimensions.height = height
      this.dimensions.width = width
    }
  }))

  const { height, width } = useWindowDimensions()

  useEffect(() => {
    utils.updateDimensions({ height, width })
  }, [height, width])

  return (
    <UtilsContext.Provider value={utils}>
      <Style />
      <Dashboard />
    </UtilsContext.Provider>
  )
}

export default App
