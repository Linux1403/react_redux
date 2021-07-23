import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increamentAction} from '../../redux/actions/count'
class Sum extends Component {
    add=()=>{
        this.props.add(1)
    }
    render() {
        return (
            <div>
                <h2>王一博 杨洋 很好</h2>
                <h2>当前和为：{this.props.sum} </h2>
                <button onClick={this.add}>点我加1</button>
                
            </div>
        )
    }
}

export default connect(
    store=>({sum:store}),
    {
        add:increamentAction
    }
)(Sum)
