import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, SELECT_ALL, DELETE_COMPLETE_ALL} from "../action-types"

export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {id: Date.now(), title: action.title, completed: false}];
        case DELETE_TODO:
            return state.filter((item, index) => index !== action.index);
        case TOGGLE_TODO:
            return state.map((item, index) => {
                if (index === action.index) {
                    item.completed = !item.completed;
                }
                return item;
            });
        case SELECT_ALL:
            return state.map(item => {
                item.completed = action.checked;
                return item;
            });
        case DELETE_COMPLETE_ALL:
            return state.filter(item => !item.completed);
        default:
            return state;
    }
}