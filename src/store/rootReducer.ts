import {combineReducers} from "redux"

import reducer from "./common/reducer"


const rootReducer = combineReducers({
  common: reducer,
})

export default rootReducer
