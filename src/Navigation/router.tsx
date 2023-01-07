import {createBrowserRouter, Navigate} from "react-router-dom"

import Layout from "../components/layout/Layout"
import Blueprints from "../pages/blueprints/Blueprints"
import Dashboard from "../pages/dashboard/Dashboard"


export const pages = [
  {
    path: "dashboard",
    title: "Dashboard",
    element: <Dashboard />,
  },
  {
    path: "blueprints",
    title: "Blueprints",
    element: <Blueprints />,
  },
  {
    path: "*",
    element: (
      <Navigate
        replace
        to={"dashboard"} />
    ),
  },
]

const root = [
  {
    path: "/*",
    element: <Layout />,
    children: pages,
  },
]


const router = createBrowserRouter(root)

export default router
