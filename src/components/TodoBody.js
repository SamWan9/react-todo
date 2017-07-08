import React, {Component} from "react"
import {connect} from "react-redux"
import {DELETE_TODO, TOGGLE_TODO,SELECT_ALL} from "../store/action-types"

class TodoBody extends Component {

    handleClick = (index) => {
        this.props.deleteTodo(index);
    };

    render() {
        return (
            <div className="panel-body">
                <ul className="list-group">

                    {
                        this.props.todo.length>0?
                            <li className="list-group-item">
                                <input onChange={(e)=>{this.props.selectAll(e.target.checked)}} checked={this.props.activeCount===0} type="checkbox" />
                                <span style={{marginLeft: "10px"}}>{this.props.activeCount===0?"取消":"全选"}</span>
                            </li>:null
                    }

                    {
                        this.props.todo.map((item, index) => (
                            <li style={item.completed?{textDecoration: "line-through",color: "#cecece"}:{}} key={index} className="list-group-item">
                                <input onChange={() => {
                                    this.props.toggleTodo(index)
                                }} type="checkbox" checked={item.completed} />
                                <span style={{marginLeft: "10px"}}>{item.title}</span>
                                <button onClick={() => {
                                    this.handleClick(index)
                                }} className="btn btn-danger btn-xs pull-right">x
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => (
        {
            todo: state.todo.filter(item=>{
                switch (state.filter){
                    case "active":
                        return !item.completed;
                    case "complete":
                        return item.completed;
                    default:
                        return true;
                }
            }),
            activeCount: state.todo.filter(item=>!item.completed).length
        }
    ),
    /*dispatch => ({
     deleteTodo: index => dispatch({type: DELETE_TODO, index})
     })*/
    {
        deleteTodo: index => ({type: DELETE_TODO, index}),  //可以简写成这样，connect会自动调用dispatch方法
        toggleTodo: index => ({type: TOGGLE_TODO, index}),
        selectAll: checked => ({type: SELECT_ALL,checked})
    }
)(TodoBody);