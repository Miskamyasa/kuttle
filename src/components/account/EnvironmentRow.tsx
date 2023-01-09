import {Fragment, PropsWithChildren, ReactElement} from "react"

import dayjs from "dayjs"

import {Cicd, Environment, Owners, Resource} from "../../store/dto"
import Bucket from "../icons/Bucket"
import Cache from "../icons/Cache"
import Grafana from "../icons/Grafana"
import Link from "../icons/Link"
import NoSQL from "../icons/NoSQL"
import SQL from "../icons/SQL"


function Td({children}: PropsWithChildren): ReactElement {
  return (
    <td className={"p-3 border border-gray3 text-base"}>{children}</td>
  )
}

function getColor(state: Resource["status"] | Cicd["status"]): string {
  switch (state) {
    case "healthy":
    case "done":
      return "green"
    case "fail":
    case "outage":
      return "red"
    case "degraded":
    case "inflight":
      return "yellow"
    default:
      return "gray2"
  }
}

function getResourceIconElement(resource: Resource): ReactElement | null {
  const className = `fill-${getColor(resource.status)}`
  switch (resource.type) {
    case "sql":
      return <SQL className={className} />
    case "nosql":
      return <NoSQL className={className} />
    case "cache":
      return <Cache className={className} />
    case "object":
      return <Bucket className={className} />
    default:
      return null
  }
}

function getOwnerName(owner: Owners): string {
  const [fname, sname] = owner.name.split(" ")
  return fname.charAt(0).toUpperCase() + sname.charAt(0).toUpperCase()
}

interface Props {
  data: Environment
}


export default function EnvironmentRow({data}: Props): ReactElement {
  return (
    <tr>
      <Td>
        <div className={"flex flex-col"}>
          <div>{data.name}</div>
          <div className={"text-gray2 text-xs mt-0.5"}>{data.full_name}</div>
        </div>
      </Td>
      <Td>
        <div>{data.blueprint.name}</div>
      </Td>
      <Td>
        <div className={"text-center"}>{data.blueprint.version}</div>
      </Td>
      <Td>
        <div className={"flex items-center"}>
          <div>{data.services?.length}</div>
          {data.services?.map(item => (
            <div
              key={item.name}
              className={`mx-2 w-[15px] h-[15px] rounded-full bg-${getColor(item.cicd.status)}`} />
          ))}
        </div>
      </Td>
      <Td>
        <div className={"flex items-center justify-start"}>
          {data.resources?.map(item => (
            <div
              key={item.name}
              className={"flex items-center justify-center mr-4"}>
              {getResourceIconElement(item)}
            </div>
          ))}
        </div>
      </Td>
      <Td>
        <div className={"text-center"}>
          <div className={"text-xs"}>{dayjs(data.lifetime.created * 1000).fromNow()}</div>
        </div>
      </Td>
      <Td>Test</Td>
      <Td>
        <div className={"rounded-full bg-blueDark text-white text-xs m-auto w-6 h-6 flex justify-center items-center"}>
          {getOwnerName(data.owners)}
        </div>
      </Td>
      <Td>
        <div className={"flex flex-col text-xs"}>
          {data.costs.hourly ? (
            <Fragment>
              <div>${(data.costs.hourly) * 24} / day</div>
              <div className={"text-gray2"}>${(data.costs.hourly) * 24 * 30} / day</div>
            </Fragment>
          ) : "Unknown"}
        </div>
      </Td>
      <Td>
        {Array.isArray(data.links) && data.links[0].url ? (
          <a
            className={"flex justify-center items-center"}
            href={data.links[0].url}
            target={"_blank"}
            rel="noreferrer">
            <Link className={"stroke-blueDark"} />
          </a>
        ) : null}
      </Td>
      <Td>
        <div className={"flex justify-center items-center"}>
          <Grafana  />
        </div>
      </Td>
    </tr>
  )
}
