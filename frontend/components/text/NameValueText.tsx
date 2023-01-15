import {ReactElement} from "react"


interface Props {
  name: string
  value: string
}

export default function NameValueText({name, value}: Props): ReactElement {
  return (
    <div className={"flex flex-row items-baseline"}>
      <div className={"text-xs text-gray1 mr-3"}>{name}:</div>
      <div className={"text-blueDark"}>{value}</div>
    </div>
  )
}
