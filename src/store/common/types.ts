import {ReactNode} from "react"


export interface CommonReducerState {
  content: ReactNode
  // TODO: change to anything!
}

export interface ResetAction {
  type: "Reset"
}

export type CommonReducerActions = ResetAction
