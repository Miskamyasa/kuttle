import {ReactElement} from "react"

import {toast} from "react-hot-toast"
import {useSearchParams} from "react-router-dom"

import {selectAccounts, selectAccountsStore} from "../../store/accounts/selectors"
import {useAppSelector} from "../../store/createStore"
import {selectEnvironmentsStore} from "../../store/environments/selectors"
import {selectRegionsStore} from "../../store/regions/selectors"
import Spinner from "../loaders/Spinner"
import NameValueDate from "../text/NameValueDate"
import NameValueText from "../text/NameValueText"

import AppSettings from "./AppSettings"
import Card from "./Card"
import DeployMethod from "./DeployMethod"
import Resources from "./Resources"


export default function Environment(): ReactElement | null {
  const [searchParams] = useSearchParams()
  const store = useAppSelector(selectEnvironmentsStore)
  const accountsStore = useAppSelector(selectAccountsStore)
  const regionsStore = useAppSelector(selectRegionsStore)

  // FIXME: we need to replace it with normal logic, where modal reducer can set some loading state for itself
  const {loading} = useAppSelector(selectAccounts) // it makes rerender
  if (loading) {
    return (
      <div className={"h-full w-full flex justify-center items-center"}>
        <Spinner />
      </div>
    )
  }

  const id = searchParams.get("id")

  if (!id || !store[id]) {
    toast.error("Environment not found")
    return null
  }

  const {fullName, blueprint, regionId, accountId, lifetime} = store[id]

  return (
    <div className={"p-10"}>
      <div className={"text-xl text-blueDark"}>
        {accountsStore[accountId].accountName}
        &nbsp;&nbsp;/&nbsp;&nbsp;
        {regionsStore[regionId].region}
        &nbsp;&nbsp;/&nbsp;&nbsp;
        <span className={"font-bold "}>{fullName}</span>
      </div>
      <div className={"mt-10 mb-5 flex flex-row flex-wrap"}>
        <NameValueDate
          wrapperClassName={"mr-16 mb-5"}
          name={"Created"}
          value={lifetime.createdAt} />
        <NameValueDate
          wrapperClassName={"mr-16 mb-5"}
          name={"Destroy after"}
          value={lifetime.destroyAfter} />
        <NameValueText
          wrapperClassName={"mr-16 mb-5"}
          name={"Version"}
          value={blueprint.version || "Unknown"} />
      </div>
      <Card title={"Deploy method"}>
        <DeployMethod />
      </Card>
      <Card title={"App settings"}>
        <AppSettings environmentId={id} />
      </Card>
      <Card title={"Resources"}>
        <Resources environmentId={id} />
      </Card>
    </div>
  )
}
