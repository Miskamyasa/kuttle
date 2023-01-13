import {CommonReducerActions, CommonReducerState} from "./types"


function resetCommonState(): CommonReducerState {
  return {
    ready: false,
  }
}

export default function commonReducer(
  state: CommonReducerState = resetCommonState(),
  action: CommonReducerActions
): CommonReducerState {
  switch (action.type) {
    case "Reset":
      return resetCommonState()
    default:
      return state
  }
}
