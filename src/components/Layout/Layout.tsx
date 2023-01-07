import React, {Fragment} from "react"

import {Outlet} from "react-router-dom"

import Avatar from "../avatar/Avatar"
import BellRing from "../icons/BellRing"
import Logo from "../logo/Logo"
import Tabs from "../Tabs/Tabs"


const Layout: React.FC = () => {
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
      <div className={"py-3 max-w-full bg-gray3 min-h-[calc(100vh_-_64px)]"}>
        <Outlet />
      </div>
    </Fragment>
  )
}


export default Layout
