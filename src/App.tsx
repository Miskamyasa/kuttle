import "./index.css";

import React from "react";

import {ChakraProvider} from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";

import {router} from "./Navigation/router";
import {kuttieThemeV1} from "./theme";


const element = document.getElementById("root");

if (element) {
  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <ChakraProvider theme={kuttieThemeV1}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </React.StrictMode>
  );
}
