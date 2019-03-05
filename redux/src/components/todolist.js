// 用于展现所有的待办列表
import React, { Component } from 'react';
import TodoItem from './todoitem'
import { connect } from 'react-redux'
class TodoList extends Component {
  render () {
    const { todos } = this.props
    const list = todos.map((item, index) => {
      return <TodoItem item={ item } index={ index } key={ index }></TodoItem>
    })
    return (
      <div >{ list }
      </div>
    )
  }
}
const mapStateToProp = state => {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProp, null)(TodoList)