// https://react-svgr.com/playground/
import * as React from 'react'

const Logo = (props) => (
     <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 100 100'
    style={{
      opacity: 1
    }}
    {...props}
  >
    <g>
    <path d="M9.3906 2.48499H16.5009L11.7607 12.6764H4.65039L9.3906 2.48499Z" fill="black"/>
    <path d="M13.4198 12.6765H20.5301L15.7899 22.8679H8.67957L13.4198 12.6765Z" fill="black"/>
    </g>
  </svg>

 
)

export default Logo
