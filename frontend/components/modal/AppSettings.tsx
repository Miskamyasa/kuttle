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

export default function AppSettings({environmentId}: Props): ReactElement {
  const store = useAppSelector(selectEnvironmentsStore)

  const {services, costs} = store[environmentId]

  return (
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>CPU + Memory</Th>
          <Th>Git repo</Th>
          <Th>Costs</Th>
        </tr>
      </thead>
      <tbody>
        {services?.map(service => (
          <tr key={service.name}>
            <Td sm>
              <div className={"flex items-baseline"}>
                <div className={"border border-green overflow-hidden rounded relative"}>
                  <div className={"z-2 text-xs px-1 py-0.5"}>v{service.version || "X.X.X"}</div>
                  <div className={"absolute w-100 h-100 z-1 top-0 right-0 bottom-0 left-0 bg-green opacity-10"}></div>
                </div>
                <div className={"ml-2"}>
                  {service.name}
                </div>
              </div>
            </Td>
            <Td sm>
              {`${service.cpu} vCPU + ${service.memory} Gb RAM`}
            </Td>
            <Td sm>{service.git_repo}</Td>
            <Td sm>{getMonthlyCosts(costs.hourly)}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
