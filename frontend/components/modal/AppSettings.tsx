import {ReactElement} from "react"

import {getMonthlyCosts} from "../../helpers/getCosts"
import getHardware from "../../helpers/getHardware"
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

  const {services, hourlyPrice} = store[environmentId]

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
              <div className={"ml-2"}>
                {service.name}
              </div>
            </Td>
            <Td sm>
              {getHardware(service)}
            </Td>
            <Td sm>
              <a
                className={"text-blue1"}
                href={service.gitRepo}>
                {service.gitRepo}
              </a>
            </Td>
            <Td sm>{hourlyPrice ? getMonthlyCosts(service.hourlyPrice) : "Unknown"}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
