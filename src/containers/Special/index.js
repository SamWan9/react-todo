import React,{Component} from "react"
import {connect} from "react-redux"
import {star} from "../../store/actions"
import Head from "../../components/Head";
import ToDoList from "../../components/ToDoList";

class Special extends Component {

    componentDidMount(){
        this.props.getStarList();
    }

    render(){
        return (
            <div className="special">
                <Head title="星标任务" />
                <ToDoList style={{marginTop: "10px"}} changeStar={this.props.removeStar} deleteToDo={this.props.deleteToDoStar} list={this.props.starList} />
            </div>
        )
    }
}

let mapStateToProps=state=>{
    return {
        ...state.starReducer
    }
};

export default connect(mapStateToProps,star)(Special)
