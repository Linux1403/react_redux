import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'

import {addPersonAction} from "../../redux/actions/person"

class Person extends Component {
    addPerson=()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        console.log(personObj)
        this.props.addPerson(personObj)
        this.nameNode.value=''
        this.ageNode.value=''
    }
    render() {
        console.log("hhh")
        console.log(this.props)
        return (
            <div>
                <hr></hr>
                <h2>我是Person组件 上面count组件的和为{this.props.count}</h2>
                <input ref={c=>this.nameNode=c} placeholder="请输入姓名"></input>
                <br></br>
                <input ref={c=>this.ageNode=c} placeholder="请输入年龄"></input>
                <br></br>
                <button onClick={this.addPerson}>添加</button>
                <br></br>
              <ul>
                { 
                     this.props.rens.map((item)=>{
                      return <li key={item.id}>
                          姓名：{item.name}----年龄：{item.age}
                      </li>
                  })
                  }
              </ul>
            </div>
        )
    }
}

export default connect(
    state=>({count:state.count,rens:state.person}),
    {
        addPerson:addPersonAction
    }
)(Person)