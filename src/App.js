import React, { Component } from 'react'
import './App.css';
import TodoHeader from './components/TodoHeader.js'
import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'
export default class App extends Component {
  state = {
    todos: [{
      id:0,
      text: "Develop a todo list",
      completed: false
    },
    {
      id:1,
      text: "Buy a panini",
      completed: true
    },
    {
      id:2,
      text: "Develop a speed typing test app",
      completed: false
    }],
    remaining : 0
  }
  render(){
    const { remaining, todos } = this.state;
    return(
      <div className="App">
        <TodoHeader remaining={remaining}/>
        <TodoForm />
        <TodoList  todos={todos}/>
      </div>  
    );
  }
}
