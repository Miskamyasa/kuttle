import {PropsWithChildren, ReactElement} from "react"


export default function Td({children}: PropsWithChildren): ReactElement {
  return (
    <td className={"p-3 border border-gray3 text-base"}>{children}</td>
  )
}
