import {ReactElement} from "react"


type _Props = {
  text: string,
}

export default function Name({text}: _Props): ReactElement {
  return (
    <div className={"text-4xl text-blueDark font-bold"}>
      {text}
    </div>
  )
}
