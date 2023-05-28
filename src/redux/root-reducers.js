import { combineReducers } from "redux"
import filmReducer from "./reducer"


const rootReducer = combineReducers({
    filmReducer: filmReducer
})

export default rootReducer