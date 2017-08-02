import {createStore, compose} from "redux"
import allReducer from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(allReducer, composeEnhancers());