import {BlueprintsReducerActions, BlueprintsReducerState} from "./types"


function resetBlueprintsState(): BlueprintsReducerState {
  return {
    loading: false,
    store: {},
    ids: [],
  }
}

const initialState = resetBlueprintsState()

function blueprintsReducer(
  state: BlueprintsReducerState = initialState,
  action: BlueprintsReducerActions
): BlueprintsReducerState {
  switch (action.type) {
    case "FetchBlueprints": {
      return {
        ...state,
        loading: true,
      }
    }

    case "LoadBlueprints": {
      return {
        ...action.payload,
        loading: false,
      }
    }

    case "FailFetchBlueprints":
      return {
        ...state,
        loading: false,
      }

    case "Reset":
      return resetBlueprintsState()

    default:
      return state
  }
}

export default blueprintsReducer
