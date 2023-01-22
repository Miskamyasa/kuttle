import {Loadable} from "../../helpers/types"
import {AccountId} from "../accounts/types"
import {ResetAction} from "../common/types"
import {Region as RegionDTO} from "../dto"
import {EnvironmentId} from "../environments/types"


interface Region extends Omit<RegionDTO, "environments"> {
  environments: EnvironmentId[]
  accountId: AccountId
}

export type RegionId = string

export interface RegionsReducerState extends Loadable {
  store: Record<RegionId, Region>
}

export interface FetchRegionsAction {
  type: "FetchRegions"
}

export interface LoadRegionsAction {
  type: "LoadRegions"
  payload: Omit<RegionsReducerState, "loading">
}

export interface FailFetchRegionsAction {
  type: "FailFetchRegions"
}

export type RegionsReducerActions =
  | ResetAction
  | FetchRegionsAction
  | LoadRegionsAction
  | FailFetchRegionsAction
