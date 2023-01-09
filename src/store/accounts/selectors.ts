import {AppState} from "../types"


export const selectAccounts = (state: AppState): AppState["accounts"] => state.accounts
