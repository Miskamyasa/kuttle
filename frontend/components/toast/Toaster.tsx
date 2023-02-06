import {ReactElement} from "react"

import {Toaster as HotToaster} from "react-hot-toast"


const toastOptions = {
  duration: 3000,
  className: "w-96",
  icon: null,
  success: {
    style: {
      background: "#57BB80",
      color: "white",
    },
  },
  error: {
    style: {
      background: "#EE5353",
      color: "white",

    },
  },
}

export default function Toaster(): ReactElement {
  return (
    <HotToaster
      position={"bottom-right"}
      toastOptions={toastOptions} />
  )
}
