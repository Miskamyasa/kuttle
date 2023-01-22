import {Loadable} from "../../helpers/types"
import {AccountId} from "../accounts/types"
import {ResetAction} from "../common/types"
import {Environment as EnvironmentDTO} from "../dto"
import {RegionId} from "../regions/types"


export type EnvironmentId = string

interface Environment extends EnvironmentDTO {
  regionId: RegionId
  accountId: AccountId
}

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
