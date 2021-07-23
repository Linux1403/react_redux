// 引入Count的UI组件
import CountUI from '../../components/Count'

// 引入connect 用于连接UI组件和redux
import {connect} from 'react-redux'
import {increamentAction,decreamentAction,increamentAsyncAction} from '../../redux/count_action'

// //第三种写法
export default connect(
    state=>({count:state}),
    // 写成一个对象 点到为止  让别人来dispatch
    {
        jia:increamentAction,
        jian:decreamentAction,
        increamentAsyncAction:increamentAsyncAction
    }
)(CountUI)



// //第二种写法
// export default connect(state=>{
//     return {count:state}
// }
// ,dispatch=>{
//     return {
//         jia:number=>{
//             dispatch(increamentAction(number))
//         },
//         jian:number=>{
//             dispatch(decreamentAction(number))
//         },
//         increamentAsyncAction:(number,time)=>{
//             dispatch(increamentAsyncAction(number,time))
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
//             dispatch(increamentAction(number))
//         },
//         jian:number=>{
//             dispatch(decreamentAction(number))
//         },
//         increamentAsyncAction:(number,time)=>{
//             dispatch(increamentAsyncAction(number,time))
//         }
//     }
// }


// connect（）（）可以看出connect是一个函数 返回的也是一个函数
// export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

