import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon, Menu } from 'antd'

import logo from 'logixboard/assets/logo.png'
import { Avatar } from 'logixboard/components'

const Bar = styled.div`
  background-color: ${({ theme }) => theme.navbar.background};
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  height: 64px;
  justify-content: space-between;
  position:relative;
  z-index: 1;
`

const Bell = styled.div`
  color: ${({ theme }) => theme.navbar.menuItem};
  cursor: pointer;
  display: flex;
  font-size: 1.3em;
  margin-right: 20px;
`

const Logo = styled.img`
  align-self: center;
  height: 18px;
  margin: 0 30px;
`

const Nav = styled.div`
  align-self: center;
  flex: 3;
`

const Settings = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin: 0 30px;
`

const Navbar = () => {
  const [current, setCurrent] = useState('shipments')

  const handleClick = (event) => {
    setCurrent(event.key)
  }

  return (
    <Bar>
      <Logo src={logo} />
      <Nav>
        <Menu mode='horizontal' onClick={handleClick} selectedKeys={[current]} style={{ lineHeight: '62px' }}>
          <Menu.Item key='shipments'>
            <Icon type='appstore' />Shipments
          </Menu.Item>
          <Menu.Item key='analytics'>
            <Icon type='line-chart' />Analytics
          </Menu.Item>
        </Menu>
      </Nav>
      <Settings><Bell><Icon type='bell' /></Bell><Avatar /></Settings>
    </Bar>
  )
}

export default Navbar
