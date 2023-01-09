import {ReactElement} from "react"

import Button from "../buttons/Button"

import AccountName from "./AccountName"


interface Props {
  accountName: string
}

export default function AccountHeader({accountName}: Props): ReactElement {
  return (
    <div className={"flex justify-between items-center"}>
      <AccountName text={accountName} />
      <Button
        text={"Add New Region"}
        variant={"primary"} />
    </div>
  )
}
