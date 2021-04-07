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
    remaining : 2
  }

  clicked = (id) => {
    let rem = this.state.remaining;
    this.setState({ 
      todos:this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
        if(todo.completed === true){
          rem -= 1;
        }
        else{
          rem += 1;
        }
      }
      return todo;
    })});

    this.setState({remaining: rem});
  };

  addTodo = (text) => {
    let newTodos = [...this.state.todos];
    let id = newTodos[newTodos.length-1] + 1;
    let newTodo = {
      id:id,
      text:text,
      completed:false
    };
    newTodos= [...newTodos, newTodo];
    this.setState({
      todos : newTodos,
      remaining : this.state.remaining + 1
    }) 
  }
  update = (id, text) => {
    this.setState({ todos:this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.text = text;
      }
      return todo;
    })})
  };
  delete = (id) => {
    let wasDone = false;
    this.state.todos.map(todo=>{
      if(id === todo.id){
        wasDone = todo.completed;
      }
      return todo;
    })
    this.setState({
      todos:this.state.todos.filter(todo=>{
          return todo.id !== id;
    })});
    if(wasDone == false){
      this.setState({
        remaining: this.state.remaining - 1
      });
    }
    
  }
  render(){
    const { remaining, todos } = this.state;
    return(
      <div className="App">
        <TodoHeader 
            remaining={remaining}/>
        <TodoForm 
            addTodo={this.addTodo}/>
        <TodoList  
            todos={todos} 
            clicked={this.clicked}
            delete={this.delete}
            update={this.update}
            />            
      </div>  
    );
  }
}
