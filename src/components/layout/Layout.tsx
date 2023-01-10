import React, {Fragment, ReactElement} from "react"

import {Outlet, useSearchParams} from "react-router-dom"

import Avatar from "../avatar/Avatar"
import BellRing from "../icons/BellRing"
import Logo from "../logo/Logo"
import Modal from "../Modal/Modal"
import Tabs from "../tabs/Tabs"

import {pageHeightClassName} from "./helpers"


export default function Layout(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams()

  // eslint-disable-next-line no-console
  console.log({
    searchParams,
    modal: searchParams.get("modal"),
    id: searchParams.get("id"),
    setSearchParams,
  })

  return (
    <Fragment>
      <div className={"bg-blueDark flex items-center h-16 px-10"}>
        <div className={"mr-12"}>
          <Logo />
        </div>
        <Tabs />
        <div className={"ml-auto flex items-center gap-3"}>
          <BellRing
            size={24}
            fill={"#fff"}
            ringing={false} />
          <Avatar name={"John Smith"} />
        </div>
      </div>
      {/* 64px in calc function is h-16 for header */}
      <div className={`max-w-full bg-gray3 ${pageHeightClassName}`}>
        <Outlet />
      </div>
      <Modal />
    </Fragment>
  )
}
