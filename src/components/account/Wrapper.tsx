import {PropsWithChildren, ReactElement} from "react"


export default function Wrapper({children}: PropsWithChildren): ReactElement {
  return (
    <div className={"p-10 bg-white"}>
      {children}
    </div>
  )
}
