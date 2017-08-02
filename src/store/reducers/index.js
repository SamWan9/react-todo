import * as TYPES from "../action-types"
import {combineReducers} from "redux"

let historyState = {
    offset: 0,
    limit: 10,
    allList: []
};

let homeState={
    todayList: [],
    tomorrowList: []
};

let starState = {
    starList: []
};

let historyReducer = (state = historyState, action) => {
    switch (action.type) {
        case TYPES.GET_TODO_LIST:
            return {
                ...state,
                offset: state.offset+action.list.length,
                allList: [...action.list].sort((a,b)=>b.id-a.id)
            };
        case TYPES.ADD_TODO:
            return {
                allList: [...state.allList, action.toDo]
            };
        case TYPES.DELETE_TODO:
            return {
                allList: state.allList.filter(item => item.id !== action.id)
            };
        case TYPES.CHANGE_TODO_STAR:
            return {
                allList: state.allList.map(item => {
                    if(item.id===action.id){
                        item.star=!item.star;
                    }
                    return item;
                })
            };
        case TYPES.UPDATE_TODO:
            return {};
        case TYPES.CHANGE_TODO_DONE:
            return {};
        default:
            return state;
    }

};

let homeReducer = (state = homeState, action) => {
    switch (action.type) {
        case TYPES.GET_TODO_TODAY:
            return {
                ...state,
                todayList: [...action.list]
            };
        case TYPES.GET_TODO_TOMORROW:
            return {
                ...state,
                tomorrowList: [...action.list]
            };
        case TYPES.CHANGE_STAR_TODAY:
            return {
                ...state,
                todayList: state.todayList.map(item => {
                    if(item.id===action.id){
                        item.star=!item.star;
                    }
                    return item;
                })
            };
        case TYPES.CHANGE_STAR_TOMORROW:
            return {
                ...state,
                tomorrowList: state.tomorrowList.map(item => {
                    if(item.id===action.id){
                        item.star=!item.star;
                    }
                    return item;
                })
            };
        case TYPES.DELETE_TODO_TODAY:
            return {
                ...state,
                todayList: state.todayList.filter(item => item.id !== action.id)
            };
        case TYPES.DELETE_TODO_TOMORROW:
            return {
                ...state,
                tomorrowList: state.tomorrowList.filter(item => item.id !== action.id)
            };
        default:
            return state;
    }
};

let starReducer = (state = starState, action) => {
    switch (action.type) {
        case TYPES.GET_STAR:
            return {starList: [...action.list]};
        case TYPES.DELETE_TODO_STAR:
            return {
                starList: state.starList.filter(item => item.id !== action.id)
            };
        case TYPES.REMOVE_STAR:
            return {
                starList: state.starList.filter(item => item.id !== action.id)
            };
        default:
            return state;
    }
};

export default combineReducers({historyReducer, homeReducer, starReducer});