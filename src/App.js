import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { theme } from 'most/utils'

const Style = createGlobalStyle`
  body {
    background-color: ${theme.brand};
  }
`

const App = () => {
  return <Style />
}

export default App
