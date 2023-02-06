import {MouseEvent, ReactElement, ReactNode, useCallback, useEffect, useRef, useState} from "react"

import {useSearchParams} from "react-router-dom"

import LAYOUT from "../../constants/layout"

import Environment from "./Environment"


export default function Modal(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams()

  const [content, setContent] = useState<null | ReactNode>()

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

  const className = ""
    + "absolute right-0 top-0 bottom-0 h-full w-[880px] max-w-full "
    + "bg-gray3 overflow-y-scroll transition-transform "

  return (
    <div
      style={{top: `${top.current}px`, visibility: content ? "visible" : "hidden"}}
      className={"fixed right-0 bottom-0 left-0 w-screen bg-black/25 backdrop-blur-[3px]"}
      onClick={dismiss}>
      <div
        className={className + (content ? "translate-x-0" : "translate-x-96")}
        onClick={stopPropagation}>
        {content}
      </div>
    </div>
  )
}
