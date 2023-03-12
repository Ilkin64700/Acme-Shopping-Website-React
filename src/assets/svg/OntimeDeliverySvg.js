import * as React from "react"

const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 24 24"
    fill="none"
    aria-labelledby="transportIconTitle"
    stroke="#eb5757"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    color="#eb5757"
  >
    <title>{"Transport"}</title>
    <path d="M4 17H2V7h13v10H8M20 17h2v-4.444L20 9h-5v8h1" />
    <circle cx={6} cy={17} r={2} />
    <circle cx={18} cy={17} r={2} />
  </svg>
)

export default SvgComponent
