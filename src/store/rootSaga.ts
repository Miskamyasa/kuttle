import {all, AllEffect} from "redux-saga/effects"

import {watchFetchDashboard} from "./dashboard/sagas"
import {SagaGenerator} from "./types"


export default function* rootSaga(): Generator<AllEffect<SagaGenerator>, void> {
  yield all([
    watchFetchDashboard(),
  ])
}
