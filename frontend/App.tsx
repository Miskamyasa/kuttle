import "./index.css"

import React from "react"

import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"
import {RouterProvider} from "react-router-dom"

import router from "./Navigation/router"
import {store} from "./store/createStore"


dayjs.extend(relativeTime)

const element = document.getElementById("root")


if (element) {
  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  )
}
