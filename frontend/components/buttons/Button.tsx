import {PropsWithChildren, ReactElement, useMemo} from "react"


interface Props extends PropsWithChildren {
  text: string
  variant?: "primary" | "secondary" | "accent"
  size?: "sm" | "md"
}

export default function Button({text, children, variant = "primary", size = "md"}: Props): ReactElement {
  const className = useMemo(() => {
    let className = "border overflow-hidden whitespace-nowrap text-ellipsis text-base h-11 px-1"
    switch (variant) {
      case "primary":
        className += " border-gray1 text-gray1"
        break
      case "secondary":
        className += " border-pink text-pink"
        break
      case "accent":
        className += " border-transparent text-white bg-kuttle-gradient font-bold"
        break
    }
    switch (size) {
      case "sm":
        className += " border-transparent text-white w-24"
        break
      case "md":
        className += " border-gray1 text-gray1 w-40"
        break
    }
    return className
  }, [size, variant])


  return (
    <button className={className}>
      {text || children}
    </button>
  )
}
