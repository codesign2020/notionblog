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
    <g clip-path="url(#clip0_5_2)">
<path d="M49.2687 11H88.6716L62.403 67.4776H23L49.2687 11Z" fill="black"/>
<path d="M47.3878 122.642L72.4347 68.791H108.941L83.8937 122.642H47.3878Z" stroke="black" stroke-width="2.62687"/>
</g>
<defs>
<clipPath id="clip0_5_2">
<rect width="133" height="133" fill="white"/>
</clipPath>
</defs>
  </svg>
)

export default Logo
