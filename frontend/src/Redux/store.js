import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
// import { reducer as authReducer } from "./authReducer/reducer";
// import { reducer as userReducer } from "./userReducer/reducer";
import {reducer as Appreducer} from "./Appreducer/reducer"
const rootReducer=combineReducers({Appreducer})

 const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

 export  {store}
