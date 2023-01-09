import {AppState} from "../types"


export function selectRegions(state: AppState): AppState["regions"] {
  return state.regions
}

export function selectRegionsStore(state: AppState): AppState["regions"]["store"] {
  return state.regions.store
}
