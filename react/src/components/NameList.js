import React, { Component } from 'react';
const users = [
    {
        username: 'Jerry',
        age: 21,
        gender: 'male'
    },
    {
        username: 'Tomy',
        age: 22,
        gender: 'male'
    },
    {
        username: 'Lily',
        age: 19,
        gender: 'female'
    },
    {
        username: 'Lucy',
        age: 20,
        gender: 'female'
    }
]

class NameList extends Component {
    render(){
        return (
            <div>
                {
                    users.map((item,index) => {
                        return (
                            <div key={index}>
                                <div>姓名：{item.username}</div>
                                <div>年龄：{item.age}</div>
                                <div>性别：{item.gender}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default NameList;