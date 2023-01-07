import {ResetAction} from "../common/types"
import {Loadable} from "../types"


type _State = {
  // ..
}

export type DashboardReducerState = Loadable<_State>

export type FetchDashboardAction = {
  type: "FetchDashboard",
}

export type LoadDashboardAction = {
  type: "LoadDashboard",
  payload: _State,
}

export type FailFetchDashboardAction = {
  type: "FailFetchDashboard",
}

export type DashboardReducerActions =
  | ResetAction
  | FetchDashboardAction
