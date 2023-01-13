import {PropsWithChildren, ReactElement} from "react"


export default function Th({children}: PropsWithChildren): ReactElement {
  return (
    <th className={"p-3 border border-gray3 text-xs font-normal"}>{children}</th>
  )
}
