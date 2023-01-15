import {Store} from "redux"
import {ForkEffect} from "redux-saga/effects"

import {AccountsReducerActions, AccountsReducerState} from "./accounts/types"
import {BlueprintsReducerActions, BlueprintsReducerState} from "./blueprints/types"
import {CommonReducerActions, CommonReducerState} from "./common/types"
import {EnvironmentsReducerActions, EnvironmentsReducerState} from "./environments/types"
import {ModalReducerActions, ModalReducerState} from "./modal/types"
import {RegionsReducerActions, RegionsReducerState} from "./regions/types"


export type SagaGenerator = Generator<ForkEffect<never>, void>

export type Actions =
  | CommonReducerActions
  | ModalReducerActions
  | AccountsReducerActions
  | RegionsReducerActions
  | EnvironmentsReducerActions
  | BlueprintsReducerActions

export interface AppState {
  common: CommonReducerState
  modal: ModalReducerState
  accounts: AccountsReducerState
  regions: RegionsReducerState
  environments: EnvironmentsReducerState
  blueprints: BlueprintsReducerState
}

export interface ConfiguredStore {
  store: Store<AppState, Actions>
}
