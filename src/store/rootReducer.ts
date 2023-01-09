import {combineReducers} from "redux"

import accountsReducer from "./accounts/reducer"
import commonReducer from "./common/reducer"
import regionsReducer from "./regions/reducer"


const rootReducer = combineReducers({
  common: commonReducer,
  accounts: accountsReducer,
  regions: regionsReducer,
})

export default rootReducer
