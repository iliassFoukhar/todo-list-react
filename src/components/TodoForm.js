import React, { Component } from 'react'

export default class TodoForm extends Component {
   
    render() {
    
        return (
            <form>
                <label htmlFor="todo">Add a todo</label>
                <input 
                    type="text"
                    name="todo"/>
                <button 
                    type="submit" 
                    id="addBtn" >+</button>
            </form>
        )
    }
}
