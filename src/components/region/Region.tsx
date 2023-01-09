import {ReactElement} from "react"

import {RegionID} from "../../store/regions/types"


interface Props {
  id: RegionID
}

export default function Region({id}: Props): ReactElement {
  console.log({
    id,
  })
  return (
    <div className={"bg-red-200"}>
      ...
    </div>
  )
}
