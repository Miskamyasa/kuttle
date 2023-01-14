import {all, AllEffect} from "redux-saga/effects"

import {watchFetchAccounts} from "./accounts/sagas"
import {watchFetchBlueprints} from "./blueprints/sagas"
import {SagaGenerator} from "./types"


export default function* rootSaga(): Generator<AllEffect<SagaGenerator>, void> {
  yield all([
    watchFetchAccounts(),
    watchFetchBlueprints(),
  ])
}
