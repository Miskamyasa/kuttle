import {combineReducers} from "redux"

import commonReducer from "./common/reducer"
import dashboardReducer from "./dashboard/reducer"


const rootReducer = combineReducers({
  common: commonReducer,
  dashboard: dashboardReducer,
})

export default rootReducer
