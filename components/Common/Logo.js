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
    <defs>
        <linearGradient x1="41.6426121%" y1="33.9789712%" x2="66.8737926%" y2="78.5906929%" id="linearGradient-1">
            <stop stop-color="#000000" offset="0%"></stop>
            <stop stop-color="#6B6B6B" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="41.0902087%" y1="32.7458711%" x2="66.8737926%" y2="79.02194%" id="linearGradient-2">
            <stop stop-color="#FB3E3E" offset="0%"></stop>
            <stop stop-color="#B61010" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="logo备份" transform="translate(40.426000, 40.172000)">
           
            <g id="编组" transform="translate(0.000000, 0.000005)">
                <polygon id="2" fill="url(#linearGradient-1)" transform="translate(18.392797, 30.652792) scale(-1, -1) translate(-18.392797, -30.652792) " points="18.3932458 20.6495935 31.6222235 20.6495935 18.3932458 40.6543826 5.16426812 40.6543826"></polygon>
                <polygon id="1" fill="url(#linearGradient-2)" points="13.5516229 2.84217094e-14 27.1032832 2.84217094e-14 13.5516229 20.650117 0 20.650117"></polygon>
            </g>
        </g>
    </g>
  </svg>
)

export default Logo
