import {Fragment, MouseEvent, ReactElement, ReactNode, useCallback, useEffect, useRef, useState} from "react"

import {useSearchParams} from "react-router-dom"

import LAYOUT from "../../constants/layout"

import Environment from "./Environment"


export default function Modal(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams()

  const [content, setContent] = useState<null | ReactNode>()

  const ready = true // useAppSelector(state => state.common.ready)

  const modalShow = searchParams.get("modal")

  const top = useRef<number>(LAYOUT.HEADER_HEIGHT)

  useEffect(() => {
    if (modalShow) {
      document.body.style.overflow = "hidden"
      const headerGap = LAYOUT.HEADER_HEIGHT - window.scrollY
      top.current = headerGap > 0 ? headerGap : 0

      switch (modalShow) {
        case "environment":
          setContent(<Environment />)
      }
      return
    }

    document.body.style.overflow = "auto"

    setContent(null)
  }, [modalShow])

  const dismiss = useCallback(() => {
    if (modalShow) {
      searchParams.delete("modal")
      searchParams.delete("id")
      setSearchParams(searchParams)
    }
  }, [modalShow, searchParams, setSearchParams])

  const stopPropagation = (event: MouseEvent<HTMLElement>): void => {
    event.stopPropagation()
  }

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
