import {FetchBlueprintsAction, LoadBlueprintsAction, FailFetchBlueprintsAction} from "./types"


export function fetchBlueprints(): FetchBlueprintsAction {
  return {
    type: "FetchBlueprints",
  }
}

export function loadBlueprints(payload: LoadBlueprintsAction["payload"]): LoadBlueprintsAction {
  return {
    type: "LoadBlueprints",
    payload,
  }
}

export function failFetchBlueprints(): FailFetchBlueprintsAction {
  return {
    type: "FailFetchBlueprints",
  }
}
