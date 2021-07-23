// 引入connect 用于连接UI组件和redux
import {connect} from 'react-redux'
import {increment,decrement,incrementAsync} 
from '../../redux/actions/count'
import React, { Component } from "react";


class Count extends Component {
  state = {
    greet: "王一博 和 杨洋 祝你快乐永远",
  };

  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(value*1)
   
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(value*1)

  };
  oddIncrement = () => {
    const { value } = this.selectNumber;
    console.log("哈哈 这里是奇数加")
    console.log(this.props)
    const {count} = this.props
    console.log(count)
    if(count%2!==0){
      this.props.increment(value*1)
    }
  
  };
  asyncIncrement = () => {
    const { value } = this.selectNumber;
    this.props.incrementAsync(value,500)
   
  };
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>我是count组件---Person组件人数为：{this.props.persons.length}</h1>
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



// //第三种写法
export default connect(
    state=>({count:state.count,persons:state.persons}),
    // 写成一个对象 点到为止  让别人来dispatch
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)



// //第二种写法
// export default connect(state=>{
//     return {count:state}
// }
// ,dispatch=>{
//     return {
//         jia:number=>{
//             dispatch(incrementAction(number))
//         },
//         jian:number=>{
//             dispatch(decreamentAction(number))
//         },
//         incrementAsyncAction:(number,time)=>{
//             dispatch(incrementAsyncAction(number,time))
//         }
//     }
// })(CountUI)


// a的返回的对象中的key 就作为传递给UI组件props的key
// value就作为传递给了UI组件props的value

// // 第一种写法
// function mapStateToProps(state){
//     return {count:state}
// }

// function mapDispatchToProps(dispatch){
//     return {
//         jia:number=>{
//             dispatch(incrementAction(number))
//         },
//         jian:number=>{
//             dispatch(decreamentAction(number))
//         },
//         incrementAsyncAction:(number,time)=>{
//             dispatch(incrementAsyncAction(number,time))
//         }
//     }
// }


// connect（）（）可以看出connect是一个函数 返回的也是一个函数
// export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

