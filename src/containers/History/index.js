import React,{Component} from "react"
import {connect} from "react-redux"
import {history} from "../../store/actions"
import Head from "../../components/Head";
import ToDoList from "../../components/ToDoList";
import "../Home/index.css"

class History extends Component {

    componentDidMount(){
        this.props.getAllList(this.props);
    }

    render(){
        return (
            <div className="history">
                <Head title="全部事项" />
                <ToDoList listType="history" changeStar={this.props.changeStar} deleteToDo={this.props.deleteToDo} style={{marginTop: "10px"}} list={this.props.allList} />
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        ...state.historyReducer
    };
};

export default connect(mapStateToProps,history)(History)
