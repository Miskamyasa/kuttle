import {ResetAction} from "../common/types"


export interface ModalReducerState {
  ready: boolean
}

export interface SetModalReadyAction {
  type: "SetModalReady"
  ready: boolean
}

export type ModalReducerActions =
  | SetModalReadyAction
  | ResetAction
