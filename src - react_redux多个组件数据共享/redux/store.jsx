/*
    该文件专门用于暴露一个store对象 整个应用只有一个store对象
*/

// 引入createStore 专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'

// 引入为Count组件服务的reducer
import countReducer from '../redux/reducers/count'
import PersonReducer from '../redux/reducers/person'

// 有异步任务 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'


// 汇总所有的reducer变为一个
// combineReducers是个函数 他传入的对象就是redux帮我们保存的总状态的对象
// 保存两个数值 count组件求和的数值 person组件一堆人的信息 数组
const allReducer = combineReducers({
    count:countReducer,
    person:PersonReducer
})

// 暴露store

export default createStore(allReducer,applyMiddleware(thunk))