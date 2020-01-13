import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useLocalStore } from 'mobx-react-lite'

import config from 'logixboard/config'
import theme from 'logixboard/theme'
import { Dashboard, Navbar } from 'logixboard/components'
import { Utils as UtilsContext } from 'logixboard/contexts'
import { useWindowDimensions } from 'logixboard/hooks'

import 'antd/dist/antd.css'

const CustomStyle = createGlobalStyle`
  .ant-menu-horizontal {
    border-bottom: none !important;
  }
  .ant-menu-item {
    border-bottom: none !important;
    color: ${theme.navbar.menuItem} !important;
  }
  .ant-menu-item-active {
    border-bottom: none !important;
    color: ${theme.navbar.menuItemActive} !important;
  }
  .ant-menu-item-selected {
    border-bottom: none !important;
    color: ${theme.navbar.menuItemSelected} !important;
  }
  .ant-table-arrival {
    width: 120px;
  }
  .ant-table-id {
    width: 120px;
  }
  .ant-table-mode {
    width: 60px;
  }
  .ant-table-status {
    width: 120px;
  }
`

const App = () => {
  const { height, width } = useWindowDimensions()

  const utils = useLocalStore(() => ({
    config,
    dimensions: {},
    updateDimensions ({ height, width }) {
      this.dimensions.height = height
      this.dimensions.width = width
    }
  }))

  useEffect(() => {
    utils.updateDimensions({ height, width })
  }, [height, width])

  return (
    <UtilsContext.Provider value={utils}>
      <ThemeProvider theme={theme}>
        <CustomStyle />
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
