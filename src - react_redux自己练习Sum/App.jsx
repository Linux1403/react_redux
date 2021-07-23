import React, { Component } from 'react'
import Count from  './containers/Count'
import Sum  from './containers/Sum'


export default class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count></Count>
        <Sum></Sum>
      </div>
    )
  }
}
