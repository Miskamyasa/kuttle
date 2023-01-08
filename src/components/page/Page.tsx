import {PropsWithChildren, ReactElement} from "react"

import {Loadable} from "../../helpers/types"
import InfiniteBar from "../loaders/InfinteBar"


interface Props extends Loadable, PropsWithChildren {}

export default function Page({children, loading = false}: Props): ReactElement {
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
