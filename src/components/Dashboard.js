import React from 'react'
import styled from 'styled-components'

import { List, Map } from 'logixboard/components'

const Footer = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
`

const Dashboard = () => {
  return (
    <>
      <Map />
      <Footer>
        <List />
      </Footer>
    </>
  )
}

export default Dashboard
