import {combineReducers} from "redux"

import accountsReducer from "./accounts/reducer"
import blueprintsReducer from "./blueprints/reducer"
import commonReducer from "./common/reducer"
import environmentsReducer from "./environments/reducer"
import modalReducer from "./modal/reducer"
import regionsReducer from "./regions/reducer"
import {AppState} from "./types"


const rootReducer = combineReducers<AppState>({
  common: commonReducer,
  modal: modalReducer,
  accounts: accountsReducer,
  regions: regionsReducer,
  environments: environmentsReducer,
  blueprints: blueprintsReducer,
})

export default rootReducer
