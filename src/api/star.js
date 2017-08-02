import {get, post} from "./index"

let url = "http://localhost:8080";

//获取待办事项
export let getStar = () => {
    return get(url + "/star");
};

//取消星标
export let changeStar = (id)=>{
    return post(url + "/changeStar", {id});
};