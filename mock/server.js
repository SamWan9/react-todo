const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

let read = (path, callback) => {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            callback(JSON.parse(data).lists);
        }
    });
};

let write = (path, data, callback) => {
    let temp = {};
    temp.lists = data;
    fs.writeFile(path, JSON.stringify(temp), "utf-8", err => {
        if (err) {
            console.log(err);
        } else {
            callback();
        }
    });
};

let path = "./data/toDoLists.json";

app.use(cors());
// let urlencodedParser = bodyParser.urlencoded({extended: false});
let jsonParser = bodyParser.json();


let getDayList = (str, list) => {
    let dayStr = str.split(" ")[0];
    let dayArr = dayStr.split("-");
    let reg = new RegExp(dayArr[0] + "-[0]?" + dayArr[1] + "-[0]?" + dayArr[2]);
    return list.filter(item => reg.test(item.time));
};

app.get("/all/:offset/:limit", (req, res) => {
    read(path, data => {
        res.json(data);
    });
});

app.post("/delete",jsonParser,(req,res)=>{
    let reqData=req.body;
    read(path, data => {
        data = data.filter(item=>item.id!=reqData.id);
        write(path, data, () => {
            res.json({code: 0, msg: "success"});
        });
    });
});

app.get("/today", (req, res) => {
    let todayStr = new Date().toLocaleString();
    read(path, data => {
        res.json(getDayList(todayStr, data));
    });
});

app.get("/tomorrow", (req, res) => {
    let tomorrow = new Date().valueOf() + (24 * 60 * 60 * 1000);
    let tomorrowStr = new Date(tomorrow).toLocaleString();
    read(path, data => {
        res.json(getDayList(tomorrowStr, data));
    });
});

app.get("/star",(req,res)=>{
    read(path,data=>{
        data=data.filter(item=>item.star);
        res.json(data);
    });
});

app.post("/changeStar",jsonParser,(req,res)=>{
    let id = req.body.id;
    read(path, data => {
        data.forEach(item=>{
            if(item.id==id){
                item.star=!item.star;
            }
        });
        write(path, data, () => {
            res.json({code: 0, msg: "success"});
        });
    });
});

app.post("/addToDo", jsonParser, (req, res) => {
    let reqData = req.body;
    read(path, data => {
        reqData.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
        data.push(reqData);
        write(path, data, () => {
            res.json({code: 0, data: reqData});
        });
    });
});

app.listen(8080, () => {
    console.log("success!");
});