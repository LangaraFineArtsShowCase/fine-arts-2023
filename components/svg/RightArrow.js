import * as React from "react"

const RightArrow = (props) => (
  <svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.172 7.5 6.808 2.136 8.222.722 16 8.5l-7.778 7.778-1.414-1.414L12.172 9.5H0v-2h12.172Z"
      fill={props.fill || '#FFFFFF'}
    />
  </svg>
)

export default RightArrow
