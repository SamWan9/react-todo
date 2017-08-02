import React, {Component} from "react"
import {connect} from "react-redux"
import {home} from "../../store/actions"
import Head from "../../components/Head";
import ToDoList from "../../components/ToDoList";
import "./index.css"

class Home extends Component {

    changeDone = (name, id) => {
        if (name === "today") {

        }

        if (name === "tomorrow") {

        }
    };

    componentDidMount() {
        this.props.getTodayList();
        this.props.getTomorrowList();
    }

    render() {
        return (
            <div className="home">
                <Head title="首页"/>
                <h2>今日</h2>
                <ToDoList changeStar={this.props.changeStarToday} deleteToDo={this.props.deleteToDoToday} list={this.props.todayList} changeDone={(id) => {
                    this.changeDone("today", id)
                }}/>
                <h2>明日</h2>
                <ToDoList changeStar={this.props.changeStarTomorrow} deleteToDo={this.props.deleteToDoTomorrow} list={this.props.tomorrowList} changeDone={(id) => {
                    this.changeDone("tomorrow", id)
                }}/>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        ...state.homeReducer
    };
};

export default connect(mapStateToProps,home)(Home)
