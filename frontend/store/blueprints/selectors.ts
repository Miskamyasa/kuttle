import {AppState} from "../types"

import {BlueprintsReducerState} from "./types"


export function selectBlueprints(state: AppState): BlueprintsReducerState {
  return state.blueprints
}

export function selectBlueprintsIds(state: AppState): BlueprintsReducerState["ids"] {
  return state.blueprints.ids
}

export function selectBlueprintsStore(state: AppState): BlueprintsReducerState["store"] {
  return state.blueprints.store
}
