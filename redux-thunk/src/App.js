import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todolist'
import AddTodo from './components/addtodo'
class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <AddTodo></AddTodo>
          <TodoList></TodoList>
        </header>
      </div>
    );
  }
}

export default App;
