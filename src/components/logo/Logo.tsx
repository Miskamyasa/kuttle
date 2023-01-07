import React from "react"

import logo from "../../assets/logo.svg"


const Logo: React.FC = () => (
  <div className={"flex items-center justify-center"}>
    <img
      src={logo}
      alt="Kuttle" />
  </div>
)

export default Logo
