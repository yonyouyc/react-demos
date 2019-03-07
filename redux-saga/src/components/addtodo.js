// 输入框和新增todo按钮
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodoAsync } from '../actions'
class AddTodo extends Component {
  state = {
    text: ''
  }
  handleChange (event) {
    this.setState({ text: event.target.value })
  }
  handleAdd () {
    debugger
    const { addTodo } = this.props
    addTodo(this.state.text)
    this.setState({ text: '' })
  }
  render () {
    return (
      <div >
        <input type="text" value={ this.state.text } onChange={ this.handleChange.bind(this) } />
        <button onClick={ this.handleAdd.bind(this) }>add</button>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(addTodoAsync(text))
    }
  }
}
export default connect(null, mapDispatchToProps)(AddTodo)