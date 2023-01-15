import {ReactElement} from "react"

import NameValueDate from "./NameValueDate"
import NameValueText from "./NameValueText"


interface Props {
  name: string
  value: string | number
  type: "date" | "text"
}

export default function NameValuePair({name, value, type}: Props): ReactElement | null {
  switch (type) {
    case "date":
      return (
        <NameValueDate
          name={name}
          value={value as number} />
      )
    case "text":
      return (
        <NameValueText
          name={name}
          value={value as string} />
      )
    default:
      return null
  }
}
