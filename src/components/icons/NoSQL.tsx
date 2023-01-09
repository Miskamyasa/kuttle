/* eslint-disable max-len */
import {ReactElement} from "react"


interface Props {
  size?: number
  className?: string
}

export default function NoSQL({size = 24, className}: Props): ReactElement {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 25">
      <path d="M.292 13.13v-.964c1.045 0 1.766-.207 2.162-.622.402-.415.603-1.138.603-2.171v-3.6c0-.792.078-1.48.232-2.06.155-.588.402-1.07.742-1.448.34-.384.786-.668 1.337-.854.556-.185 1.234-.278 2.032-.278v1.41c-.693 0-1.247.115-1.661.344-.408.222-.702.572-.882 1.048-.173.476-.26 1.089-.26 1.837v4.092c0 .526-.061.993-.185 1.402a2.198 2.198 0 0 1-.659 1.02c-.315.279-.755.489-1.318.631-.556.143-1.27.214-2.143.214ZM7.4 24.888c-.798 0-1.476-.092-2.032-.278-.55-.186-.996-.47-1.337-.854-.34-.377-.587-.86-.742-1.447-.155-.582-.232-1.268-.232-2.06v-3.6c0-1.034-.2-1.757-.603-2.172-.396-.414-1.117-.622-2.162-.622v-.964c.872 0 1.587.07 2.143.213.563.142 1.003.353 1.318.63.316.28.535.623.659 1.03.124.403.186.867.186 1.393v4.092c0 .748.086 1.358.26 1.828.179.476.473.829.88 1.058.415.229.969.343 1.662.343v1.41ZM.292 13.854v-1.688h2.125v1.688H.292ZM17.196 12.645v.965c-1.045 0-1.766.207-2.162.621-.402.415-.603 1.139-.603 2.172v3.6c0 .792-.077 1.479-.232 2.06-.155.588-.402 1.07-.742 1.448-.34.383-.786.668-1.336.853-.557.186-1.235.279-2.033.279v-1.41c.693 0 1.247-.115 1.661-.344.409-.223.703-.572.882-1.049.173-.476.26-1.088.26-1.837v-4.092c0-.526.062-.993.185-1.401.124-.402.344-.743.66-1.02.315-.28.754-.49 1.317-.632.557-.142 1.271-.213 2.143-.213ZM10.088.888c.799 0 1.476.093 2.033.278.55.186.996.47 1.336.854.34.377.587.86.742 1.448.155.581.232 1.268.232 2.06v3.6c0 1.033.201 1.757.603 2.171.396.415 1.117.622 2.162.622v.965c-.872 0-1.586-.071-2.143-.213-.563-.143-1.002-.353-1.318-.632a2.195 2.195 0 0 1-.659-1.03 4.737 4.737 0 0 1-.185-1.391V5.528c0-.749-.087-1.358-.26-1.828-.18-.477-.473-.83-.882-1.058-.414-.23-.968-.344-1.66-.344V.888Zm7.108 11.033v1.689h-2.125v-1.69h2.125Z" />
    </svg>
  )
}
