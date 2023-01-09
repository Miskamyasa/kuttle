import {AccountsReducerActions, AccountsReducerState} from "./types"


function resetAccountsState(): AccountsReducerState {
  return {
    loading: false,
    store: {},
    ids: [],
  }
}

const initialState = resetAccountsState()

export default function accountsReducer(
  state: AccountsReducerState = initialState,
  action: AccountsReducerActions
): AccountsReducerState {
  switch (action.type) {
    case "FetchAccounts": {
      return {
        ...state,
        loading: true,
      }
    }

    case "LoadAccounts": {
      return {
        ...action.payload,
        loading: false,
      }
    }

    case "FailFetchAccounts":
      return {
        ...state,
        loading: false,
      }

    case "Reset":
      return resetAccountsState()

    default:
      return state
  }
}
