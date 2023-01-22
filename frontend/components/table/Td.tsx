import {PropsWithChildren, ReactElement} from "react"


interface Props extends PropsWithChildren {
  sm?: boolean
}

export default function Td({children, sm = false}: Props): ReactElement {
  return (
    <td className={`p-3 border border-gray3 text-base ${sm ? "text-sm" : "text-base"}`}>
      {children}
    </td>
  )
}
