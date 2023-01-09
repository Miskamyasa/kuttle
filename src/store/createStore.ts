import {composeWithDevTools} from "@redux-devtools/extension"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import {createStore, applyMiddleware, Dispatch} from "redux"
import sagaMiddlewareFactory from "redux-saga"

import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"
import {Actions, AppState, ConfiguredStore} from "./types"


function configureStore(): ConfiguredStore {
  const sagaMiddleware = sagaMiddlewareFactory({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onError(error: Error, errorInfo: {sagaStack: string}) {
      // eslint-disable-next-line no-console
      console.debug({
        error,
        errorInfo,
      })
      // TODO: report error to backend.
      // this is not a one-size-fits-all solution, you must write a try/catch block in every saga generator
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
