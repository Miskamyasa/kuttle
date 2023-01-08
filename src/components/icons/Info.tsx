import {ReactElement} from "react"


interface Props {
  fill?: string
  size?: number
}

export default function Info({fill = "#000", size = 33}: Props): ReactElement {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 33 33">
      <path
        fill={fill}
        fillRule="evenodd"
        d="M16.5 5.437c-6.075 0-11 4.924-11 11 0 6.075 4.925 11 11 11s11-4.925 11-11c0-6.076-4.925-11-11-11Zm-13
        11c0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13-13-5.82-13-13Z"
        clipRule="evenodd" />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M14.5 15.437a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1v-6a1 1 0 0 1-1-1Z"
        clipRule="evenodd" />
      <path
        fill={fill}
        d="M16.25 12.437a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  )
}
