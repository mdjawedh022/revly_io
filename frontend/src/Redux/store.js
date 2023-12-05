import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./auth/reducer";
import {reducer as doubtReducer} from "./doubt/reducer";

let rootReducer = combineReducers({ authReducer,doubtReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
