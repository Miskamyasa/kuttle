import {NavLink} from "react-router-dom"

import {pages} from "../../Navigation/router"


const Tabs = () => {
  return (
    <div className={"h-full kuttle-tabs flex items-center"}>
      {pages.map((route) => {
        if (route.path !== "*") {
          return (
            <NavLink
              key={route.path}
              to={route.path}>
              <span>{route.title}</span>
            </NavLink>
          )
        }
      })}
    </div>
  )
}

export default Tabs
