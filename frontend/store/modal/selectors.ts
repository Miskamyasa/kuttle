import {AppState} from "../types"

import {ModalReducerState} from "./types"


export function selectModalReady(state: AppState): ModalReducerState["ready"] {
  return state.modal.ready
}
