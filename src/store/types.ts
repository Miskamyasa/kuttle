import {Store} from "redux"
import {ForkEffect} from "redux-saga/effects"

import {CommonReducerActions, CommonReducerState} from "./common/types"
import {DashboardReducerActions, DashboardReducerState} from "./dashboard/types"


export type ID = string

export type Loadable<T> = T & {loading: boolean}

export type SagaGenerator = Generator<ForkEffect<never>, void>


export type Actions =
  | CommonReducerActions
  | DashboardReducerActions

export type ReducersState = {
  common: CommonReducerState,
  dashboard: DashboardReducerState,
}

export type AppState = ReducersState

export type ConfiguredStore = {
  store: Store<ReducersState, Actions>,
}
