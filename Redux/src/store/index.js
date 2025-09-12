import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cashReducer from "./cashReducer";
import customReducer from "./customerReducer";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
