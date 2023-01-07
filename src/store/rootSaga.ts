import {all, AllEffect} from "redux-saga/effects"

import {SagaGenerator} from "./types"


export default function* rootSaga(): Generator<AllEffect<SagaGenerator>, void> {
  yield all([])
}
