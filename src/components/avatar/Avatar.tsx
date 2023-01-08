import {ReactElement} from "react"


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
    <span className={"text-xs font-bold text-white"}>
      {name
        ?.split(" ")
        .map((p) => p.charAt(0).toUpperCase())
        .join("")}
    </span>
  )

  return (
    <div className={"bg-kuttle-gradient w-6 h-6 rounded-full overflow-hidden flex justify-center items-center"}>
      {children}
    </div>
  )
}
