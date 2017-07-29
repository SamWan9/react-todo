import React,{Component} from "react"
import Tab from "../components/Tab"
import "../common/css/index.css"

export default class App extends Component {
    render(){
        return (
            <div className="app">
                {this.props.children}
                <Tab />
            </div>
        )
    }
}
