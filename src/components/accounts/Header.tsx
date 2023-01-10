import {ReactElement} from "react"

import {selectAccountsStore} from "../../store/accounts/selectors"
import {AccountId} from "../../store/accounts/types"
import {useAppSelector} from "../../store/createStore"
import Button from "../buttons/Button"

import Name from "./Name"


interface Props {
  accountId: AccountId
}

export default function Header({accountId}: Props): ReactElement {
  const store = useAppSelector(selectAccountsStore)

  return (
    <div className={"flex justify-between items-center"}>
      <Name text={store[accountId].account_name} />
      <Button
        text={"Add New Region"}
        variant={"primary"} />
    </div>
  )
}
