import delay from "delay"
import {call, put, takeLeading} from "redux-saga/effects"

import mock from "../../../__mocks__/dashboard.json"
import errorHandler from "../../helpers/errorHandler"
import {SagaGenerator} from "../types"

import {loadDashboard} from "./actions"


export function* watchFetchDashboard(): SagaGenerator {
  yield takeLeading("FetchDashboard", function* fetchDashboardEffect() {
    try {
      yield call(delay, 1000)
      const data = mock // FIXME: переделать на бекенд реализацию

      yield put(loadDashboard(data))
    } catch (e) {
      errorHandler(e)
    }
  })
}
