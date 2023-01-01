import {createBrowserRouter, Navigate} from "react-router-dom";

import {Layout} from "../Layout";
import {Blueprints} from "../pages/blueprints";
import {Dashboard} from "../pages/dashboard";
import {Review} from "../pages/review";


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
    path: "review",
    title: "Review / Approve / Apply",
    element: <Review />,
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
    path: "/",
    element: <Layout />,
    children: pages,
  },
];


export const router = createBrowserRouter(root);
