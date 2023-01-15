import {MouseEvent} from "react"


export default function stopPropagation(event: MouseEvent<HTMLElement>): void {
  event.stopPropagation()
}
