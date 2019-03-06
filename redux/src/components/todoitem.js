// 每一个待办事项，包含设置完成
import React, { Component } from 'react';
import { toggleTodo } from '../actions'
import { connect } from 'react-redux'
class TodoItem extends Component {
  handleClick () {
    const { index, toggleItem } = this.props
    toggleItem(index)
  }
  render () {
    const { item } = this.props
    return (
      <div className={ item.completed ? 'completed' : 'notcompleted' }>{ item.text }
        <button onClick={ this.handleClick.bind(this) }>完成</button>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toggleItem: index => {
      dispatch(toggleTodo(index))
    }
  }
}
export default connect(null, mapDispatchToProps)(TodoItem)