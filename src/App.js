import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { ThemeProvider } from 'styled-components'
import { useLocalStore } from 'mobx-react-lite'

import config from 'logixboard/config'
import theme from 'logixboard/theme'
import { Dashboard, Navbar } from 'logixboard/components'
import { Utils as UtilsContext } from 'logixboard/contexts'
import { useWindowDimensions } from 'logixboard/hooks'

import 'antd/dist/antd.css'

const App = () => {
  const utils = useLocalStore(() => ({
    config,
    dimensions: {},
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
      <ThemeProvider theme={theme}>
        <Layout>
          <Layout.Header style={{ padding: 0 }}>
            <Navbar />
          </Layout.Header>
          <Layout.Content>
            <Dashboard />
          </Layout.Content>
        </Layout>
      </ThemeProvider>
    </UtilsContext.Provider>
  )
}

export default App
