import {AppState} from "../types"

import {RegionsReducerState} from "./types"


export function selectRegions(state: AppState): RegionsReducerState {
  return state.regions
}

export function selectRegionsStore(state: AppState): RegionsReducerState["store"] {
  return state.regions.store
}
