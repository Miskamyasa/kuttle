import {EnvironmentsReducerActions, EnvironmentsReducerState} from "./types"


function resetEnvironmentsState(): EnvironmentsReducerState {
  return {
    loading: false,
    store: {},
  }
}

const initialState = resetEnvironmentsState()

export default function environmentsReducer(
  state: EnvironmentsReducerState = initialState,
  action: EnvironmentsReducerActions
): EnvironmentsReducerState {
  switch (action.type) {
    case "FetchEnvironments": {
      return {
        ...state,
        loading: true,
      }
    }

    case "LoadEnvironments": {
      return {
        ...action.payload,
        loading: false,
      }
    }

    case "FailFetchEnvironments":
      return {
        ...state,
        loading: false,
      }

    case "Reset":
      return resetEnvironmentsState()

    default:
      return state
  }
}
