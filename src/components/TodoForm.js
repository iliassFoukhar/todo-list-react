import React, { Component } from 'react'

export default class TodoForm extends Component {
   state = {
       text: ""
    }
    changeInput = (e) => {
        this.setState({text:e.target.value});
    }
    render() {
        const {text} = this.state;
        return (
            <form>
                <label htmlFor="todo">Add a todo</label>
                <div className="formAdd">
                    <input 
                        type="text"
                        name="todo"
                        onChange={this.changeInput.bind(this)}
                        value={text}/>
                    <button 
                        type="button"
                        id="addBtn" 
                        onClick={this.props.addTodo.bind(this, text)}>+</button>
                </div>
            </form>
        )
    }
}
