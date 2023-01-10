import {PropsWithChildren, ReactElement} from "react"

import {useAppSelector} from "../../store/createStore"
import {selectRegionsStore} from "../../store/regions/selectors"
import {RegionID} from "../../store/regions/types"

import EnvironmentRow from "./EnvironmentRow"


interface Props {
  id: RegionID
}

function Th({children}: PropsWithChildren): ReactElement {
  return (
    <th className={"p-3 border border-gray3 text-xs font-normal"}>{children}</th>
  )
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
        {Array.isArray(environments) && environments.map(item => (
          <EnvironmentRow
            data={item}
            key={item.full_name} />
        ))}
      </tbody>
    </table>
  )
}
