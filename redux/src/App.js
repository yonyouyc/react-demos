import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todolist'
import AddTodo from './components/addtodo'
class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1
          >
            Learn React-redux
          </a>
          <AddTodo></AddTodo>
          <TodoList></TodoList>
        </header>
      </div>
    );
  }
}

export default App;
