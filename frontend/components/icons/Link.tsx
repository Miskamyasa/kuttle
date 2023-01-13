/* eslint-disable max-len */
import {ReactElement} from "react"


interface Props {
  size?: number
  className?: string
}

export default function Link({size = 24, className}: Props): ReactElement {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.75 5.999h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4m-4-10h6m0 0v6m0-6-10 10" />
    </svg>
  )
}
