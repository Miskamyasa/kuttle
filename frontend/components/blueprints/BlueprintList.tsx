import React, {Fragment, ReactElement} from "react"

import {selectBlueprintsIds} from "../../store/blueprints/selectors"
import {useAppSelector} from "../../store/createStore"


export default function BlueprintList(): ReactElement {
  const ids = useAppSelector(selectBlueprintsIds)

  return (
    <Fragment>
      {ids.map(id => (
        <div key={id}>
          {id}
        </div>
      ))}
      <h1 className={"text-2xl font-bold"}>Blueprints</h1>
    </Fragment>
  )
}
