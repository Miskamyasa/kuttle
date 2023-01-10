import {ReactElement} from "react"

import {headerHeight, pageHeightClassName} from "../layout/helpers"


export default function Modal(): ReactElement {
  return (
    <div className={`fixed top-[${headerHeight}] right-0 bottom-0 left-0 w-screen ${pageHeightClassName}`}>
      <div className={"absolute right-0 top-0 bottom-0 h-full"}>
        XXXX
      </div>
    </div>
  )
}
