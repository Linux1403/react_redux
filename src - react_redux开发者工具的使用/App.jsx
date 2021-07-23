import React, { Component } from 'react'
import Count from  './containers/Count'
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
