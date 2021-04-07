import React, { Component } from 'react'
import Todo from './Todo.js'

export default class TodoList extends Component {
    render() {
        const {todos} = this.props;
        
        return (
            <div className="todoList">
                <ul>
                    {todos.map((todo, key)=>(
                        //<li key={key}>{todo.text}</li>
                        <Todo 
                            text={todo.text} 
                            id={todo.id}
                            completed={todo.completed}
                            />
                    ))}
                </ul>
            </div>
        )
    }
}
