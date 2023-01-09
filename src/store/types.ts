import {Store} from "redux"
import {ForkEffect} from "redux-saga/effects"

import {AccountsReducerActions, AccountsReducerState} from "./accounts/types"
import {CommonReducerActions, CommonReducerState} from "./common/types"
import {RegionsReducerActions, RegionsReducerState} from "./regions/types"


export type SagaGenerator = Generator<ForkEffect<never>, void>

export type Actions =
  | CommonReducerActions
  | AccountsReducerActions
  | RegionsReducerActions

export interface ReducersState {
  common: CommonReducerState
  accounts: AccountsReducerState
  regions: RegionsReducerState
}

export type AppState = ReducersState

export interface ConfiguredStore {
  store: Store<ReducersState, Actions>
}
