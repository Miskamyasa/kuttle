import {Fragment, ReactElement} from "react"

import dayjs from "dayjs"
import {Link} from "react-router-dom"

import getAvatarColor from "../../helpers/getAvatarColor"
import {getDailyCosts, getMonthlyCosts} from "../../helpers/getCosts"
import getNameChars from "../../helpers/getNameChars"
import getTimeDiffInPercent from "../../helpers/getTimeDiffInPercent"
import {useAppSelector} from "../../store/createStore"
import {Cicd, Resource, Test} from "../../store/dto"
import {selectEnvironmentsStore} from "../../store/environments/selectors"
import {EnvironmentId} from "../../store/environments/types"
import Bucket from "../icons/Bucket"
import Cache from "../icons/Cache"
import Grafana from "../icons/Grafana"
import LinkIcon from "../icons/Link"
import NoSQL from "../icons/NoSQL"
import SQL from "../icons/SQL"
import TestFail from "../icons/TestFail"
import TestOk from "../icons/TestOk"
import TestRunning from "../icons/TestRunning"
import TestWarning from "../icons/TestWarning"
import Td from "../table/Td"


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

function getTestIconElement(test: Test): ReactElement | null {
  switch (test.status) {
    case "success":
      return <TestOk />
    case "fail":
      return <TestFail />
    case "unknown":
      return <TestWarning />
    case "running":
      return <TestRunning />
    default:
      return null
  }
}

interface Props {
  id: EnvironmentId
}


export default function EnvironmentRow({id}: Props): ReactElement {
  const store = useAppSelector(selectEnvironmentsStore)
  const data = store[id]

  if (!data) {
    return (
      <tr>
        <td colSpan={11}>Empty</td>
      </tr>
    )
  }

  return (
    <tr>
      <Td>
        <Link
          to={"?modal=environment&id=" + data.full_name}
          className={"flex flex-col"}>
          <div>{data.name}</div>
          <div className={"text-gray2 text-xs mt-0.5"}>{data.full_name}</div>
        </Link>
      </Td>
      <Td>
        <div>{data.blueprint.name}</div>
      </Td>
      <Td>
        <div className={"text-center"}>{Number(data.blueprint.version).toFixed(1)}</div>
      </Td>
      <Td>
        {data.services && (
          <div className={"flex items-center"}>
            <div className={"mr-2"}>{data.services.length}</div>
            {data.services.map((item) => (
              <div
                key={item.name}
                title={item.name}
                className={`ml-2 w-[15px] h-[15px] rounded-full bg-${getColor(item.cicd.status)}`} />
            ))}
          </div>
        )}
      </Td>
      <Td>
        {data.resources && (
          <div className={"flex items-center justify-start"}>
            {data.resources.map((item) => (
              <div
                key={item.name}
                className={"flex items-center justify-center mr-3 last:mr-0"}
                title={item.name}>
                {getResourceIconElement(item)}
              </div>
            ))}
          </div>
        )}
      </Td>
      <Td>
        <div className={"text-center"}>
          <div className={"text-xs mb-2"}>
            {dayjs.unix(data.lifetime.created).fromNow()}
          </div>
          {getTimeDiffInPercent(data.lifetime.created, data.lifetime.destroy) > 0 ? (
            <div className={"h-1 w-full rounded-xl bg-kuttle-gradient relative"}>
              <div
                className={"h-1 bg-white absolute right-0 top-0 bottom-0"}
                style={{width: `${100 - getTimeDiffInPercent(data.lifetime.created, data.lifetime.destroy)}%`}} />
            </div>
          ) : (
            <div className={"h-1 w-full rounded-xl bg-gray3"} />
          )}
        </div>
      </Td>
      <Td>
        <div className={"flex"}>
          {data.tests?.map(item => (
            <div
              className={"flex justify-center items-center mr-3 last:mr-0"}
              key={item.name}
              title={item.name || "Unknown"}>
              {getTestIconElement(item)}
            </div>
          ))}
        </div>
      </Td>
      <Td>
        <div
          className={"rounded-full text-white text-xs m-auto w-6 h-6 flex justify-center items-center"}
          style={{backgroundColor: getAvatarColor(data.owners.name)}}>
          {getNameChars(data.owners.name)}
        </div>
      </Td>
      <Td>
        <div className={"flex flex-col text-xs"}>
          {data.costs.hourly ? (
            <Fragment>
              <div>
                {getDailyCosts(data.costs.hourly)}
              </div>
              <div className={"text-gray2"}>
                {getMonthlyCosts(data.costs.hourly)}
              </div>
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
            <LinkIcon className={"stroke-blueDark"} />
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
