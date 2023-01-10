import {ReactElement} from "react"

import {useSearchParams} from "react-router-dom"

import {useAppSelector} from "../../store/createStore"
import {selectEnvironmentsStore} from "../../store/environments/selectors"


export default function Environment(): ReactElement {
  const [searchParams] = useSearchParams()
  const store = useAppSelector(selectEnvironmentsStore)

  const id = searchParams.get("id")

  if (id) {
    // eslint-disable-next-line no-console
    console.log({
      id,
      store,
      env: store[id],
    })
  }

  return (
    <div className={"m-3"}>
      Environment
    </div>
  )
}
