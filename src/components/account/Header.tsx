import {ReactElement} from "react"

import Name from "./Name"


type _Props = {
  accountName: string,
}

export default function Header({accountName}: _Props): ReactElement {
  return (
    <div className={"p-10 bg-white"}>
      <Name text={accountName} />
    </div>
  )
}
