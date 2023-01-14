import {ReactElement} from "react"

import {NavLink} from "react-router-dom"

import {pages} from "../../Navigation/router"


export default function Tabs(): ReactElement {
  return (
    <div className={"h-full kuttle-tabs flex items-center"}>
      {pages.map(function linkMapper(route) {
        if (route.path !== "*") {
          return (
            <NavLink
              className={"mr-4"}
              key={route.path}
              to={route.path}>
              <div>{route.title}</div>
            </NavLink>
          )
        }
      })}
    </div>
  )
}
