import {post} from "./index"

let url = "http://localhost:8080";

//添加待办事项
export let addToDo = data => {
    return post(url + "/addToDo", data);
};