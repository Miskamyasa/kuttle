import {AppState} from "../types"


export const selectDashboard = (state: AppState): AppState["dashboard"] => state.dashboard
