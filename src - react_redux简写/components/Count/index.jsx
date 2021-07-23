import React, { Component } from "react";

export default class Count extends Component {
  state = {
    greet: "王一博 和 杨洋 祝你快乐永远",
  };

  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value*1)
   
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value*1)

  };
  oddIncrement = () => {
    const { value } = this.selectNumber;
    console.log("哈哈 这里是奇数加")
    console.log(this.props)
    const {count} = this.props
    console.log(count)
    if(count%2!==0){
      this.props.jia(value*1)
    }
  
  };
  asyncIncrement = () => {
    const { value } = this.selectNumber;
    this.props.increamentAsyncAction(value,500)
   
  };
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.state.greet}</h1>
        <h2>当前求和为：{this.props.count}</h2>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.oddIncrement}>当前和为奇数进行加</button>
        <button onClick={this.asyncIncrement}>异步加</button>
      </div>
    );
  }
}
