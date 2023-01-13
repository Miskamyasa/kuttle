import {Fragment, ReactElement, ReactNode, useCallback, useEffect, useState} from "react"

import {useSearchParams} from "react-router-dom"


import Environment from "./Environment"


export default function Modal(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams()

  const [content, setContent] = useState<null | ReactNode>()

  const ready = true // useAppSelector(state => state.common.ready)

  const modalShow = searchParams.get("modal")

  useEffect(() => {
    if (modalShow) {
      switch (modalShow) {
        case "environment":
          setContent(<Environment />)
      }
      return
    }
    setContent(null)
  }, [modalShow])

  const dismiss = useCallback(() => {
    if (modalShow) {
      searchParams.delete("modal")
      searchParams.delete("id")
      setSearchParams(searchParams)
    }
  }, [modalShow, searchParams, setSearchParams])

  // eslint-disable-next-line no-console
  console.log({
    modal: searchParams.get("modal"),
    id: searchParams.get("id"),
  })


  return (
    <Fragment>
      {content && ready ? (
        <div
          className={"fixed top-[64px] right-0 bottom-0 left-0 w-screen bg-amber-50"}
          onClick={dismiss}>
          <div className={"absolute right-0 top-0 bottom-0 h-full w-[800px] bg-amber-100"}>
            {content}
          </div>
        </div>
      ) : null}
    </Fragment>
  )
}
