import React from 'react'

const strokeStyle = { vectorEffect: 'non-scaling-stroke' }

const HamburgerIcon = () => (
  <svg
    viewBox='0 0 10 8'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    width='1em'
    height='1em'
  >
    <path
      d='M1 1h8M1 4h 8M1 7h8' 
      stroke='#fad74b' 
      stroke-width='3'
      stroke-linecap='round'
      style={strokeStyle}
    />
  </svg>
)

export default HamburgerIcon
