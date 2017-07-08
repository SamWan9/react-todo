import React,{Component} from "react"
import TodoHeader from "./TodoHeader"
import TodoBody from "./TodoBody"
import TodoFooter from "./TodoFooter"
import "bootstrap/dist/css/bootstrap.css"

export default class App extends Component{
    render(){
        return (
            <div style={{marginTop: "50px"}} className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <TodoHeader />
                            <TodoBody />
                            <TodoFooter />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}