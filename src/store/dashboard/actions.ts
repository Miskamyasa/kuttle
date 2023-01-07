import {FetchDashboardAction, LoadDashboardAction, FailFetchDashboardAction} from "./types"


export function fetchDashboard(): FetchDashboardAction {
  return {
    type: "FetchDashboard",
  }
}

export function loadDashboard(payload: LoadDashboardAction["payload"]): LoadDashboardAction {
  return {
    type: "LoadDashboard",
    payload,
  }
}

export function failFetchDashboard(): FailFetchDashboardAction {
  return {
    type: "FailFetchDashboard",
  }
}
