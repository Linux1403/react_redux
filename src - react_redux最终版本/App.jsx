import React, { Component } from 'react'
import Count from  './containers/Count'//引入的是容器组件 而不是UI组件
// import Sum  from './containers/Sum'
import Person from './containers/Person'


export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count></Count>
        {/* <Sum></Sum> */}
        <Person></Person>
      </div>
    )
  }
}
