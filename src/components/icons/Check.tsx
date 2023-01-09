/* eslint-disable max-len */
import {ReactElement} from "react"


interface Props {
  size?: number
  className?: string
}

export default function Check({size = 24, className}: Props): ReactElement {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m5.75 12.999 4 4 10-10" />
    </svg>
  )
}
