import {PropsWithChildren, ReactElement} from "react"


export default function Table({children}: PropsWithChildren): ReactElement {
  return (
    <table className={"min-w-full border border-gray3"}>
      {children}
    </table>
  )
}
