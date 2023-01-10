import {AppState} from "../types"


export const selectAccounts = (state: AppState): AppState["accounts"] => state.accounts

export function selectAccountsStore(state: AppState): AppState["accounts"]["store"] {
  return state.accounts.store
}
