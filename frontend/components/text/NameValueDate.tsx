import {ReactElement} from "react"

import dayjs from "dayjs"


interface Props {
  name: string
  value: Date
  wrapperClassName?: string
}

export default function NameValueDate({name, value, wrapperClassName}: Props): ReactElement {
  return (
    <div className={wrapperClassName}>
      <div className={"flex flex-row items-baseline mb-1"}>
        <div className={"text-xs text-gray1 mr-3"}>{name}:</div>
        <div className={"text-blueDark"}>
          {new Date(value).toDateString()}
        </div>
      </div>
      <div className={"text-xs text-gray1"}>
        {dayjs(value).fromNow()}
      </div>
    </div>
  )
}
