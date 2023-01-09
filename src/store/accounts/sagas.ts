import delay from "delay"
import {call, put, select, takeLeading} from "redux-saga/effects"

import mock from "../../../__mocks__/dashboard.json"
import errorHandler from "../../helpers/errorHandler"
import {loadRegions} from "../regions/actions"
import {getRegionId} from "../regions/helpers"
import {selectRegions} from "../regions/selectors"
import {RegionID} from "../regions/types"
import {AppState, SagaGenerator} from "../types"

import {failFetchAccounts, loadAccounts} from "./actions"
import {selectAccounts} from "./selectors"


export function* watchFetchAccounts(): SagaGenerator {
  yield takeLeading("FetchAccounts", function* fetchAccountsEffect() {
    try {
      // FIXME: переделать на бекенд реализацию
      const data = mock
      yield call(delay, 100)

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const accountsState: AppState["accounts"] = yield select(selectAccounts)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const regionsState: AppState["regions"] = yield select(selectRegions)

      const accountsIds = new Set(accountsState.ids)
      const regionsIds = new Set(regionsState.ids)

      if (Array.isArray(data)) {
        for (const account of data) {
          const {regions} = account

          const name = account.account_name

          const ids: RegionID[] = []

          if (Array.isArray(regions) && regions.length > 0) {
            for (const region of regions) {
              const id = getRegionId(account.account_name, region.short_region)
              regionsState.store[id] = region
              regionsIds.add(id)
              ids.push(id)
            }
          }

          accountsState.store[name] = {
            ...account,
            regions: ids,
          }
          accountsIds.add(name)
        }
      }

      yield put(loadAccounts({
        store: accountsState.store,
        ids: Array.from(accountsIds),
      }))

      yield put(loadRegions({
        store: regionsState.store,
        ids: Array.from(regionsIds),
      }))

    } catch (e) {
      errorHandler(e)
      yield put(failFetchAccounts())
    }
  })
}
