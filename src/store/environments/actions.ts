import {FetchEnvironmentsAction, LoadEnvironmentsAction, FailFetchEnvironmentsAction} from "./types"


export function fetchEnvironments(): FetchEnvironmentsAction {
  return {
    type: "FetchEnvironments",
  }
}

export function loadEnvironments(payload: LoadEnvironmentsAction["payload"]): LoadEnvironmentsAction {
  return {
    type: "LoadEnvironments",
    payload,
  }
}

export function failFetchEnvironments(): FailFetchEnvironmentsAction {
  return {
    type: "FailFetchEnvironments",
  }
}
