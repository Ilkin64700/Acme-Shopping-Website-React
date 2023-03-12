import * as React from "react"

const CircleSvg = ({circlestyle}) => (
  <svg
  className={circlestyle}
    xmlns="http://www.w3.org/2000/svg"
    width={166}
    height={166}
    fill="none"
  >
    <path
      d="M83 166a83 83 0 1 1 83-83 83.091 83.091 0 0 1-83 83ZM83 7.985A75.015 75.015 0 1 0 158.014 83 75.103 75.103 0 0 0 82.999 7.985Z"
      fill="#fff"
    />
  </svg>
)

export default CircleSvg
