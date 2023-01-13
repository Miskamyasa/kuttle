/* eslint-disable max-len */
import {ReactElement} from "react"


interface Props {
  size?: number
  className?: string
}

export default function Cache({size = 24, className}: Props): ReactElement {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 25">
      <path
        fillRule="evenodd"
        d="M8.151 10.246a.545.545 0 0 1 .486-.297h4.432a.545.545 0 0 1 .52.71l-.723 2.286h1.67a.546.546 0 0 1 .395.922L7.136 22.03a.545.545 0 0 1-.915-.54l2.01-6.445H6.588a.545.545 0 0 1-.485-.794l2.048-4.005Zm.82.794L7.48 13.954h1.493a.545.545 0 0 1 .52.708l-1.537 4.93 5.306-5.556h-1.14a.545.545 0 0 1-.52-.71l.723-2.286H8.97Z"
        clipRule="evenodd" />
      <path
        fillRule="evenodd"
        d="M10.577.887C5.697.887.744 2.159.744 4.596v16.582c0 2.436 4.931 3.709 9.811 3.709s9.826-1.273 9.826-3.71V4.597c0-2.437-4.939-3.71-9.804-3.71ZM2.199 4.596c0 .763 2.967 2.254 8.378 2.254 5.396 0 8.349-1.49 8.349-2.254s-2.924-2.255-8.37-2.255c-5.448 0-8.357 1.491-8.357 2.255Zm.022 7.563v8.872c0 .8 2.945 2.255 8.356 2.255 5.128 0 8.05-1.347 8.327-2.136a.356.356 0 0 0 .022-.119V6.625c-1.804 1.105-5.084 1.68-8.35 1.68-3.265 0-6.537-.575-8.356-1.68v5.534Z"
        clipRule="evenodd" />
    </svg>
  )
}
