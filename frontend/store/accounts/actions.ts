import {FetchAccountsAction, LoadAccountsAction, FailFetchAccountsAction} from "./types"


export function fetchAccounts(): FetchAccountsAction {
  return {
    type: "FetchAccounts",
  }
}

export function loadAccounts(payload: LoadAccountsAction["payload"]): LoadAccountsAction {
  return {
    type: "LoadAccounts",
    payload,
  }
}

export function failFetchAccounts(): FailFetchAccountsAction {
  return {
    type: "FailFetchAccounts",
  }
}
