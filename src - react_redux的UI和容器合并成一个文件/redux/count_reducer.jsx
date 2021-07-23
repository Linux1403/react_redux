/*
    这个文件用于创建一个为Count组件服务的reducer，reducer的本质是一个函数
*/
import {INCREMENT,DECREMENT} from './Constant'

const InitState = 0
export default function countReducer(preState=InitState,action){
    console.log("preState "+preState)
    const {type,value} = action
    console.log("value "+value)
    console.log("type "+type)
    switch(type){
        case INCREMENT:
            return preState+value*1;
        case DECREMENT:
            return preState-value*1;
        default:
            return preState;
    }

}