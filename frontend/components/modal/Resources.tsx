import {ReactElement} from "react"

import {getMonthlyCosts} from "../../helpers/getCosts"
import {useAppSelector} from "../../store/createStore"
import {selectEnvironmentsStore} from "../../store/environments/selectors"
import Table from "../table/Table"
import Td from "../table/Td"
import Th from "../table/Th"


interface Props {
  environmentId: string
}

export default function Resources({environmentId}: Props): ReactElement {
  const store = useAppSelector(selectEnvironmentsStore)

  const {resources} = store[environmentId]

  return (
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Nodes</Th>
          <Th>Instance type</Th>
          <Th>Costs</Th>
        </tr>
      </thead>
      <tbody>
        {resources?.map(resource => (
          <tr key={resource.type}>
            <Td sm>{resource.name}</Td>
            <Td sm>Unknown (Nodes)</Td>
            <Td sm>{resource.type}</Td>
            <Td sm>{resource.hourlyPrice ? getMonthlyCosts(resource.hourlyPrice) : "Unknown"}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
