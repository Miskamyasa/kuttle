import {AppState} from "../types"

import {EnvironmentsReducerState} from "./types"


export function selectEnvironments(state: AppState): EnvironmentsReducerState {
  return state.environments
}

export function selectEnvironmentsStore(state: AppState): EnvironmentsReducerState["store"] {
  return state.environments.store
}
