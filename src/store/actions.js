import {getToday,getTomorrow} from "../api/home"
import {getAll,deleteToDo} from "../api/history"
import {addToDo} from "../api/add"
import {getStar,changeStar} from "../api/star"

import * as TYPES from "./action-types"

export let home = dispatch =>({
    getTodayList: ()=>{
        getToday().then(json=>{
            dispatch({type: TYPES.GET_TODO_TODAY,list: json});
        });
    },
    getTomorrowList: ()=>{
        getTomorrow().then(json=>{
            dispatch({type: TYPES.GET_TODO_TOMORROW,list: json});
        });
    },
    deleteToDoToday: (id)=>{
        deleteToDo(id).then(json=>{
            if(json.code===0){
                dispatch({type: TYPES.DELETE_TODO_TODAY, id});
            }
        });
    },
    deleteToDoTomorrow: (id)=>{
        deleteToDo(id).then(json=>{
            if(json.code===0){
                dispatch({type: TYPES.DELETE_TODO_TOMORROW, id});
            }
        });
    },
    changeStarToday: (id)=>{
        changeStar(id).then(json=>{
            if(json.code===0){
                dispatch({type: TYPES.CHANGE_STAR_TODAY, id});
            }
        });
    },
    changeStarTomorrow: (id)=>{
        changeStar(id).then(json=>{
            if(json.code===0){
                dispatch({type: TYPES.CHANGE_STAR_TOMORROW, id});
            }
        });
    }
});

export let history = dispatch =>({
    getAllList: ({offset,limit})=>{
        getAll(offset,limit).then(json=>{
            dispatch({type: TYPES.GET_TODO_LIST, list: json});
        })
    },
    deleteToDo: (id)=>{
        deleteToDo(id).then(json=>{
            if(json.code===0){
                dispatch({type: TYPES.DELETE_TODO, id});
            }
        });
    },
    changeStar: (id)=>{
        changeStar(id).then(json=>{
            if(json.code===0){
                dispatch({type: TYPES.CHANGE_TODO_STAR, id});
            }
        });
    }
});

export let star=dispatch=>({
    getStarList: ()=>{
        getStar().then(json=>{
            dispatch({type: TYPES.GET_STAR,list: json});
        });
    },
    deleteToDoStar: (id)=>{
        deleteToDo(id).then(json=>{
            if(json.code===0){
                dispatch({type: TYPES.DELETE_TODO_STAR, id});
            }
        });
    },
    removeStar: (id)=>{
        changeStar(id).then(json=>{
            if(json.code===0){
                dispatch({type: TYPES.REMOVE_STAR, id});
            }
        });
    }
});

export let add = dispatch => ({
    addToDo: (data)=>{
        addToDo(data).then(json=>{
            if(json.code===0){
                dispatch({type: TYPES.ADD_TODO, toDo: json.data});
            }
        })
    }
});