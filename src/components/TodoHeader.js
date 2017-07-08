import React, {Component} from "react"
import {connect} from "react-redux"
import {ADD_TODO} from "../store/action-types"

/**
 * 当在输入框中按回车键的时候，会向store发送一个action {type:ADD_TODO}
 *
 * */

class TodoHeader extends Component {

    handleKeyDown = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            this.props.addToDo(e.target.value);
            e.target.value = "";
        }
    };

    render() {
        return (
            <div className="panel-heading">
                <input type="text" onKeyDown={this.handleKeyDown} className="form-control" placeholder="输入你想做的事情"/>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    /*dispatch => ({
        addToDo: title => dispatch({type: ADD_TODO, title})
    })*/
    {addToDo: title => ({type: ADD_TODO, title})}
)(TodoHeader);