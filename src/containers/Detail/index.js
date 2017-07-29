import React,{Component} from "react"
import Head from "../../components/Head";

export default class Detail extends Component {
    render(){
        return (
            <div>
                <Head history={this.props.history} title="事项详情" back={true} />
            </div>
        )
    }
}
