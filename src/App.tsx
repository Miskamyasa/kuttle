import "./index.css";

import React from "react";

import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";

import {router} from "./Navigation/router";


const element = document.getElementById("root");

if (element) {
  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
