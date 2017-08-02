import {get} from "./index"

let url="http://localhost:8080";

//获取今日的待办事项
export let getToday=()=>{
    return get(url+"/today");
};

//获取明日的待办事项
export let getTomorrow=()=>{
    return get(url+"/tomorrow");
};
