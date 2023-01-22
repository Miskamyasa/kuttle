import {ReactElement} from "react"

import {useSearchParams} from "react-router-dom"

import {selectAccounts} from "../../store/accounts/selectors"
import {useAppSelector} from "../../store/createStore"
import {selectEnvironmentsStore} from "../../store/environments/selectors"
import Spinner from "../loaders/Spinner"
import NameValueDate from "../text/NameValueDate"
import NameValueText from "../text/NameValueText"

import Card from "./card/Card"
import DeployMethod from "./card/DeployMethod"


export default function Environment(): ReactElement | null {
  const [searchParams] = useSearchParams()
  const store = useAppSelector(selectEnvironmentsStore)

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
    return null
  }

  const {full_name, blueprint} = store[id]

  return (
    <div className={"p-10"}>
      <div className={"text-xl font-bold text-blueDark"}>{full_name}</div>
      <div className={"mt-10 mb-5 flex flex-row flex-wrap"}>
        <NameValueDate
          wrapperClassName={"mr-16 mb-5"}
          name={"Created"}
          value={1667313845} />
        <NameValueDate
          wrapperClassName={"mr-16 mb-5"}
          name={"Last Deploy"}
          value={1673473845} />
        <NameValueText
          wrapperClassName={"mr-16 mb-5"}
          name={"Version"}
          value={blueprint.version} />
      </div>
      <Card title={"Deploy method"}>
        <DeployMethod />
      </Card>
      <Card title={"App settings"}>
        <div>Content</div>
      </Card>
      <Card title={"Resources"}>
        <div>Content</div>
      </Card>
    </div>
  )
}
