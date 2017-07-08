import React, {Component} from "react"
import {connect} from "react-redux"
import {DELETE_COMPLETE_ALL, CHANGE_FILTER} from "../store/action-types"

class TodoFooter extends Component {
    render() {
        return (
            <div className="panel-footer">
                <div className="row">
                    <div className="col-md-4">
                        <span style={{lineHeight: "34px"}}>还有{this.props.activeCount}件待办事项</span>
                    </div>
                    <div className="col-md-5">
                        <button
                            onClick={() => {
                                this.props.changeFilter("all")
                            }}
                            style={{marginRight: "5px"}}
                                className={"btn btn-sm" + (this.props.filter === "all" ? " btn-success" : " btn-default")}>
                            全部
                        </button>
                        <button
                            onClick={() => {
                                this.props.changeFilter("active")
                            }}
                            style={{marginRight: "5px"}}
                            className={"btn btn-sm" + (this.props.filter === "active" ? " btn-success" : " btn-default")}>
                            未完成
                        </button>
                        <button
                            onClick={() => {
                                this.props.changeFilter("complete")
                            }}
                            className={"btn btn-sm" + (this.props.filter === "complete" ? " btn-success" : " btn-default")}>
                            已完成
                        </button>
                    </div>
                    <div className="col-md-3">
                        <button
                            onClick={() => {
                                this.props.deleteCompleteAll()
                            }}
                            className="btn btn-sm btn-danger">
                            删除已完成
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        activeCount: state.todo.filter(item => !item.completed).length,
        filter: state.filter
    }),
    {
        deleteCompleteAll: () => ({type: DELETE_COMPLETE_ALL}),
        changeFilter: filter => ({type: CHANGE_FILTER, filter})
    }
)(TodoFooter);