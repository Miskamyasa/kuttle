import {Store} from "redux"
import {ForkEffect} from "redux-saga/effects"

import {CommonReducerActions, CommonReducerState} from "./common/types"


export type ID = string

export type Loadable<T> = T & {loading: boolean}

export type SagaGenerator = Generator<ForkEffect<never>, void>


export type Actions =
  | CommonReducerActions

export type ReducersState = {
  common: CommonReducerState,
}

export type AppState = ReducersState

export type ConfiguredStore = {
  store: Store<ReducersState, Actions>,
}
