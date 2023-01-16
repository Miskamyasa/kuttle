/* eslint-disable max-len */
import {ReactElement} from "react"


interface Props {
  width?: number
  height?: number
  stroke?: string
  className?: string
}

const iconSize = {
  width: 16,
  height: 9,
  ratio: 16 / 9,
}

export default function ChevronDown({width, height, stroke = "#02163D", className}: Props): ReactElement {
  let w = iconSize.width
  let h = iconSize.height

  if (width && !height) {
    w = width
    h = width / iconSize.ratio
  } else if (!width && height) {
    w = height * iconSize.ratio
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
        stroke={stroke}
        d="M15 1L8 8L1 1" />
    </svg>
  )
}
