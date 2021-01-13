import React from 'react'
import HamburgerIcon from './hamburger'
import Logo from './logo'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'logo':
      return <Logo />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
