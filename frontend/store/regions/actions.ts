import {FetchRegionsAction, LoadRegionsAction, FailFetchRegionsAction} from "./types"


export function fetchRegions(): FetchRegionsAction {
  return {
    type: "FetchRegions",
  }
}

export function loadRegions(payload: LoadRegionsAction["payload"]): LoadRegionsAction {
  return {
    type: "LoadRegions",
    payload,
  }
}

export function failFetchRegions(): FailFetchRegionsAction {
  return {
    type: "FailFetchRegions",
  }
}
