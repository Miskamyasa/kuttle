import {ReactElement} from "react"

import getNameChars from "../../helpers/getNameChars"


interface Props {
  name?: string
  imgSrc?: string
}

export default function Avatar({name, imgSrc}: Props): ReactElement {
  const children = imgSrc ? (
    <img
      className={"h-6 w-6"}
      src={imgSrc}
      alt={name || "Avatar"} />
  ) : (
    <div className={"text-xs font-bold text-white"}>
      {getNameChars(name)}
    </div>
  )

  return (
    <div className={"bg-kuttle-gradient w-6 h-6 rounded-full overflow-hidden flex justify-center items-center"}>
      {children}
    </div>
  )
}
