import {AppState} from "../types"

import {AccountsReducerState} from "./types"


export const selectAccounts = (state: AppState): AccountsReducerState => state.accounts

export function selectAccountsStore(state: AppState): AccountsReducerState["store"] {
  return state.accounts.store
}
