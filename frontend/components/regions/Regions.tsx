import {Fragment, ReactElement} from "react"

import {selectAccountsStore} from "../../store/accounts/selectors"
import {AccountId} from "../../store/accounts/types"
import {useAppSelector} from "../../store/createStore"

import RegionTable from "./RegionTable"


interface Props {
  accountId: AccountId
}

export default function Regions({accountId}: Props): ReactElement {
  const store = useAppSelector(selectAccountsStore)

  const {regions} = store[accountId]

  if (!regions || regions.length < 1) {
    return (
      <div className={"mt-10"}>Empty</div>
    )
  }

  return (
    <Fragment>
      {regions.map((regionId) => (
        <div
          key={regionId}
          className={"mt-10"}>
          <RegionTable id={regionId} />
        </div>
      ))}
    </Fragment>
  )
}
