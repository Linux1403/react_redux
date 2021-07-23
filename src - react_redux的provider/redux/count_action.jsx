import {INCREMENT,DECREMENT} from './Constant'
export const increamentAction=value=>({type:INCREMENT,value})
export const decreamentAction=value=>({type:DECREMENT,value})


// 异步action 实质就是action的值为函数  异步action会调用同步action
// 异步action不是必须要写的
export const increamentAsyncAction = (value,time)=>{
    return (
        (dispatch)=>{
            setTimeout(()=>{
                dispatch(increamentAction(value))
            },time)
        }
    )
}
