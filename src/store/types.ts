import {Store} from "redux"
import {ForkEffect} from "redux-saga/effects"

import {CommonReducerActions, CommonReducerState} from "./common/types"
import {DashboardReducerActions, DashboardReducerState} from "./dashboard/types"


export type SagaGenerator = Generator<ForkEffect<never>, void>

export type Actions =
  | CommonReducerActions
  | DashboardReducerActions

export interface ReducersState {
  common: CommonReducerState
  dashboard: DashboardReducerState
}

export type AppState = ReducersState

export interface ConfiguredStore {
  store: Store<ReducersState, Actions>
}
