import {createStore, combineReducers} from "redux"
import {todo, filter} from "./reducers"

let reducer = combineReducers({
    todo,
    filter
});

let store = createStore(reducer);

export default store;