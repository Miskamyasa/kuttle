import {Loadable} from "../../helpers/types"
import {ResetAction} from "../common/types"
import {Environment} from "../dto"


export type EnvironmentId = string

export interface EnvironmentsReducerState extends Loadable {
  store: Record<EnvironmentId, Environment>
}

export interface FetchEnvironmentsAction {
  type: "FetchEnvironments"
}

export interface LoadEnvironmentsAction {
  type: "LoadEnvironments"
  payload: Omit<EnvironmentsReducerState, "loading">
}

export interface FailFetchEnvironmentsAction {
  type: "FailFetchEnvironments"
}

export type EnvironmentsReducerActions =
  | ResetAction
  | FetchEnvironmentsAction
  | LoadEnvironmentsAction
  | FailFetchEnvironmentsAction
