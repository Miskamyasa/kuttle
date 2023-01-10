import {Fragment, ReactElement, ReactNode, useEffect, useState} from "react"

import {useSearchParams} from "react-router-dom"

import {useAppSelector} from "../../store/createStore"
import {headerHeight, pageHeightClassName} from "../layout/helpers"

import Environment from "./Environment"


export default function Modal(): ReactElement {
  const [
    searchParams,
    // setSearchParams
  ] = useSearchParams()

  const [content, setContent] = useState<null | ReactNode>()

  const ready = useAppSelector(state => state.common.ready)

  const modalShow = searchParams.get("modal")

  useEffect(() => {
    if (modalShow) {
      switch (modalShow) {
        case "environment":
          setContent(<Environment />)
      }
    }

  }, [modalShow])

  // eslint-disable-next-line no-console
  console.log({
    modal: searchParams.get("modal"),
    id: searchParams.get("id"),
  })


  return (
    <Fragment>
      {content && ready ? (
        <div className={`fixed top-[${headerHeight}] right-0 bottom-0 left-0 w-screen ${pageHeightClassName} z=9999`}>
          <div className={"absolute right-0 top-0 bottom-0 h-full w-[800px] z-10000"}>
            {content}
          </div>
        </div>
      ) : null}
    </Fragment>
  )
}
