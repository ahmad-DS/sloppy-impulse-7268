import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as userReducer } from "./userReducer/reducer";

const rootReducer=combineReducers({authReducer,userReducer})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
