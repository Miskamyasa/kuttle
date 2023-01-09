import {Loadable} from "../../helpers/types"
import {ResetAction} from "../common/types"
import {Region} from "../dto"


export type RegionID = string

export interface RegionsReducerState extends Loadable {
  store: Record<RegionID, Region>
  ids: Array<RegionID>
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
