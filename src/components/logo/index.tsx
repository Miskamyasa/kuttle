import React from "react";

import logo from "../../assets/logo.svg";


export const Logo: React.FC = () => (
  <div className={"h-5 flex items-center justify-center"}>
    <img
      className={"h-5 mt-0.5"}
      src={logo}
      alt="Kuttle" />
  </div>
)
;
