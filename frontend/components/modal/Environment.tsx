import {Fragment, ReactElement} from "react"

import {useSearchParams} from "react-router-dom"

import {useAppSelector} from "../../store/createStore"
import {selectEnvironmentsStore} from "../../store/environments/selectors"
import NameValueDate from "../text/NameValueDate"
import NameValueText from "../text/NameValueText"

import Card from "./card/Card"
import DeployMethod from "./card/DeployMethod"


export default function Environment(): ReactElement | null {
  const [searchParams] = useSearchParams()
  const store = useAppSelector(selectEnvironmentsStore)

  const id = searchParams.get("id")

  if (!id || !store[id]) {
    return null
  }
  
  const {full_name} = store[id]

  return (
    <Fragment>
      <div className={"p-10"}>
        <h4 className={"text-xl font-bold text-blueDark"}>{full_name}</h4>
        <div className={"mt-10 mb-5 flex flex-row flex-wrap"}>
          <NameValueDate
            wrapperClassName={"mr-[60px] mb-5"}
            name={"Created"}
            value={1667313845} />
          <NameValueDate
            wrapperClassName={"mr-[60px] mb-5"}
            name={"Updated"}
            value={1673473845} />
          <NameValueText
            wrapperClassName={"mr-[60px] mb-5"}
            name={"Version"}
            value={"v1.0"} />
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
    </Fragment>
  )
}
