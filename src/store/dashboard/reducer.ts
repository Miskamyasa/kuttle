import {DashboardReducerActions, DashboardReducerState} from "./types"


function resetDashboardState(): DashboardReducerState {
  return {
    loading: false,
  }
}

const initialState = resetDashboardState()

export default function dashboardReducer(
  state: DashboardReducerState = initialState,
  action: DashboardReducerActions
): DashboardReducerState {
  switch (action.type) {
    case "Reset":
      return resetDashboardState()
    default:
      return state
  }
}
