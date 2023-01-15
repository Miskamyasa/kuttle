import {ModalReducerActions, ModalReducerState} from "./types"


function resetModalState(): ModalReducerState {
  return {
    ready: false,
  }
}

const initialState = resetModalState()

export default function modalReducer(
  state: ModalReducerState = initialState,
  action: ModalReducerActions
): ModalReducerState {
  switch (action.type) {
    case "SetModalReady":
      return {
        ...state,
        ready: action.ready,
      }
    case "Reset":
      return resetModalState()
    default:
      return state
  }
}
