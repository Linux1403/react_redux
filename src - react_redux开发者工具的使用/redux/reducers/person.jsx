import {ADDPERSON} from '../Constant'

const InitState=[{id:'001',name:'王一博',age:23}]
export default function PersonReducer(preState=InitState,action){
    console.log("personreducer------")
    console.log(action)
    const {type,personObj}=action
    switch(type){
        case ADDPERSON:
            // redux会进行浅比较 如果用unshift这些东西 不会进行更新渲染
            // 纯函数：输入1 输出1
            // 不得改写参数数据（改了就不是纯函数）
            // 不能产生任何副作用 例如网络请求 输入输出设备
            // 不能调用Date.now等不纯函数
            // 所以在这里不能用unshift等
            return [personObj,...preState];
        default:
            return preState;
    }
    

}