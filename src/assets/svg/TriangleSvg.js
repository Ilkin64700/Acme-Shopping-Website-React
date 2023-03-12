import * as React from "react"

const TriangleSvg = ({trianglestyle}) => (
  <svg
  className={trianglestyle}
    xmlns="http://www.w3.org/2000/svg"
    width={160}
    height={139}
    fill="none"
  >
    <path
      d="M160 138.712H0L79.657 0 160 138.712Zm-15.794-9.613L79.656 18.541 15.795 129.099h128.412Z"
      fill="#fff"
    />
  </svg>
)

export default TriangleSvg
