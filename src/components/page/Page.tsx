import {FC, PropsWithChildren} from "react"


const Page: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={"p-10"}>
      {children}
    </div>
  )
}

export default Page
