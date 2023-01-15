import {ReactElement} from "react"

import NameValueDate from "./NameValueDate"
import NameValueText from "./NameValueText"


interface Props {
  name: string
  value: string | number
  type: "date" | "text"
  wrapperClassName?: string
}

export default function NameValuePair({name, value, type, wrapperClassName}: Props): ReactElement | null {
  switch (type) {
    case "date":
      return (
        <NameValueDate
          wrapperClassName={wrapperClassName}
          name={name}
          value={value as number} />
      )
    case "text":
      return (
        <NameValueText
          wrapperClassName={wrapperClassName}
          name={name}
          value={value as string} />
      )
    default:
      return null
  }
}
