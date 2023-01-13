import {RegionsReducerActions, RegionsReducerState} from "./types"


function resetRegionsState(): RegionsReducerState {
  return {
    loading: false,
    store: {},
  }
}

const initialState = resetRegionsState()

export default function regionsReducer(
  state: RegionsReducerState = initialState,
  action: RegionsReducerActions
): RegionsReducerState {
  switch (action.type) {
    case "FetchRegions": {
      return {
        ...state,
        loading: true,
      }
    }

    case "LoadRegions": {
      return {
        ...action.payload,
        loading: false,
      }
    }

    case "FailFetchRegions":
      return {
        ...state,
        loading: false,
      }

    case "Reset":
      return resetRegionsState()

    default:
      return state
  }
}
