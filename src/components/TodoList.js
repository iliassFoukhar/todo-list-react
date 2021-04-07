import React, { Component } from 'react'
import Todo from './Todo.js'

export default class TodoList extends Component {
    render() {
        const {todos} = this.props;
        
        return (
            <div className="todoList">
                <ul>
                    {todos.map((todo, key)=>(
                        <Todo 
                            text={todo.text} 
                            id={todo.id}
                            completed={todo.completed}
                            clicked={this.props.clicked.bind(this)}
                            delete={this.props.delete.bind(this)}
                            />
                    ))}
                </ul>
            </div>
        )
    }
}

