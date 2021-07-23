// 引入为Count组件服务的reducer
import count from './count'
// 引入为Person组件服务的reducer
import persons from './person'

import {combineReducers} from 'redux'



// 汇总所有的reducer变为一个
// combineReducers是个函数 他传入的对象就是redux帮我们保存的总状态的对象
// 保存两个数值 count组件求和的数值 person组件一堆人的信息 数组
export default combineReducers({
    count,
    persons
})
