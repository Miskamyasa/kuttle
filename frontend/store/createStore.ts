import {composeWithDevTools} from "@redux-devtools/extension"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import {createStore, applyMiddleware, Dispatch} from "redux"
import sagaMiddlewareFactory from "redux-saga"

import errorHandler from "../helpers/errorHandler"

import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"
import {Actions, AppState, ConfiguredStore} from "./types"


function configureStore(): ConfiguredStore {
  const sagaMiddleware = sagaMiddlewareFactory({
    onError(error: Error, errorInfo: {sagaStack: string}) {
      console.debug({errorInfo})
      errorHandler(error)
    },
  })

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )
  sagaMiddleware.run(rootSaga)

  return {
    store,
  }
}

const {store} = configureStore()


export function useAppDispatch(): Dispatch<Actions> {
  return useDispatch<typeof store.dispatch>()
}

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export {store}
