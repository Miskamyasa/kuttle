import {PropsWithChildren, ReactElement} from "react"

import InfiniteBar from "../loaders/InfinteBar"


type _Props = PropsWithChildren & {
  loading?: boolean,
}

export default function Page({children, loading = false}: _Props): ReactElement {
  return (
    <div className={"relative"}>
      <div className={"absolute left-0 top-0 h-1 w-full"}>
        {loading && <InfiniteBar />}
      </div>
      <div className={"p-10"}>
        {children}
      </div>
    </div>
  )
}
