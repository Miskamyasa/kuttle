import {ReactElement} from "react"


interface Props {
  text: string
}

export default function Name({text}: Props): ReactElement {
  return (
    <div className={"text-4xl text-blueDark font-bold"}>
      {text}
    </div>
  )
}
