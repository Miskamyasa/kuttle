import {Loadable} from "../../helpers/types"
import {ResetAction} from "../common/types"
import {Account} from "../dto"


export interface DashboardReducerState extends Loadable {
  store: Record<Account["account_name"], Account>
  ids: Array<Account["account_name"]>
}

export interface FetchDashboardAction {
  type: "FetchDashboard"
}

export interface LoadDashboardAction {
  type: "LoadDashboard"
  payload: Array<Account>
}

export interface FailFetchDashboardAction {
  type: "FailFetchDashboard"
}

export type DashboardReducerActions =
  | ResetAction
  | FetchDashboardAction
  | LoadDashboardAction
  | FailFetchDashboardAction
