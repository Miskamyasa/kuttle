import {Fragment, ReactElement} from "react"

import dayjs from "dayjs"


interface Props {
  name: string
  value: number
}

export default function NameValueDate({name, value}: Props): ReactElement {
  return (
    <Fragment>
      <div className={"flex flex-row items-baseline mb-1"}>
        <div className={"text-xs text-gray1 mr-3"}>{name}:</div>
        <div className={"text-blueDark"}>
          {dayjs(value * 1000).format("dd, MMMM D, YYYY")}
        </div>
      </div>
      <div className={"text-xs text-gray1"}>
        {dayjs(value * 1000).fromNow()}
      </div>
    </Fragment>
  )
}
