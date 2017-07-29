import React,{Component} from "react"

export default class Head extends Component {
    render(){
        return (
            <div className="head">
                {this.props.back?<span onClick={()=>{this.props.history.goBack()}} className="back">&lt;</span>:null}
                {this.props.title}
            </div>
        )
    }
}
