import {AppState} from "../types"

import {AccountsReducerState} from "./types"


export function selectAccounts(state: AppState): AccountsReducerState {
  return state.accounts
}

export function selectAccountsStore(state: AppState): AccountsReducerState["store"] {
  return state.accounts.store
}
