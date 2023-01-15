import {ReactElement, ReactNode} from "react"


interface Props {
  title: string
  children: ReactNode
}

export default function Card({title, children}: Props): ReactElement {
  return (
    <div className={"bg-white mb-10"}>
      <div className={"flex justify-center items-center h-10 border-b border-b-gray3"}>
        <div className={"font-bold"}>{title}</div>
      </div>
      <div className={"px-5 pt-5 pb-10"}>{children}</div>
    </div>
  )
}
