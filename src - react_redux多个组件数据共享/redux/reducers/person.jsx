import {ADDPERSON} from '../Constant'

const InitState=[{id:'001',name:'ηδΈε',age:23}]
export default function PersonReducer(preState=InitState,action){
    console.log("personreducer------")
    console.log(action)
    const {type,personObj}=action
    switch(type){
        case ADDPERSON:
            return [personObj,...preState];
        default:
            return preState;
    }
    

}