/* eslint-disable max-len */
import {ReactElement} from "react"


interface Props {
  width?: number
  height?: number
  fill?: string
  className?: string
}

export default function ChevronDown({width, height, fill = "#02163D", className}: Props): ReactElement {
  const ratio = 16 / 9
  let w = 16
  let h = 9

  if (width && !height) {
    w = width
    h = width / ratio
  } else if (!width && height) {
    w = height * ratio
    h = height
  } else if (width && height) {
    w = width
    h = height
  }

  return (
    <svg
      className={className}
      width={w}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 9"
      fill="none">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        stroke={fill}
        d="M15 1L8 8L1 1" />
    </svg>
  )
}
