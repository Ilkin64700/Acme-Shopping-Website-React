import * as React from "react"

const RectangleSvg = ({rectanglestyle}) => (
  <svg
  className={rectanglestyle}
    xmlns="http://www.w3.org/2000/svg"
    width={124}
    height={194}
    fill="none"
  >
    <path stroke="#fff" strokeWidth={8} d="M4 4h116v186H4z" />
  </svg>
)

export default RectangleSvg
