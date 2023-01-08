import {ReactElement} from "react"

import Button from "../buttons/Button"

import Name from "./Name"


interface Props {
  accountName: string
}

export default function Header({accountName}: Props): ReactElement {
  return (
    <div className={"flex justify-between items-center"}>
      <Name text={accountName} />
      <Button
        text={"Add New Region"}
        variant={"primary"} />
    </div>
  )
}
