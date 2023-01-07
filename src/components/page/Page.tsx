import {PropsWithChildren, ReactElement} from "react"


export default function Page({children}: PropsWithChildren): ReactElement {
  return (
    <div className={"p-10"}>
      {children}
    </div>
  )
}
