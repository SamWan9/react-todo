import React,{Component} from "react"
import {NavLink} from "react-router-dom"

export default class Tab extends Component {
    render(){
        return (
            <nav className="menu">
                <NavLink to="/home" activeClassName="active">
                    <i className="iconfont icon-shouye0"></i>
                    <span>Home</span>
                </NavLink>
                <NavLink to="/special"  activeClassName="active">
                    <i className="iconfont icon-star"></i>
                    <span>Special</span>
                </NavLink>
                <NavLink to="/history"  activeClassName="active">
                    <i className="iconfont icon-history"></i>
                    <span>History</span>
                </NavLink>
                <NavLink to="/add"  activeClassName="active">
                    <i className="iconfont icon-tianjia"></i>
                    <span>Add</span>
                </NavLink>
            </nav>
        )
    }
}
