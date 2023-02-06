import {Loadable} from "../../helpers/types"
import {ResetAction} from "../common/types"
import {BlueprintRef} from "../dto"


export type BlueprintId = string

export interface BlueprintsReducerState extends Loadable {
  store: Record<BlueprintId, BlueprintRef>
  ids: Array<BlueprintId>
}

export interface FetchBlueprintsAction {
  type: "FetchBlueprints"
}

export interface LoadBlueprintsAction {
  type: "LoadBlueprints"
  payload: Omit<BlueprintsReducerState, "loading">
}

export interface FailFetchBlueprintsAction {
  type: "FailFetchBlueprints"
}

export type BlueprintsReducerActions =
  | ResetAction
  | FetchBlueprintsAction
  | LoadBlueprintsAction
  | FailFetchBlueprintsAction
