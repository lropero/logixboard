import React from 'react'
import styled from 'styled-components'

import avatar from 'logixboard/assets/avatar.png'

const Icon = styled.img`
  background: linear-gradient(${({ theme }) => theme.navbar.iconBackgroundFrom}, ${({ theme }) => theme.navbar.iconBackgroundTo});
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.navbar.iconBorder};
  cursor: pointer;
  height: 38px;
  left: calc(50% - 19px);
  position: absolute;
  top: calc(50% - 19px);
  width: 38px;
  z-index: 1;
`

const Ring = styled.div`
  background: blue;
  border-radius: 50%;
  height: 40px;
  position: relative;
  width: 40px;
  &:after {
    background: linear-gradient(${({ theme }) => theme.navbar.ringBackgroundFrom}, ${({ theme }) => theme.navbar.ringBackgroundTo});
    border-radius: 50%;
    bottom: -1px;
    content: ' ';
    left: -1px;
    position: absolute;
    right: -1px;
    top: -1px;
  }
`

const Avatar = () => <Ring><Icon src={avatar} /></Ring>

export default Avatar
