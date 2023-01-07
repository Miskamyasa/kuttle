import {ResetAction} from "../common/types"
import {Account} from "../dto"
import {Loadable} from "../types"


export type DashboardReducerState = Loadable<{
  store: Record<Account["account_name"], Account>,
  ids: Array<Account["account_name"]>,
}>

export type FetchDashboardAction = {
  type: "FetchDashboard",
}

export type LoadDashboardAction = {
  type: "LoadDashboard",
  payload: Array<Account>,
}

export type FailFetchDashboardAction = {
  type: "FailFetchDashboard",
}

export type DashboardReducerActions =
  | ResetAction
  | FetchDashboardAction
  | LoadDashboardAction
  | FailFetchDashboardAction
