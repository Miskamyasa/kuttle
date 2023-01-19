/* eslint-disable max-len */
import {ReactElement} from "react"


export default function TestWarning(): ReactElement {
  return (
    <svg
      width={26}
      height={26}
      className={"stroke-yellow"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 26 27">
      <path
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M13 25.5c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7.5v7" />
      <path
        className={"fill-yellow"}
        strokeWidth=".125"
        d="M14.438 19a1.438 1.438 0 1 1-2.876 0 1.438 1.438 0 0 1 2.876 0Z" />
    </svg>

  )
}
