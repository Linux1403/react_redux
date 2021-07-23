import React, { Component } from 'react'
import Count from  './containers/Count'
import store from './redux/store'


export default class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {/* 给容器组件传递 */}
        <Count store={store} ></Count>

      </div>
    )
  }
}
