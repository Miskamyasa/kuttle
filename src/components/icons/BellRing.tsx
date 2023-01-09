/* eslint-disable max-len */
import {ReactElement} from "react"


interface Props {
  fill?: string
  ringing?: boolean
  size?: number
}

export default function BellRing({fill = "#000", size = 33, ringing}: Props): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 33 33">
      <path
        fill={fill}
        fillRule="evenodd"
        d="M16.5 6.462a7.975 7.975 0 0 0-7.975 7.975c0 4.616-.967 7.395-1.896 9h19.743c-.929-1.605-1.897-4.384-1.897-9A7.975 7.975 0 0 0 16.5 6.462Zm-3.817-1.24a9.975 9.975 0 0 1 13.792 9.215c0 4.333.907 6.753 1.628 7.999a2.001 2.001 0 0 1-1.724 3H6.622a2 2 0 0 1-1.725-3c.722-1.246 1.628-3.666 1.628-8a9.976 9.976 0 0 1 6.158-9.215Z"
        clipRule="evenodd" />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.5 24.436v1a4 4 0 1 0 8 0v-1" />
      {ringing && (
        <path
          fill={fill}
          fillRule="evenodd"
          d="M22.58 2.903a1 1 0 0 1 1.379-.312 14.125 14.125 0 0 1 5.112 5.663 1 1 0 1 1-1.792.89 12.124 12.124 0 0 0-4.388-4.862 1 1 0 0 1-.312-1.38ZM10.421 2.903a1 1 0 0 1-.312 1.38 12.125 12.125 0 0 0-4.388 4.86 1 1 0 1 1-1.791-.889 14.125 14.125 0 0 1 5.112-5.663 1 1 0 0 1 1.379.312Z"
          clipRule="evenodd" />
      )}
    </svg>
  )
}
