import {ReactElement, useMemo} from "react"


interface Props {
  name: string
  value: string | number
  wrapperClassName?: string
}

export default function NameValueText({name, value, wrapperClassName}: Props): ReactElement {
  const rootClassName =  useMemo(() => {
    let className = "flex flex-row items-baseline "
    if (wrapperClassName) {
      className += wrapperClassName
    }
    return className
  }, [wrapperClassName])

  return (
    <div className={rootClassName}>
      <div className={"text-xs text-gray1 mr-3"}>{name}:</div>
      <div className={"text-blueDark"}>{value}</div>
    </div>
  )
}
