import axios from "axios"
import {call, put, select, takeLeading} from "redux-saga/effects"

import errorHandler from "../../helpers/errorHandler"
import {Account as AccountDTO} from "../dto"
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
      const {data}: {data: AccountDTO[]} = yield call(axios, "/api/dashboard")

      if (Array.isArray(data) && data.length > 0) {
        const accountsState: AppState["accounts"] = yield select(selectAccounts)
        const regionsStore: RegionsReducerState["store"] = yield select(selectRegionsStore)
        const envStore: EnvironmentsReducerState["store"] = yield select(selectEnvironmentsStore)

        const accountsIds = new Set(accountsState.ids)

        for (const accountData of data) {
          const {regions, ...account} = accountData

          const accountId = account.accountName.trim()

          const ids: Set<RegionId> = new Set()

          if (Array.isArray(regions) && regions.length > 0) {
            for (const regionData of regions) {
              const regionId = `${accountId}-${regionData.region.trim()}`
              const {environments, ...region} = regionData

              const envIds: Set<EnvironmentId> = new Set()
              if (Array.isArray(environments) && environments.length > 0) {
                for (const envData of environments) {
                  const envId = envData.fullName.trim()
                  envStore[envId] = {
                    ...envData,
                    regionId,
                    accountId,
                    hourlyPrice: envData.hourlyPrice || envData.services?.reduce((acc, {hourlyPrice = 0}) => {
                      if (typeof hourlyPrice === "number") {
                        return acc += hourlyPrice
                      }
                      return acc
                    }, 0),
                  }
                  envIds.add(envId)
                }
              }

              regionsStore[regionId] = {
                ...region,
                accountId,
                environments: Array.from(envIds),
              }
              ids.add(regionId)
            }
          }

          accountsState.store[accountId] = {
            ...account,
            regions: Array.from(ids),
          }
          accountsIds.add(accountId)
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
