import {Loadable} from "../../helpers/types"
import {ResetAction} from "../common/types"
import {Account as AccountDTO} from "../dto"


interface Account extends Omit<AccountDTO, "regions"> {
  regions: string[]
}

type ID = Account["account_name"]

export interface AccountsReducerState extends Loadable {
  store: Record<ID, Account>
  ids: Array<ID>
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
