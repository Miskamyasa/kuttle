import {ReactElement} from "react"

import {useAppSelector} from "../../store/createStore"
import {selectRegionsStore} from "../../store/regions/selectors"
import {RegionId} from "../../store/regions/types"

import EnvironmentRow from "./EnvironmentRow"
import Th from "./Th"


interface Props {
  id: RegionId
}

export default function RegionTable({id}: Props): ReactElement {
  const store = useAppSelector(selectRegionsStore)
  const {region = "Unknown", environments} = store[id]

  return (
    <table className={"min-w-full border border-gray3"}>
      <thead>
        <tr>
          <th
            className={"p-3 text-xl text-left"}
            colSpan={11}>
            {region}
          </th>
        </tr>
        <tr>
          <Th>Name</Th>
          <Th>Blueprint</Th>
          <Th>Version</Th>
          <Th>Services</Th>
          <Th>Resources</Th>
          <Th>Lifetime</Th>
          <Th>Tests</Th>
          <Th>Owner</Th>
          <Th>Cost</Th>
          <Th>Links</Th>
          <Th>Logs</Th>
        </tr>
      </thead>
      <tbody>
        {environments.map((envId) => (
          <EnvironmentRow
            id={envId}
            key={envId} />
        ))}
      </tbody>
    </table>
  )
}
