import {Fragment, ReactElement, ReactNode, useCallback, useEffect, useRef, useState} from "react"

import {useSearchParams} from "react-router-dom"


import stopPropagation from "../../helpers/stopPropagation"
// import {useAppSelector} from "../../store/createStore"

import Environment from "./Environment"


export default function Modal(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams()

  const [content, setContent] = useState<null | ReactNode>()

  const ready = true // useAppSelector(state => state.modal.ready)

  const modalShow = searchParams.get("modal")

  //                           64 - header height
  const top = useRef(64)

  useEffect(() => {
    if (modalShow) {
      document.body.style.overflow = "hidden"
      const headerGap = 64 - window.scrollY
      top.current = headerGap > 0 ? headerGap : 0

      switch (modalShow) {
        case "environment":
          setContent(<Environment />)
      }
      return
    }

    document.body.style.overflow = "visible"

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
          style={{top: `${top.current}px`}}
          className={"fixed right-0 bottom-0 left-0 w-screen bg-black/25 backdrop-blur-[3px]"}
          onClick={dismiss}>
          <div
            className={"absolute right-0 top-0 bottom-0 h-full w-[880px] max-w-full bg-gray3 overflow-y-scroll"}
            onClick={stopPropagation}>
            {content}
          </div>
        </div>
      ) : null}
    </Fragment>
  )
}
