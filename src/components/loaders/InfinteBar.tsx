import {ReactElement} from "react"


export default function InfiniteBar(): ReactElement {
  return (
    <div className={"w-full h-1 relative"}>
      <div
        className={(
          "absolute bg-kuttle-gradient top-0 right-full bottom-0 left-0 w-0 motion-safe:animate-infiniteBar"
        )} />
    </div>
  )
}
