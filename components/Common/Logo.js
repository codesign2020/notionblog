// https://react-svgr.com/playground/
import * as React from 'react'

const Logo = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='36'
    height='36'
    viewBox='0 0 100 100'
    style={{
      opacity: 1
    }}
    {...props}
  >
    <g clip-path="url(#clip0_5_2)">
    <path d="M9.3906 2.48499H16.5009L11.7607 12.6764H4.65039L9.3906 2.48499Z" fill="black"/>
    <path d="M9.0512 22.6309L13.5709 12.9135H20.1585L15.6387 22.6309H9.0512Z" fill="white" stroke="black" stroke-width="0.474021"/>
    </g>
  </svg>
)

export default Logo
