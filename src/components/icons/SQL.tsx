/* eslint-disable max-len */
import {ReactElement} from "react"


interface Props {
  size?: number
  className?: string
}

export default function SQL({size = 24, className}: Props): ReactElement {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 25">
      <path d="M10.758.887C5.878.887.926 2.159.926 4.596v16.582c0 2.436 4.93 3.709 9.81 3.709 4.88 0 9.826-1.273 9.826-3.71V4.597c0-2.437-4.938-3.71-9.804-3.71Zm0 22.545c-5.41 0-8.378-1.454-8.378-2.254v-3.499c1.819 1.106 5.091 1.68 8.357 1.68 3.265 0 6.545-.574 8.349-1.672v3.49c.022.8-2.931 2.255-8.327 2.255Zm0-5.527c-5.41 0-8.356-1.455-8.356-2.255v-3.49c1.818 1.098 5.091 1.672 8.357 1.672 3.265 0 6.545-.574 8.349-1.673v3.491c0 .764-2.953 2.255-8.35 2.255Zm0-5.527c-5.41 0-8.356-1.455-8.356-2.255V6.625c1.818 1.105 5.091 1.68 8.357 1.68 3.265 0 6.545-.575 8.349-1.68v3.498c0 .764-2.953 2.255-8.35 2.255Zm0-5.528c-5.41 0-8.378-1.49-8.378-2.254S5.29 2.34 10.737 2.34c5.447 0 8.37 1.491 8.37 2.255 0 .763-2.952 2.254-8.348 2.254Z" />
    </svg>
  )
}
