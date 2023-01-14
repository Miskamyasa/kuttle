import {Loadable} from "../../helpers/types"
import {ResetAction} from "../common/types"
import {Account as AccountDTO} from "../dto"
import {RegionId} from "../regions/types"


interface Account extends Omit<AccountDTO, "regions"> {
  regions: RegionId[]
}

export type AccountId = Account["account_name"]

export interface AccountsReducerState extends Loadable {
  store: Record<AccountId, Account>
  ids: Array<AccountId>
}

export interface FetchAccountsAction {
  type: "FetchAccounts"
}

export interface LoadAccountsAction {
  type: "LoadAccounts"
  payload: Omit<AccountsReducerState, "loading">
}

export interface FailFetchAccountsAction {
  type: "FailFetchAccounts"
}

export type AccountsReducerActions =
  | ResetAction
  | FetchAccountsAction
  | LoadAccountsAction
  | FailFetchAccountsAction
