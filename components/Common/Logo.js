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
      <path d="M53 24H83L63 67H33L53 24Z" fill="black" />
      <path d="M51.568 109L70.6378 68H98.432L79.3622 109H51.568Z" fill="white" stroke="black" stroke-width="2" />
    </g>
    <defs>
      <clipPath id="clip0_5_2">
        <rect width="133" height="133" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default Logo
