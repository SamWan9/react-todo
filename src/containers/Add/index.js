import React, {Component} from "react"
import {connect} from "react-redux"
import {add} from "../../store/actions"
import Head from "../../components/Head";
import "./index.css"

class Add extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let data={};
        data.time=this.$date.value+" "+this.$time.value;
        data.content=this.$text.value;
        data.star=this.$star.value==="isStar";
        data.isDone=false;
        this.props.addToDo(data);
        this.props.history.replace("/history");
    };

    render() {
        return (
            <div className="add">
                <Head title="添加事项"/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="form-group-title" htmlFor="date">截至时间</label>
                        <input ref={d=>this.$date=d} required name="date" type="date" id="date"/>
                        <input ref={t=>this.$time=t} required name="time" type="time" id="time"/>
                    </div>
                    <div className="form-group">
                        <label className="form-group-title" htmlFor="content">内容简述</label>
                        <textarea ref={t=>this.$text=t} required rows="4" name="content" id="content"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="star" className="form-group-title">是否星标</label>
                        <select ref={s=>this.$star=s} name="star" id="star">
                            <option value="noStar">否</option>
                            <option value="isStar">是</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input className="submit" type="submit" value="添加"/>
                    </div>
                </form>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        ...state.historyReducer
    }
};

export default connect(mapStateToProps, add)(Add)
