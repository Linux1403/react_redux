import React, { Component } from "react";
import store from "../../redux/store";
import {increamentAction,decreamentAction,increamentAsyncAction} from '../../redux/count_action'

export default class Count extends Component {
  state = {
    greet: "王一博 和 杨洋 祝你快乐永远",
  };
  componentDidMount(){
    // 检测redux的变化 随时渲染更新
    // store.subscribe(()=>{
    //   this.setState({})
    // })
  }

  increment = () => {
    const { value } = this.selectNumber;
    console.log("组件里面的value "+ value)
    console.log(increamentAction(value*1))
    store.dispatch(increamentAction(value*1))
    // store.dispatch({
    //   type: "increment",
    //   value: value,
    // });
  };
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(decreamentAction(value))

  };
  oddIncrement = () => {
    const { value } = this.selectNumber;
    const  count  = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(increamentAction(value))

    }
  };
  asyncIncrement = () => {
    const { value } = this.selectNumber;
    setTimeout(() => {
      store.dispatch(increamentAsyncAction(value,500))

    }, 2000);
  };
  render() {
    return (
      <div>
        <h1>{this.state.greet}</h1>
        <h2>当前求和为：{store.getState()}</h2>
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
