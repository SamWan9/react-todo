import {get, post} from "./index"

let url = "http://localhost:8080";

//获取所有待办事项
export let getAll = (offset, limit) => {
    return get(url + `/all/${offset}/${limit}`);
};

//删除待办事项
export let deleteToDo = id => {
    return post(url + "/delete", {id});
};