import delay from "delay"
import {call, put, select, takeLeading} from "redux-saga/effects"

import mock from "../../../__mocks__/dashboard.json"
import errorHandler from "../../helpers/errorHandler"
import {Account} from "../dto"
import {selectEnvironmentsStore} from "../environments/selectors"
import {EnvironmentId, EnvironmentsReducerState} from "../environments/types"
import {getRegionId} from "../regions/helpers"
import {selectRegionsStore} from "../regions/selectors"
import {RegionId, RegionsReducerState} from "../regions/types"
import {AppState, SagaGenerator} from "../types"

import {failFetchAccounts, loadAccounts} from "./actions"
import {selectAccounts} from "./selectors"


export function* watchFetchAccounts(): SagaGenerator {
  yield takeLeading("FetchAccounts", function* fetchAccountsEffect() {
    try {
      // FIXME: переделать на бекенд реализацию
      const data = mock
      yield call(delay, 100)

      if (Array.isArray(data)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const accountsState: AppState["accounts"] = yield select(selectAccounts)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const regionsStore: RegionsReducerState["store"] = yield select(selectRegionsStore)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const envStore: EnvironmentsReducerState["store"] = yield select(selectEnvironmentsStore)

        const accountsIds = new Set(accountsState.ids)
        for (const accountData of data) {
          const {regions, ...account} = accountData as Account

          const accountName = account.account_name

          const ids: RegionId[] = []

          if (Array.isArray(regions) && regions.length > 0) {
            for (const regionData of regions) {
              const regionId = getRegionId(accountName, regionData.short_region)
              const {environments, ...region} = regionData

              const envIds: EnvironmentId[] = []
              if (Array.isArray(environments)) {
                for (const envData of environments) {
                  const {full_name: envId} = envData
                  envStore[envId] = envData
                  envIds.push(envId)
                }
              }

              regionsStore[regionId] = {
                ...region,
                environments: envIds,
              }
              ids.push(regionId)
            }
          }

          accountsState.store[accountName] = {
            ...account,
            regions: ids,
          }
          accountsIds.add(accountName)
        }

        yield put(loadAccounts({
          store: accountsState.store,
          ids: Array.from(accountsIds),
        }))
      }
    } catch (e) {
      errorHandler(e)
      yield put(failFetchAccounts())
    }
  })
}
