import React, { Component } from "react";

export default class Count extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    const { value } = this.selectNumber;
    const { count } = this.state;
    console.log(value)
    console.log(count)
    this.setState({
      count: count + value*1,
    });
  };
  decrement = () => {
    const { value } = this.selectNumber;
    const { count } = this.state;
    this.setState({
      count: count - value*1,
    });
  };
  oddIncrement = () => {
    const { value } = this.selectNumber;
    const { count } = this.state;
    if(count%2!==0){
        this.setState({
            count: count + value*1,
          });
    }
  };
  asyncIncrement = () => {
    const { value } = this.selectNumber;
    const { count } = this.state;
    setTimeout(()=>{
        this.setState({
            count: count + value*1,
          });
    },2000)
  };
  render() {
    return (
      <div>
        <h2>当前求和为：{this.state.count}</h2>
        <select ref={c => this.selectNumber = c}>
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
