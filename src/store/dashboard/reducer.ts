import {DashboardReducerActions, DashboardReducerState} from "./types"


function resetDashboardState(): DashboardReducerState {
  return {
    loading: false,
    store: {},
    ids: [],
  }
}

const initialState = resetDashboardState()

export default function dashboardReducer(
  state: DashboardReducerState = initialState,
  action: DashboardReducerActions
): DashboardReducerState {
  switch (action.type) {
    case "FetchDashboard": {
      return {
        ...state,
        loading: true,
      }
    }

    case "LoadDashboard": {
      const {store, ids} = state
      const idsSet = new Set(ids)

      if (Array.isArray(action.payload)) {
        for (const item of action.payload) {
          store[item.account_name] = item
          idsSet.add(item.account_name)
        }
      }
      return {
        store,
        ids: Array.from(idsSet),
        loading: false,
      }
    }

    case "Reset":
      return resetDashboardState()

    default:
      return state
  }
}
