import {createStore,combineReducers} from "redux";
import {cashReducer} from "./cashReducer.js";
import {customReducer} from "./customerReducer.js";

const rootReducer = combineReducers({
    cash:cashReducer,
    customers: customReducer
})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

