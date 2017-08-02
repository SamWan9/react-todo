import React,{Component} from "react"

export default class ToDoList extends Component {

    handleClick=(id)=>{
        this.props.deleteToDo(id);
    };

    handleClickStar=id=>{
        this.props.changeStar(id);
    };

    render(){
        return (
            <ul style={this.props.style} className="list">
                {
                    this.props.list.map((item,index)=>(
                        <li key={index} style={{borderColor: item.isDone?'#777':'#06ff00'}} className="list-item">
                            <div className="time">
                                <span>{item.time}</span>
                                <i onClick={()=>{this.handleClick(item.id)}} className="iconfont icon-artboard8"></i>
                            </div>
                            <div className="content">{item.content}</div>
                            <div className="state">
                                <div className="complete-group">
                                    <input type="checkbox" id="complete" checked={item.isDone} onChange={()=>{this.props.changeDone(item.id)}} />
                                    <label htmlFor="complete">
                                        {item.isDone?"已完成":"未完成"}
                                    </label>
                                </div>
                                <i onClick={()=>{this.handleClickStar(item.id)}} style={{color: item.star?"red":""}} className="iconfont icon-star"></i>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
