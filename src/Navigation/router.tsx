import {createBrowserRouter, Navigate} from "react-router-dom";

import {Layout} from "../Layout";
import {Blueprints} from "../pages/blueprints";
import {Dashboard} from "../pages/dashboard";


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
];

const root = [
  {
    path: "/*",
    element: <Layout />,
    children: pages,
  },
];


export const router = createBrowserRouter(root);
