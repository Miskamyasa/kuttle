import axios from "axios"
import {call, put, select, takeLeading} from "redux-saga/effects"

import errorHandler from "../../helpers/errorHandler"
import {BlueprintRef} from "../dto"
import {AppState, SagaGenerator} from "../types"

import {failFetchBlueprints, loadBlueprints} from "./actions"
import {selectBlueprints} from "./selectors"
import {FetchBlueprintsAction} from "./types"


export function* watchFetchBlueprints(): SagaGenerator {
  yield takeLeading<FetchBlueprintsAction["type"]>("FetchBlueprints", function* fetchBlueprintsEffect() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const {data}: {data: BlueprintRef[]} = yield call(axios, "/api/blueprints")

      if (Array.isArray(data) && data.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const blueprintsState: AppState["blueprints"] = yield select(selectBlueprints)

        const blueprintsIds = new Set(blueprintsState.ids)
        for (const blueprintData of data) {
          const {name: id} = blueprintData
          blueprintsState.store[id] = blueprintData
          blueprintsIds.add(id)
        }

        yield put(loadBlueprints({
          store: blueprintsState.store,
          ids: Array.from(blueprintsIds),
        }))
      }

      yield put(failFetchBlueprints())

    } catch (e) {
      errorHandler(e)
      yield put(failFetchBlueprints())
    }
  })
}
