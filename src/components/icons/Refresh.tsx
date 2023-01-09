/* eslint-disable max-len */
import {ReactElement} from "react"


interface Props {
  size?: number
  className?: string
}

export default function Refresh({size = 24, className}: Props): ReactElement {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.234 4.193v5h.582m15.357 2a8.001 8.001 0 0 0-15.357-2m0 0h4.418m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2h-4.419" />
    </svg>
  )
}
