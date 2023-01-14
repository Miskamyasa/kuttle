import axios from "axios"
import {call, put, select, takeLeading} from "redux-saga/effects"

import errorHandler from "../../helpers/errorHandler"
import {Account} from "../dto"
import {selectEnvironmentsStore} from "../environments/selectors"
import {EnvironmentId, EnvironmentsReducerState} from "../environments/types"
import {selectRegionsStore} from "../regions/selectors"
import {RegionId, RegionsReducerState} from "../regions/types"
import {AppState, SagaGenerator} from "../types"

import {failFetchAccounts, loadAccounts} from "./actions"
import {selectAccounts} from "./selectors"
import {FetchAccountsAction} from "./types"


export function* watchFetchAccounts(): SagaGenerator {
  yield takeLeading<FetchAccountsAction["type"]>("FetchAccounts", function* fetchAccountsEffect() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const {data}: {data: Account[]} = yield call(axios, "/api/dashboard")

      if (Array.isArray(data) && data.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const accountsState: AppState["accounts"] = yield select(selectAccounts)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const regionsStore: RegionsReducerState["store"] = yield select(selectRegionsStore)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const envStore: EnvironmentsReducerState["store"] = yield select(selectEnvironmentsStore)

        const accountsIds = new Set(accountsState.ids)
        for (const accountData of data) {
          const {regions, ...account} = accountData

          const accountName = account.account_name

          const ids: RegionId[] = []

          if (Array.isArray(regions) && regions.length > 0) {
            for (const regionData of regions) {
              const regionId = `${accountName.substring(0, 3).toLowerCase()}-${regionData.short_region}`
              const {environments, ...region} = regionData

              const envIds: EnvironmentId[] = []
              if (Array.isArray(environments) && environments.length > 0) {
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

      yield put(failFetchAccounts())

    } catch (e) {
      errorHandler(e)
      yield put(failFetchAccounts())
    }
  })
}
